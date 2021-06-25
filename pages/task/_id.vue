<template>
    <div v-if="data !== null && userTasks.length">
        <h1 class="font-serif text-2xl">
            id: {{ data.id }} <br>
            Title: {{ data.title }}<br>
            UserId: {{ this.userId}} <br>
        </h1>

        <button
            @click=" $router.push('/') "
            class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back...
        </button>

        <div
            v-if="userTasks.length"
            class="flex-col text-center"
        >

            <div class="flex justify-between items-center mb-3">
                <div class="w-1/6 text-2xl">id</div>
                <div class="w-full text-2xl">title</div>
                <div class="w-2/6 text-2xl">button</div>
            </div>

            <div class="flex-col">
                <task
                    class="flex justify-between items-center py-1"
                    v-for="(item, index) in userTasks"
                    :key="item.id"

                    :index="index"
                    :data="item"
                />
            </div>
        </div>

    </div>
    <div v-else>
        <loader />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import task from '~/components/tasks/task'
import loader from '~/components/basic/loader';
export default {
    name: 'Id',
    components: {
        loader, task
    },
    data: () => ({
        data: null,
        userId: null,

        userTasks: []
    }),
    methods: {
        ...mapActions('tasks', ['GET_TASK_BY_ID', 'GET_USER_BY_ID'])
    },
    watch: {
        async userId () {
            try {
                const res = await this.GET_USER_BY_ID(this.userId);
                this.userTasks = res.data;
            }
            catch (e) {
                console.log(e)
            }
        }
    },
    async mounted () {
        try {
            const res = await this.GET_TASK_BY_ID(this.$route.params.id);
            this.data = res.data[0];
            this.userId = res.data[0].userId;
        }
        catch (e) {
            console.log(e)
        }
    }
};
</script>
