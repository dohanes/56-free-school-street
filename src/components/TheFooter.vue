<template>
    <el-footer>&copy; {{ year }} Zorro Ohanessian. Website by Daniel Ohanessian</el-footer>
</template>

<script>
import { ElFooter } from 'element-plus';

export default {
    components: {
        ElFooter
    },
    setup() {
        const CURRENT_YEAR = new Date().getFullYear();

        return { year: CURRENT_YEAR };
    }
}
</script>
