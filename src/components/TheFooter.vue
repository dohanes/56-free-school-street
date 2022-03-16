<template>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">&copy; {{ year }} Zorro Ohanessian. Website by Daniel Ohanessian</footer>
</template>

<script>

export default {
    setup() {
        const CURRENT_YEAR = new Date().getFullYear();

        return { year: CURRENT_YEAR };
    }
}
</script>
