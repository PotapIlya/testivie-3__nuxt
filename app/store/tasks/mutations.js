export default
{
    getTasks(state, data) {
        state.basicArrayTasks = data;
        state.statusAxios = false;

        const peoples = data.reduce((acc, item) => {
            if (!acc.includes(item.userId)){
                acc.push(item.userId);
            }
            return acc;
        }, []);

        state.basicArrayPeoples = peoples;
        state.peoples = peoples;
        // state.selectTasksPeople = state.basicArrayPeoples;

        state.countPage = Math.ceil(data.length / state.amountOnePage );

        state.tasks = state.basicArrayTasks.slice(0, state.amountOnePage);
    },
    setPageNumber(state, number){
        state.pageNumber = number;
    },
    updateTasksPeople(state, data) {
        state.selectTasksPeople = data.selectTasksPeople;
        state.countPage = data.countPage;
        state.peoples = data.selectPeople;
        if (data.reset){
            state.peoples = state.basicArrayPeoples;
        }
    },
    updateAmountOnePage(state, data){
        state.amountOnePage = data.amountOnePage;
        state.countPage = data.countPage;
    },
    updateTasks (state, obj) {
        if (obj.status){ // success
            state.tasks = obj.data;
        }
        if (!obj.status){ // error
            state.tasks = obj.data;
            state.pageNumber = 0;
        }
    },
};
