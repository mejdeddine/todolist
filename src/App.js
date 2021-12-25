import React, { useState } from "react";
import List from "./components/List"
import "./App.css";


function App() {
  
  const [currentInput, setCurrentInput] = useState("");
  const [itemList, updateItemList] = useState([]);

  const onHandleChange = e => {
      //console.log("Input the value", e.target.value);
      setCurrentInput(e.target.value);
  }
  
  const addItemsToList = (e) => {
    updateItemList([...itemList, {item: currentInput, key: Date.now()}]);
    //console.log("itemList", itemList)
    setCurrentInput("")
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Mejdeddine's ToDo list</h1>
      </div>
        <div className="input-field">
            <input type="text" placeholder="add a todo task here" value={currentInput} onChange={onHandleChange}/>
            <button onClick={addItemsToList}>Submit</button>
        <List updateItemList={updateItemList} todoItems={itemList}/>
      </div>
    </div>
  );
}

export default App;
