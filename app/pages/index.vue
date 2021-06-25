<template>
    <div class="flex">

      <div>
          <filterTasks />
      </div>
       <div>
           <listTasks />
       </div>

    </div>
</template>
<script>
    import filterTasks from "~/components/tasks/filterTasks";
    import listTasks from "~/components/tasks/listTasks";
    import { mapActions, mapGetters } from 'vuex';
    export default {
        data: () => ({
            title: "test"
        }),
        components: {
            listTasks, filterTasks
        },
        async mounted()
        {
            await this.AXIOS_GET_TASKS();
        },
        methods: {
            ...mapActions('tasks', ['AXIOS_GET_TASKS'])
        }
    }
</script>
