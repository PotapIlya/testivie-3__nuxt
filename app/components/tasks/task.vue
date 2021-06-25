<template>
    <div :class="{'bg-blue-200' : index % 2 === 0 }">
        <div
            class="flex justify-center w-1/6"
            v-if="data !== null">
            {{ data.id }}
        </div>
        <div
            class="flex justify-center w-full pointer"
            @click="redirect(data.id)"
        >
            {{ data.title }}
        </div>
        <div class="flex justify-center w-2/6">
            <button
                @click="redirect(data.id)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Show
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowTask',
    props: {
        data: {
            type: Object,
            default: null
        },
        index: {
            type: Number
        }
    },
    methods: {
        redirect (id) {
            this.$router.push('task/' + id);
        }
    }
};
</script>
