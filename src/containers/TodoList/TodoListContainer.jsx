import React from 'react';
import Tickets from '../../components/TodoList/TodoList';


const TicketsContainer = (props) => {

    let getList = props.state.ticketsArr.map(function(elem){
        return <li>
                 <div>
                   <a href='#' onClick={deleteTicket}  id={elem.id}>Удалить</a> 
                   <input 
                     type="checkbox" 
                     id={elem.id} 
                     name={elem.text} 
                     className='checkbox'></input>   {elem.text}  
                </div>
               </li>
    })

    let addTicket = () => {
      let state = {
        type:'ADD_NEW_TICKET'          
      }
      props.action(state)
    }

    let updateText = (event) => {
      let state = {
        text:event.target.value,
        type:'UPDATE_DATA_NEW_TICKET'
      }
      props.action(state)
    }

    function deleteTicket(event) {
      let state = {
        id:event.target.id,
        type:'DELETE_TICKET'
      }
      props.action(state)          
    }

    let deleteComplete = () => {
      var checkBoxes = document.getElementsByClassName('checkbox');
      var checked = []

      for (let index = 0; index < checkBoxes.length; index++) {
        if (checkBoxes[index].checked) {
          checked.push({id:Number(checkBoxes[index].id), text:checkBoxes[index].name})
        }
      }

      let checkLengthArr = checked.length > 0 ? props.action({arr:checked, type:'DELETE_COMPLETE_TICKET'}) : false

    }

    return (
        <div>
            <Tickets list={getList}/>
            <input value={props.state.newTicketData.text} onChange={updateText} class='inputText'></input>
            <br></br>
            <button onClick={addTicket}>Добавить</button>
            <button onClick={deleteComplete}>Удалить выполненные</button>
        </div>
    )


}

export default TicketsContainer