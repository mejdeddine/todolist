import React from "react";
import "./List.css"

function List(props){

    const deleteItem = (key) => {
        const newList = props.todoItems.filter((todoItem)=>{
            return todoItem.key !== key         
        });
    props.updateItemList(newList)
    }
    return(
        <div>
            {props.todoItems.map((itemObj)=>{
                return <div>
                    <p className="textItem">{itemObj.item}</p>
                    <button onClick={()=> {deleteItem(itemObj.key)}} className="bt-css">x</button>
                </div>
            })}
        </div>
    )
}

export default List;