import { createStore } from 'vuex';
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const api = 'https://ahavalounge-2.onrender.com/';

export default createStore({
  state: {
    users: [], 
    user: null, 
    movies: [], 
    movie : null,
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
    }
  }
  ,
  actions: {
    async fetchUser({ commit }, id) {
      try {
        const { data } = await axios.get(`${api}user/${id}`);
        commit('setUser', data.results);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch user', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async fetchUsers({ commit }) { 
      try {
        const { data } = await axios.get(`${api}user`);
        commit('setUsers', data.results);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch users', {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async  register({ dispatch }, payload) {
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
        const { results } = await axios.patch(`${api}user/${payload.userID}`, payload);
        const { msg, err } = results;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async deleteUser({ dispatch }, id) {
      try {
        const { results } = await axios.delete(`${api}user/${id}`);
        const { msg, err } = results;
        if (msg) {
          dispatch('fetchUsers');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async fetchMovies({ commit }) {
      try {
        const { results } = await (await axios.get(`${api}movie`)).data;
        console.log('Fetched movies data:', results);
        if (results) {
          commit('setMovies', results);
        } else {
          toast.error('No movies found or incorrect data format', {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        console.error('Fetch Movies Error:', e.message);
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async fetchMovie({commit}, id){
      try {
        const { results } = await axios.get(`${api}movie/${id}`);
        console.log('Fetched movies data:', results);
        if (results) {
          commit('setMovie', results);
        } else {
          toast.error('No movies found or incorrect data format', {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        console.error('Fetch Movies Error:', e.message);
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async addMovie({ dispatch }, payload) {
      try {
        const { results } = await axios.post(`${api}movie/add`, payload);
        const { msg } = results;
        if (msg) {
          dispatch('fetchMovies');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async updateMovie({ dispatch }, payload) {
      try {
        const { results } = await axios.patch(`${api}movie/${payload.movieID}`, payload);
        const { msg } = results;
        if (msg) {
          dispatch('fetchMovies');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    },
    async deleteMovie({ dispatch }, id) {
      try {
        const { results } = await axios.delete(`${api}movie/${id}`);
        const { msg } = results;
        if (msg) {
          dispatch('fetchMovies');
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    }
  },
  modules: {}
});
