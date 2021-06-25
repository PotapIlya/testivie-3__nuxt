export default
{
    async AXIOS_GET_TASKS(context, tasks) {
        try {
            const res = await this.$axios.get('https://jsonplaceholder.typicode.com/todos');
            context.commit('getTasks', res.data);
        } catch (e) {
            console.log(e);
        }
    },
    async FILTER_TASKS_PEOPLE(context, selectPeople) {
        let reset = null;
        if (!selectPeople.length){
            selectPeople = context.state.basicArrayPeoples;
            reset = true;
        }

        const selectTasksPeople = context.state.basicArrayTasks.reduce( (acc, item) => {
            if ( selectPeople.includes(item.userId) ){
                acc.push(item);
            }
            return acc;
        }, []);
        const countPage = Math.ceil(selectTasksPeople.length / context.state.amountOnePage );

        context.commit('updateTasksPeople', {
            selectTasksPeople,
            countPage,
            selectPeople,
            reset,
        });
        await context.dispatch('updateTasks');
    },
    async SET_AMOUNT_ONE_PAGE(context, number){
        context.commit('updateAmountOnePage', {
            amountOnePage: number,
            countPage: Math.ceil(context.state.selectTasksPeople.length / number ),
        });
        await context.dispatch('updateTasks');
    },
    async SET_PAGE_NUMBER(context, status) {
        let oldNumber = context.state.pageNumber;
        if (status){
            oldNumber += 1;
        }
        if (!status){
            if (context.state.pageNumber <= 1){
                oldNumber = 1;
            }
            oldNumber -= 1;
        }

        context.commit('setPageNumber', oldNumber);
        await context.dispatch('updateTasks');
    },

    updateTasks(context){
        // get start and end position and create new arrayTasks
        const start = context.state.pageNumber * context.state.amountOnePage;
        const tasks = context.state.selectTasksPeople.slice(start, start + context.state.amountOnePage);

        if (!tasks.length){ // error, reset start position
            const resetTask = context.state.basicArrayTasks.slice(0, context.state.amountOnePage);
            context.commit('updateTasks', {
                data: resetTask,
                status: false
            });
        } else {
            context.commit('updateTasks', {
                data: tasks,
                status: true
            });
        }
    },
    async GET_TASK_BY_ID(context, id){
        return await this.$axios.get('https://jsonplaceholder.typicode.com/todos?id=' + id);
    },
    async GET_USER_BY_ID(context, id){
        return await this.$axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + id);
    }

};
