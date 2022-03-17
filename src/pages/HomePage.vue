<template>
    <div class="row">
        <div class="col-8">
            <h1 class="mb-0">56 Free School Street</h1>
            <h3 class="mt-0">a book by Zorro Ohanessian</h3>
            <p><i>56 Free School Street</i> will bring immense pleasure to readers who treasure reading about the boarding school life that is witty, and a distinction reached all too seldom in present-day culture. This is the kind of illusory quiet story that deserves a second reading...<br /><br />In this book the reader is invited inside the fearsome boundary walls of an old school system. It’s more than a coming of age story, it’s a study of the old age thinking where students were sent to a far-off country with the hope that their detractors would not find them and not reach them, thus giving them the opportunity to live a life not enjoyed by the very families that sent them there, who themselves languished in the scorching deserts while being deported from the land of their forefathers.<br /><br />
In an exclusive boarding school in the shadowy sections of the old Calcutta (present Kolkata) city, stands what can be regarded as an epitaph of the thousands of Armenian students who were sent there from various parts of the world to be educated and brought up to be upstanding icons of the future Armenian generations. Upon graduation they would be immersed into various societes all over the world! These were the graduates of the hugely successful alma mater known as <i>56 Free School Street</i>.<br /><br />The book has reawakened the memories of the countless graduates who have passed through the holy halls of the great institution - The Armenian College of Calcutta, India.</p>
        </div>
        <div class="col-4" :style="{textAlign: 'center'}">
            <iframe type="text/html" sandbox="allow-scripts allow-same-origin allow-popups" width="336" height="550" frameborder="0" allowfullscreen style="max-width:100%" src="https://read.amazon.com/kp/card?asin=B07MGWGC56&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_9FGXABN7QXDKNJHBZQFJ" ></iframe>
        </div>
    </div>
    <br />
    <div class="row">
        <div class="col-6">
            <h3>Photo Gallery</h3>
            <photo-gallery />
        </div>
        <div class="col-6">
            <h3>Testmonials from Readers</h3>
            <div :style="{height: '800px', overflowY: 'scroll'}">
                <testimonial-card v-for="testimonial in testimonials" :key="testimonial.name" :testimonial="testimonial" />
            </div>
        </div>
    </div>
</template>

<script>
import TestimonialCard from '../components/TestimonialCard.vue';
import PhotoGallery from '../components/PhotoGallery.vue';

import testimonials from '../assets/data/testimonials.js'

export default {
    components: {
        TestimonialCard,
        PhotoGallery
    },
    setup() {

        return {
            testimonials
        }
    }
}
</script>
