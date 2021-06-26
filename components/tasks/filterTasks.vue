<template>
    <ul v-if="GET_BASIC_ARRAY_PEOPLE.length" class="filter w-2/6 lg:w-1/6 pr-4">
        <li
            v-for="item in GET_BASIC_ARRAY_PEOPLE"
            :key="item.id"
            class="filter__item my-2"
        >
            <div class="filter__item-wrapper flex">
                <input
                    :id="item"
                    v-model="peopleArray"
                    :value="item"
                    type="checkbox"
                    class="filter__item-input hidden">
                <label :for="item" class="w-full filter__item-wrapper-text">
                    <span class="filter__item-after flex items-center justify-center font-medium">1</span>
                    <span class="filter__item-text">User_{{ item }}</span>
                </label>
            </div>

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
