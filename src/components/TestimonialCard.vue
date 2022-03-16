<template>
    <div class="card card-body mb-2">
        <h4>{{testimonial.name}} ({{ testimonial.location }})</h4>
        <p>{{ testimonial.message }} </p>
    </div>
</template>

<script>
export default {
    props: ['testimonial']
}
</script>
