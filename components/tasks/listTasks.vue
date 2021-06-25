<template>
    <div
        v-if="GET_TASKS.length"
        class="w-full"
    >
        <sortTasks />
        <div class="flex-col text-center">

            <div class="flex justify-between items-center mb-3">
                <div class="w-1/6 text-2xl">id</div>
                <div class="w-full text-2xl">title</div>
                <div class="w-2/6 text-2xl">button</div>
            </div>

            <div class="flex-col">
                <task
                    class="flex justify-between items-center py-1"
                    v-for="(item, index) in GET_TASKS"
                    :key="item.id"


                    :index="index"
                    :data="item"
                />
            </div>
        </div>
    </div>

    <loader v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import sortTasks from '~/components/tasks/sortTasks';
import loader from '~/components/basic/loader';
import task from '~/components/tasks/task';
// eslint-disable-next-line no-unused-vars
export default {
    name: 'Tasks',
    components: {
        task, loader, sortTasks
    },
    computed: {
        ...mapGetters('tasks', ['GET_TASKS'])
    },
    mounted () {

    }
};
</script>
