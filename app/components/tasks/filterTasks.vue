<template>

        <ul class="grid-cols-4" v-if="getPeoples.length">

            <li v-for="item in getPeoples">
                <label :for="item">
                    <input v-model="peopleArray" :value="item" type="checkbox">
                    <span>{{ item }}</span>
                </label>
            </li>

        </ul>

</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "filterTasks",
        data: () => ({
            peopleArray: []
        }),
        computed: {
            ...mapGetters('tasks', ['getPeoples'])
        },
        watch: {
            peopleArray(){
                console.log(
                    this.peopleArray
                )
            }
        }
    }
</script>
