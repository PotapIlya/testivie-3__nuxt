<template>
    <div v-if="statusLoader" class="flex">
        <filterTasks />
        <listTasks />
    </div>
    <loader v-else />
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import loader from '~/components/basic/loader';
import filterTasks from '~/components/tasks/filterTasks';
import listTasks from '~/components/tasks/listTasks';
export default {
    components: {
        listTasks, filterTasks, loader,
    },
    data: () => ({
        title: 'test',
        statusLoader: false,
    }),
    computed: {
        ...mapGetters('tasks', ['GET_STATUS_AXIOS'])
    },
    async mounted () {
        if (this.GET_STATUS_AXIOS) {
            await this.AXIOS_GET_TASKS().then( () => {
                this.statusLoader = true;
            });
        } else{
            this.statusLoader = true;
        }
    },
    methods: {
        ...mapActions('tasks', ['AXIOS_GET_TASKS'])
    }
};
</script>
