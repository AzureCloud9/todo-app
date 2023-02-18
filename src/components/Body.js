import React, { useState } from 'react';
import deleteImg from "./assets/icon-cross.svg"
import check from "./assets/icon-check.svg"

export default function Body ({mode, isMobile, modeHandle}) {
    const [inputValue, setInputValue] = useState('');
    const [filterOption, setFilterOption] = useState('all');
    const [todoList, setTodoList] = useState([
      { todo:"Add a todo List", all: true, active: false, completed: false, id:0 },
    ]);
    

    function handleInputChange(event) {
        setInputValue(event.target.value);
      }

    function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== '') { 
        const newItem = { todo: inputValue, all: true, active: false, completed: false, id: todoList.length };
        setTodoList([...todoList, newItem]);
        setInputValue('');
    }
    }

    function deleteTodoItem(id) {
        const updatedList = todoList.filter((item) => item.id !== id);
        setTodoList(updatedList);
      }


    function toggleCompletion (id) {
        const updatedList = todoList.map(item => {
            if (item.id === id) {
                return {...item, completed: !item.completed, active:false, all:false}
            } 
            return item
        });
        setTodoList(updatedList);
    }
    

    function clearCompletion () {
        const updatedList = todoList.filter(item => !item.completed);
        setTodoList(updatedList);
    }

    
    
    

    

    return (
        <div className="main" style={{backgroundColor:mode?"#171823":"#E3E4F1"}}>
            <div className='main2'>
                <div className="inputDisplay" style={{backgroundColor:mode?"#25273D":"white", width:"327px", height:"48px"}}>
                    <div className="circle" onClick={handleSubmit}></div>
                    <form onSubmit={handleSubmit}>
                    <input type="text" value={inputValue} onChange={handleInputChange} maxLength={isMobile?"35":null} style={{width:isMobile?"250px":null, backgroundColor:mode?"#25273D":"white", color:mode?"#C8CBE7":'black'}} />
                    </form>
                </div>
                <div className="todo">
                    <>
                    {todoList
                        .filter(item => filterOption === 'all' || (filterOption === 'active' && !item.completed) || (filterOption === 'completed' && item.completed))
                        .map((todolists =>
                        <>
                            <div key={todolists.id} className="list" style={{backgroundColor:mode?"#25273D":"white"}}>
                                <div className='circleAtodo'>
                                    <div className="circle" onClick={()=> toggleCompletion(todolists.id)}>
                                        {todolists.completed ? <img src={check} alt="check"/>:null}
                                    </div>
                                    <div className='todoList' style={{color:mode?"#C8CBE7":'black'}} onClick={()=> toggleCompletion(todolists.id)}>{todolists.todo}</div>
                                </div> 
                                    <img src={deleteImg} alt="delete" onClick={() => deleteTodoItem(todolists.id)} style={{width:isMobile?"11.79px":null,height:isMobile?"11.79px":null, marginRight:isMobile?"20.21px":null}} /> 
                                </div>

                        </>
                    ))}
                    </>
                    <div className='counterClear' style={{backgroundColor:mode?"#25273D":"white"}}>
                            <p style={{marginLeft:isMobile?"20px":null}} >        
                            {todoList.filter(item => filterOption === 'all' || (filterOption === 'active' && !item.completed) || (filterOption === 'completed' && item.completed)).length} items left</p>
                            <p onClick={clearCompletion} style={{marginRight:isMobile?"20px":null}}>Clear Completed</p>
                    </div>

                    <div className='options' style={{backgroundColor:mode?"#25273D":"white"}}>
                        <p style={{color:filterOption === 'all' ? "#3A7CFD" : null}} onClick={() => setFilterOption('all')}>All</p>
                        <p style={{color:filterOption === 'active' ? "#3A7CFD" : null}} onClick={() => setFilterOption('active')}>Active</p>
                        <p style={{color:filterOption === 'completed' ? "#3A7CFD" : null}} onClick={() => setFilterOption('completed')}>Completed</p>
                    </div>


                </div>
            </div>
        </div>
    )
}