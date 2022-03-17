<template>
    <base-card>
        <h4>{{testimonial.name}} ({{ testimonial.location }})</h4>
        <p>{{ testimonial.message }} </p>
    </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    components: {
        BaseCard
    },
    props: ['testimonial']
}
</script>
