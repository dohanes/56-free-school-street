<template>
  <p>Here is a place where all fellow students of Armenian College can share their thoughts, likes, dislikes, and anything else that comes to mind. If you would like to add something, please email us at <a href="mailto:56freeschoolstreet@gmail.com">56freeschoolstreet@gmail.com</a>.</p>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li v-for="(type, index) in thoughtTypes" :key="type.id" class="nav-item" role="presentation">
        <button class="nav-link" :class="{active: index === 0}" :id="`${type.name}-tab`" data-bs-toggle="tab" :data-bs-target="`#${type.id}`" type="button" role="tab" aria-controls="home" aria-selected="true">{{ type.name }}</button>
    </li>
    </ul>
    <div class="tab-content" id="myTabContent">
        <div v-for="(type, index) in thoughtTypes" :key="type.id" class="tab-pane fade" :class="{show: index === 0, active: index === 0}" :id="type.id" role="tabpanel" :aria-labelledby="`${type.id}-tab`">
            <thought-card v-for="(thought, index) in type.thoughts" :key="index" :thought="thought" />
            <br />
            <p>{{ type.description }}</p>
        </div>
    </div>
</template>

<script>
import thoughtTypes from '../assets/data/thoughts.js'
import ThoughtCard from '../components/ThoughtCard.vue'

import router from '../router.js'

export default {
    components: {
        ThoughtCard
    },
    setup() {

        function handleTabChange() {
            router.push('/');
        }

        return { thoughtTypes, handleTabChange }
    }
}
</script>

<style>

</style>