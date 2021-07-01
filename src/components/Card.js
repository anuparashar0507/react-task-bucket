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
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

 
   

    return (
       
        <div className = "card-wrapper"  style={{"background-color": colors[index%5].primaryColor}} >
            <div className = "card-top">
            #{taskObj.Id}
            <CheckBox />
            </div>
            <div className = "task-holder">
                <div className = "task-content">
               <div className = "card-header" > <span >{taskObj.Name}</span></div>
               
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