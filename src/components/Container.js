import React, {useEffect, useState}  from 'react'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


function Container() {

 useEffect(() => {
    let arr = localStorage.getItem("taskList")
    
    const [taskList, setTaskList] = useState([])
   
    if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
    }
}, [])

const lists = {
    "todo": {
        "title": "Todo",
        "items": taskList[]
     },
     "inProgress":{
         "title": "In Progress",
         "items" : []
     },
     "done": {
         "title" : "Completed",
         "items" : []
     }
}
const[state, setState] = useState({lists});

const handleDragEnd = ({destination, source}) => {
    if (!destination) {
      return
    }

    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]}

    setState(prev => {
      prev = {...prev}
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

    return (
        <div className = 'container'>
            <DragDropContext onDragEnd = {handleDragEnd}>
            {lists.map(state, (data, key) => {
          return(
            <div key={key} className={"column"}>
              <h3>{data.title}</h3>
              <Droppable droppableId={key}>
                {(provided, snapshot) => {
                  return(
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={"droppable-col"}
                    >
                      {data.items.map((el, index) => {
                        return(
                          <Draggable key={el.id} index={index} draggableId={el.id}>
                            {(provided, snapshot) => {
                              console.log(snapshot)
                              return(
                                <div
                                  className={`item ${snapshot.isDragging && "dragging"}`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <taskList />
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            </div>
          )
        })}
</DragDropContext>
        </div>
    )
}

export default Container




  