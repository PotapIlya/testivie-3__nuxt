<template>
    <div class="flex justify-start items-center mb-5">
        <div class="flex justify-start items-center mr-6">
            <button
                @click="SET_PAGE_NUMBER(false)"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
            </button>
            <h3 class="text-2xl px-2">
                {{ GET_PAGE_NUMBER + 1 }} / {{ GET_COUNT_PAGE }}
            </h3>
            <button
                v-if="GET_PAGE_NUMBER+1 !== GET_COUNT_PAGE" @click="SET_PAGE_NUMBER(true)"
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>
            <button
                v-else disabled
                class="bg-gray-300 bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>
        </div>


        <div v-if="select.length" class="relative inline-block text-left">
            <div>
                <button @click="showFormStatus = !showFormStatus" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <span v-if="selectedSelectActive">{{ selectedSelectActive.value }}</span>
                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <transition name="fade">
                <div v-if="showFormStatus" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1" >
                        <span v-for="item in select"
                              :key="item.id"
                              @click="selectSelected(item.id)"
                              class="dropdown__item text-gray-700 block px-4 py-2 text-sm pointer">{{ item.value }}</span>
                    </div>
                </div>
            </transition>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'SortTasks',
    data: () => ({
        select: [
            { id: 1, value: 10 },
            { id: 2, value: 20 },
            { id: 3, value: 40 },
            { id: 4, value: 50 },
        ],
        selectedSelect: null,
        selectedSelectActive: null,

        showFormStatus: false, // form
    }),
    watch: {
        // selectedSelect () {
        //     this.SET_AMOUNT_ONE_PAGE(this.selectedSelect);
        // }
    },
    mounted () {
        this.selectedSelect = this.select[0].value;
        this.selectSelected(1);
        this.selectedSelectActive = this.select[0];
    },
    computed: {
        ...mapGetters('tasks', ['GET_PAGE_NUMBER', 'GET_COUNT_PAGE'])
    },
    methods: {
        ...mapActions('tasks', ['SET_PAGE_NUMBER', 'SET_AMOUNT_ONE_PAGE']),
        selectSelected(id){
            const findItem = this.select.filter( item => item.id === id)[0]
            this.selectedSelectActive = findItem;
            this.SET_AMOUNT_ONE_PAGE(findItem.value);
            this.showFormStatus = false;
        }
    }
};
</script>
