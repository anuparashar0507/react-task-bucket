import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
//import CheckBox from './CheckBox'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }


    return (
       
        <div className = "card-wrapper "  style={{"backgroundColor": taskObj.Color }}  >
            <div className = "card-top">
            <div className = "card-header" > {taskObj.Name}</div>
            </div>
            <div className = "task-holder" onClick = {() => setModal(true)}>
                <div className = "task-content">
                <p className = "card-description">{taskObj.Description}</p>
                </div>
        </div>
        <div className ="task-button">
        <i className = "mdi mdi-pencil edit"  onClick = {() => setModal(true)}></i>
                    <i className ="mdi mdi-delete delete-icon"  onClick = {handleDelete}></i>
                </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
        
    );
};

export default Card;