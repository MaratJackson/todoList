import React from 'react';
import TicketsContainer from './containers/TodoList/TodoListContainer';


function App(props) {
 
  return (
        <div>
          <TicketsContainer state={props.state} action={props.action}/>
        </div>
  );
}

export default App;
