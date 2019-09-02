const app = new Vue({
    el: '#app',
    data: {
        lists: []
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating',
                cards: []
            }
            this.lists.push(newList)
        },
        saveList(list){
            list.status = 'saved'
        },
        removeList(index){
            this.lists.splice(index, 1)
        },
        addCard(list){
            const newCard = {
                title: ''
            }
            const empty = this.verifyEmpty(list)
            if(empty.length){
                alert('No  pueden haber tarjetas vacias ')
            }else{
                list.cards.push(newCard)
            }
        },
        verifyEmpty(list){
            const cards = list.cards
            const emptyCards = cards.filter((card) => {
                return card.title == ''
            })
            return emptyCards
        },
        eliminar(indexList, index) {
            const list = this.lists[indexList]
            list.cards.splice(index, 1)
        },

    }
})