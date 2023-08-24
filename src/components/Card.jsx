import './Card.css';
import vals from "../displayStates.json"

const Card = ({id, title, priority,group, tag, user}) =>{
    return(
        <div className="card">
            <div className="row-start">
                <p>{id}</p>
                {group !== "users" && <div id='user-img'>
                    <img width={20} src={"https://img.icons8.com/emoji/48/man-curly-hair.png"} alt="user"></img>
                    <span style={{color : user.available === true? "green" : "gray"}}>&#11044;</span>
                </div>}
            </div>
            <div className="row-mid">
                <p>{title}</p>
            </div>
            <div className="row-end">
                <span className="breadcrumb">
                    <img  height="15" width="15" src={vals.priority.icons[priority]} alt="icon"></img>
                </span>
                <span className="breadcrumb">&#11044; {tag}</span>
            </div>
        </div>
    )
}

export default Card;