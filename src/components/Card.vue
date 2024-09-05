<template>
    <div class="card">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComp"
}
</script>

<style scoped>
.card {
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 15rem;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05);
}

.card-header {
    background-color: #f28482;
    padding: 0;
}

.carousel-img-container {
    position: relative;
}

.carousel-img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
    object-fit: cover;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;
}

.carousel-img-container:hover .overlay {
    opacity: 1;
}

.movie-info {
    color: white;
    text-align: center;
}

.movie-name {
    font-size: 1.2rem;
    color: #2c3e50;
    font-weight: bold;
}

.movie-price {
    color: #f28482;
    font-size: 1.1rem;
}
</style>
