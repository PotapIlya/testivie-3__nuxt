<template>
    <div v-if="data !== null && userTasks.length">
        <h1>
            id: {{ data.id }} <br>
            Title: {{ data.title }}
        </h1>

        <ul v-if="userTasks.length">
            <li
                v-for="item in userTasks"
                :key="item.id"
            >
                <span>User: {{ item.userId }}</span>
                <span>Title: {{ item.title }}</span>
            </li>
        </ul>
        <button @click=" $router.push('/') ">
            Back...
        </button>
    </div>
    <div v-else>
        <loader />
    </div>
</template>

<script>
import loader from '~/components/basic/loader';
export default {
    name: 'Id',
    components: {
        loader
    },
    data: () => ({
        data: null,
        userId: null,

        userTasks: []
    }),
    watch: {
        async userId () {
            await this.$axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + this.userId)
	            .then((res) => {
	                this.userTasks = res.data;
	            })
	            .catch((e) => {
	                console.log(e);
	            });
        }
    },
    async mounted () {
        await this.$axios.get('https://jsonplaceholder.typicode.com/todos?id=' + this.$route.params.id)
            .then((res) => {
                this.data = res.data[0];
                this.userId = res.data[0].userId;
            })
            .catch((e) => {
                console.log(e);
            });
    }
};
</script>
