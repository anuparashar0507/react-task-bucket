import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import Count from './Count'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TaskList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
   //  const [completedTask, setCompletedTask] = useState('') 
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])
    const toggle = () => {
      setModal(!modal);
  }

  
  const saveTask = (taskObj) => {
      let tempList = taskList
      tempList.push(taskObj)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(taskList)
      setModal(false)
  }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    function handleOnDragEnd(result) {
        if(!result.destination) return;
        const reorderedTaskList = [...taskList];
        const [movedTaskList] = reorderedTaskList.splice(result.source.index, 1);
        reorderedTaskList.splice(result.destination.index, 0, movedTaskList);
        setTaskList(reorderedTaskList);

    }

    return (
        <>
        <div className = "header text-center">
        <h3 className="title">React Task Bucket</h3>
        <button className = "btn btn-primary create" onClick = {() => setModal(true)} >Create Task</button>
    </div>
    <Count
        count={
          taskList.length === 0
            ? "Your Task Bucket is Empty Please Create one"
            : `Total Task ${taskList.length}`
        }
      />
 <DragDropContext onDragEnd = {handleOnDragEnd}>
        <Droppable droppableId="taskList">
     {(provided) => (
    <div className = "task-container" {...provided.droppableProps} ref={provided.innerRef} >
            {taskList && taskList.map((obj , index) => 
                <Draggable key={obj.Id} draggableId={obj.Id.toString()} index={index}>{(provided)=>(
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
           <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} 
        updateListArray = {updateListArray}/> </div>)}</Draggable>)}
        {provided.placeholder}
        
    </div>
    )}
    </Droppable>
</DragDropContext>

    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>

          </>  
         
    );
};

export default TaskList;