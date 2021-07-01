import React, { useState , useEffect} from 'react';
//import TodoList from '../components/TodoList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [checked, setChecked] = useState()
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === "description"){
            setDescription(value)
        }else{
            setChecked(!checked)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setChecked(taskObj.Checked)
    },[taskObj.Checked, taskObj.Description, taskObj.Name])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
       tempObj["Id"] = Math.floor(Math.random() * 10000)
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj["Checked"] = false
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
            </ModalBody>
            <ModalFooter>

            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;