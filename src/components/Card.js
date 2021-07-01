import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import CheckBox from './CheckBox'

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
       
        <div className = "card-wrapper">
            <div className = "card-top">
            #{taskObj.Id}
            <CheckBox />
            </div>
            <div className = "task-holder">
                <div className = "task-content">
               <div className = "card-header" > <span >{taskObj.Name}</span></div>
               <hr />
                <p className = "card-description">{taskObj.Description}</p>
                </div>

                <div className ="task-button">
                    <i className = "far fa-edit mr-3 edit"  onClick = {() => setModal(true)}></i>
                    <i className ="far fa-trash-alt delete"  onClick = {handleDelete}></i>
                </div>
        </div>

        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
        
    );
};

export default Card;