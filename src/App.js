import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {

  //local storage to save state even after reloading
  if(!localStorage.getItem('groupby')){
    localStorage.setItem('groupby', "status");
  }
  if(!localStorage.getItem('orderby')){
    localStorage.setItem('orderpby', "priority");
  }

  const [groupby, setGroupby] = useState(localStorage.getItem('groupby'));
  const [orderby, setOrderby] = useState(localStorage.getItem('orderby'));
  const [displayby, setDisplayby] = useState(localStorage.getItem('displayby'));

  function handleChange(event){
    if(event.target.id === "group"){
      setGroupby(event.target.value);
      localStorage.setItem('groupby', event.target.value);
    }else if(event.target.id === "order"){
      setOrderby(event.target.value);
      localStorage.setItem('orderby', event.target.value);
    }else{
      setDisplayby(event.target.value);
      localStorage.setItem('displayby', event.target.value)
    }
  }

  return (
    <div className="App">
      <div className='select'>

      <label>Display</label>
      <select id="display" value={displayby} onChange={handleChange}>
        <option value="group">Grouping</option>
        <option value="order">Ordering</option>
      </select>

      <label>Grouping :</label>
      <select id="group" value={groupby} onChange={handleChange}>
        <option value="status">Status</option>
        <option value="users">Users</option>
        <option value="priority">Priority</option>
      </select>

      <label>Ordering :</label>
      <select id="order" value={orderby} onChange={handleChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
      <Board group={groupby} order={orderby} />
    </div>
  );
}

export default App;