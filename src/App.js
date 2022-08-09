import './App.css';
import { useState } from 'react';

function App() {
  const[listName, setListName] = useState("");
  const[list,setList] = useState([]);

  function listItem(){
    if(listName===""){
      return alert("please add list");
    }
    setList((oldItem)=>{
      return [...oldItem, listName];
    });

    setListName("");
  }

  function toRemove(index){
    const newlist = [...list]
    newlist.splice(index,1);
    setList(newlist);
  }
 
   const HandleChange = ((e)=>{
    
    setListName(e.target.value);
    
    
  });
  function add(id){
    
      // alert ("Sure Want To Edit");
      const Newlist = [...list]
     const editVal = Newlist.filter((val,i)=>{
      return (id===i);
      
    })
    setListName(editVal);
    toRemove(id);
  }
  
  return (
    <div className="App">
      <h1 id='to-do-list'> To Do List</h1>
      <br></br>
      <input type={'text'} placeholder  ="Add List Here...." value = {listName} onChange={HandleChange}></input>
      <button style={{color:"blue"}} onClick={listItem} >Add</button>
      <ul className='list'>
        {list.map((item,index)=>{
        return <li key={index} style={{color:"white"}}>{item} <button style={{color:"#006400" }}  onClick={() => toRemove(index)}>Remove</button >
        <button className='Add' onClick={()=> add(index)}>Edit</button></li>
            
        })}
        
       
      </ul>
    </div>
  );
}

export default App;
