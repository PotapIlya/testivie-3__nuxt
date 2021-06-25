<template>
    <div v-if="GET_TASKS.length">
        <sortTasks />
        <table class="table-fixed">
            <thead>
                <tr>
                    <th class="w-1/2 ...">
                        Title
                    </th>
                    <th class="w-1/4 ...">
                        Author
                    </th>
                    <th class="w-1/4 ...">
                        Views
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in GET_TASKS"
                    :key="item.id"
                >
                    <task
                        :data="item"
                    />
                <!--                <td>Intro to CSS</td>-->
                <!--                <td>Adam</td>-->
                <!--                <td>858</td>-->
                </tr>
            <!--        <tr class="bg-blue-200">-->
            <!--            <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>-->
            <!--            <td>Adam</td>-->
            <!--            <td>112</td>-->
            <!--        </tr>-->
            </tbody>
        </table>
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
