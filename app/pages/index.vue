<template>
    <div class="flex" style="display: flex">
        <div style="width: 15%">
            <filterTasks />
        </div>
        <div style="width: 85%">
            <listTasks />
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import filterTasks from '~/components/tasks/filterTasks';
import listTasks from '~/components/tasks/listTasks';
export default {
    components: {
        listTasks, filterTasks
    },
    data: () => ({
        title: 'test'
    }),
    computed: {
        ...mapGetters('tasks', ['GET_STATUS_AXIOS'])
    },
    async mounted () {
        if (this.GET_STATUS_AXIOS) {
            await this.AXIOS_GET_TASKS();
        }
    },
    methods: {
        ...mapActions('tasks', ['AXIOS_GET_TASKS'])
    }
};
</script>
