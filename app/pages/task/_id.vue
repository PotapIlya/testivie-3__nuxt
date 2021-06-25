<template>
    <div v-if="data !== null">
        <h1>
            id: {{ data.id}} <br>
            Title: {{ data.title }}
        </h1>

        <ul v-if="userTasks.length">
            <li v-for="item in userTasks">
                <span>User: {{ item.userId }}</span>
                <span>Title: {{ item.title }}</span>
            </li>
        </ul>
    </div>
    <div v-else>
        <loader />
    </div>
</template>

<script>
    import loader from "~/components/basic/loader";
    export default {
        name: "id",
        components:{
            loader
        },
        data: () => ({
            data: null,
            userId: null,

            userTasks: [],
        }),
        async mounted(){
            await this.$axios.get('https://jsonplaceholder.typicode.com/todos?id='+this.$route.params.id )
                .then(res => {
                    this.data = res.data[0]
                    this.userId = res.data[0].userId;
                })
                .catch(e => {
                    console.log(e)
                })
        },
        watch: {
            async userId(){
                await this.$axios.get('https://jsonplaceholder.typicode.com/todos?userId='+this.userId )
                    .then(res => {
                        this.userTasks = res.data;
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        }
    }
</script>
