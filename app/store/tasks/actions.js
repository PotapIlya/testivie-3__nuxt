export default
{
    async AXIOS_GET_TASKS(context, tasks)
    {
        try {
            const res = await this.$axios.get('https://jsonplaceholder.typicode.com/todos');
            context.commit('getTasks', res.data)
        } catch (e) {
            console.log(e)
        }
    },

}
