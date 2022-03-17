<template>
    <div id="photoCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="(_, index) in photos" :key="index" type="button" data-bs-target="#photoCarousel" :data-bs-slide-to="index" :class="{active: index === 0}" aria-current="true" :aria-label="`Slide ${index}`"></button>
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#photoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(photo, index) in photos" :key="index" class="carousel-item" :class="{active: index === 0}">
                <img :src="require(`../assets/img/${photo.file}`)" class="d-block w-100" :alt="`../assets/img/${photo.file}`">
                <div class="carousel-caption d-none d-md-block">
                    <p>{{ photo.caption }}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#photoCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#photoCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import photos from '../assets/data/photos.js';

export default {
    setup() {

        return { photos }
    }
}
</script>