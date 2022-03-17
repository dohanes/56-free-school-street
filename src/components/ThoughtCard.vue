<template>
  <base-card>
        <h4>{{ thought.author.name }}, {{ thought.author.tenure }}</h4>
        <p>{{ thought.content }} </p>
    </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    components: {
        BaseCard
    },
    props: ['thought']
}
</script>

<style>

</style>