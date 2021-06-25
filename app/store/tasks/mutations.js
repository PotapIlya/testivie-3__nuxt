export default
{
    getTasks(state, data){

        state.peoples = data.reduce((acc, item) => {
            if (acc.indexOf(item.userId) === -1){
                acc.push(item.userId)
            }
            return acc;
        }, []);

        state.tasks = data;
    },
}
