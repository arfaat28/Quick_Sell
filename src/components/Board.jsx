import axios from 'axios';
import Column from './Column';
import values from '../displayStates.json';
import './Board.css'
import { useEffect, useState } from 'react';

const Board = (props) =>{
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{ console.log("board");
        axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
          .then(function (response) {
            setData(response.data.tickets);
            setUsers(response.data.users);
            console.log(response.data);
          })
    },[])

    //Order by Status
    let items = [];
    let group = props.group;
    function groupbyPriority(){
        for(let i=0; i<5; i++){
            const entry = data.filter((d)=>{
                return (d.priority === i)
            })
            items.push(<Column title={values.priority.states[i]} data={entry} users={users} group={props.group} order={props.order} index={i} key={i}/>);
        }
    }

    function groupbyStaus(){
        for(let i=0; i<5; i++){
            const entry = data.filter((d)=>{
                return (d.status === values.status.states[i])
            })
            items.push(<Column title={values.status.states[i]} data={entry} users={users} group={props.group} order={props.order} index={i} key={i}/>);
        }
    }

    function groupbyUsers(){
        for(let i=0; i<users.length; i++){
            const entry = data.filter((d)=>{
                return (d.userId === users[i].id)
            })
            items.push(<Column title={users[i].name} data={entry} users={users} group={props.group} order={props.order} index={i} key={i}/>);
        }
    }

    if(group === "priority"){groupbyPriority()}
    else if(group === "status"){groupbyStaus()}
    else groupbyUsers();


    return(
        <div className="board">
            {items}
        </div>
    )
}

export default Board;