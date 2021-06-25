<template>
    <ul v-if="GET_BASIC_ARRAY_PEOPLE.length" class="">
        <li v-for="item in GET_BASIC_ARRAY_PEOPLE" :key="item.id">
            <label :for="item">
                <input v-model="peopleArray" :value="item" type="checkbox">
                <span>{{ item }}</span>
            </label>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'FilterTasks',
    data: () => ({
        peopleArray: []
    }),
    computed: {
        ...mapGetters('tasks', ['GET_BASIC_ARRAY_PEOPLE', 'GET_PEOPLES'])
    },
    watch: {
        GET_PEOPLES () {
            setTimeout(() => {
                this.peopleArray = this.GET_PEOPLES;
            }, 50);
        },
        peopleArray () {
            this.FILTER_TASKS_PEOPLE(this.peopleArray);
        }
    },
    mounted () {
        this.peopleArray = this.GET_PEOPLES;
    },
    methods: {
        ...mapActions('tasks', ['FILTER_TASKS_PEOPLE'])
    }
};
</script>
