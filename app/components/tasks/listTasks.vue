<template>
    <table v-if="getTasks.length" class="table-fixed">
        <thead>
            <tr>
                <th class="w-1/2 ...">Title</th>
                <th class="w-1/4 ...">Author</th>
                <th class="w-1/4 ...">Views</th>
            </tr>
        </thead>
        <tbody>
            <tr
                    v-for="item in getTasks"
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


    <loader v-else />
</template>

<script>
    import loader from "~/components/basic/loader";
    import task from "~/components/tasks/task";
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "tasks",
        components:{
            task, loader
        },
        computed: {
            ...mapGetters('tasks', ['getTasks'])
        },
    }
</script>
