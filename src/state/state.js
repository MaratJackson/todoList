const ADD_NEW_TICKET = 'ADD_NEW_TICKET'
const UPDATE_DATA_NEW_TICKET = 'UPDATE_DATA_NEW_TICKET'
const DELETE_TICKET = 'DELETE_TICKET'
const DELETE_COMPLETE_TICKET = 'DELETE_COMPLETE_TICKET'

let store = {

   renderApp() {
    console.log(this._state.newCommentData)
   },

   getState() {
     return this._state
   },

   _state : {
        ticketsArr : [   
          {id:1, text:"Hello World!"},
        ],
        newTicketData:{
          text:''
        }
  },

  addNewTicket() {
    let ticketsArr = this._state.ticketsArr
    let newTicketData = this._state.newTicketData
    let newId = ticketsArr.length + 1
    if (newTicketData.text !== '') {
      let tiket = {
        id:newId,
        text:newTicketData.text
      } 
      ticketsArr.push(tiket)
      this.renderApp(this._state)
      newTicketData.text = '' 
    }     
  },

  updateDataNewTicket(value) {
    this._state.newTicketData.text = value
    this.renderApp(this._state)

  },

  deleteTicket(id) {
    let searchIndex = this._state.ticketsArr.findIndex(item => item.id === Number(id));
    this._state.ticketsArr.splice(searchIndex, 1)
    this.renderApp(this._state)
  },

  deleteCompleteTicket(arr) {
    let arrTickets = this._state.ticketsArr

    for( var i=arrTickets.length - 1; i >= 0; i--){
      for( var j=0; j<arr.length; j++){
          if(arrTickets[i] && (arrTickets[i].id === arr[j].id)){
           arrTickets.splice(i, 1);
         }
       }
   }

   this.renderApp(this._state)
    
  },

  action(state) {

    if (state.type === ADD_NEW_TICKET) {

      this.addNewTicket()

    } else if (state.type === UPDATE_DATA_NEW_TICKET) {

      this.updateDataNewTicket(state.text)

    } else if (state.type === DELETE_TICKET) {

      this.deleteTicket(state.id)

    } else if (state.type === DELETE_COMPLETE_TICKET) {

      this.deleteCompleteTicket(state.arr)

    }
  },

  subscribe(observer){
    this.renderApp = observer
    }

 }

export default store
window.store = store
 