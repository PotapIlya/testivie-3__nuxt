<template>
    <div>

        <button @click="SET_PAGE_NUMBER(false)">Prev</button>
        <button>{{ GET_PAGE_NUMBER + 1 }} / {{ GET_COUNT_PAGE }}</button>

        <button v-if="GET_PAGE_NUMBER+1 !== GET_COUNT_PAGE" @click="SET_PAGE_NUMBER(true)">Next</button>
        <button v-else disabled>Next</button>

        <select v-model="selectedSelect" v-if="select.length && selectedSelect" name="" id="">
            <option v-for="item in select" :key="item.id" :value="item.value">
                {{ item.value }}
            </option>
        </select>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'SortTasks',
    data: () => ({
        select: [
            { id: 1, value: 10 },
            { id: 2, value: 20 },
            { id: 3, value: 40 },
            { id: 4, value: 50 },
        ],
        selectedSelect: null,
    }),
    watch: {
        selectedSelect () {
            this.SET_AMOUNT_ONE_PAGE(this.selectedSelect);
        }
    },
    mounted () {
        this.selectedSelect = this.select[0].value;
    },
    // eslint-disable-next-line vue/order-in-components
    computed: {
        ...mapGetters('tasks', ['GET_PAGE_NUMBER', 'GET_COUNT_PAGE'])
    },
    methods: {
        ...mapActions('tasks', ['SET_PAGE_NUMBER', 'SET_AMOUNT_ONE_PAGE'])
    }

};
</script>
