<DragDropContext onDragEnd = {handleOnDragEnd}>
<Droppable droppableId="taskList">
{(provided) => (
<div className = "task-container" {...provided.droppableProps} ref={provided.innerRef} >
    {taskList && taskList.map((obj , index) => 
        <Draggable key={index} draggableId={index.toString()} index={index}>{(provided)=>(
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
   <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} 
updateListArray = {updateListArray}/> </div>)}</Draggable>)}
{provided.placeholder}

</div>
)}
</Droppable>
</DragDropContext>