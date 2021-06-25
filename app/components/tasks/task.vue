<template>
    <div style="display: flex; justify-content: space-between">
        <div v-if="data !== null">
            {{ data.id }} => {{ data.title }}
        </div>
        <button @click="redirect(data.id)" style="background: black; color: white">Show</button>
    </div>
</template>

<script>
export default {
    name: 'ShowTask',
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    methods: {
        redirect (id) {
            this.$router.push('task/' + id);
        }
    }
};
</script>
