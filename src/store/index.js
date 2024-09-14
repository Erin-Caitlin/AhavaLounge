import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const api = 'https://ahavalounge-2.onrender.com//';

export default createStore({
  state: {
    users: [],
    user: null,
    movies: [],
    movie: null,
    loading: false,
    error: null,
    token: null,
  },
  mutations: {
    addUserToState(state, user) {
      state.users.push(user);
    },
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setMovies(state, movies) {
      state.movies = movies;
    },
    setMovie(state, movie) {
      state.movie = movie;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        commit('setLoading', true);
        const { data } = await axios.post(`${api}user/login`, payload);
        const { results } = data || {};
        if (results && results.token) {
          const { token, user } = results;
          commit('setToken', token);
          commit('setUser', user);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          toast.success('Login successful', {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          const errorMsg = results?.err || 'Login failed. No token returned.';
          toast.error(errorMsg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(`Login failed: ${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchUser({ commit }, id) {
      try {
        commit('setLoading', true);
        const { data } = await axios.get(`${api}user/${id}`);
        commit('setUser', data.results);
      } catch (err) {
        toast.error('Failed to fetch user', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchUsers({ commit }) {
      try {
        commit('setLoading', true);
        const { data } = await axios.get(`${api}user`);
        commit('setUsers', data.results);
      } catch (err) {
        toast.error('Failed to fetch users', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      } finally {
        commit('setLoading', false);
      }
    },
    async register({ dispatch }, payload) {
      try {
        const { data } = await axios.post(`${api}user/insert`, payload);
        const { msg, err, token } = data.results;
        if (token) {
          dispatch('fetchUsers');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async updateUser({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${api}user/${payload.userID}`, payload);
        const { msg, err } = data.results;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async deleteUser({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${api}user/${id}`);
        const { msg, err } = data.results;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.error(err, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async fetchMovies({ commit }) {
      try {
        commit('setLoading', true);
        const { data } = await axios.get(`${api}movie`);
        commit('setMovies', data.results);
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchMovie({ commit }, id) {
      try {
        commit('setLoading', true);
        const { data } = await axios.get(`${api}movie/${id}`);
        commit('setMovie', data.results);
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      } finally {
        commit('setLoading', false);
      }
    },
    async addMovie({ dispatch }, payload) {
      try {
        const { data } = await axios.post(`${api}movie/add`, payload);
        const { msg } = data.results;
        if (msg) {
          dispatch('fetchMovies');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async updateMovie({ dispatch }, payload) {
      try {
        const { data } = await axios.patch(`${api}movie/${payload.movieID}`, payload);
        const { msg } = data.results;
        if (msg) {
          dispatch('fetchMovies');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async deleteMovie({ dispatch }, id) {
      try {
        const { data } = await axios.delete(`${api}movie/${id}`);
        const { msg } = data.results;
        if (msg) {
          dispatch('fetchMovies');
          toast.success(msg, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(e.message, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    }
  },
  modules: {}
});
