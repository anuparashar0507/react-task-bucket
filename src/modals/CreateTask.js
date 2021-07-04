import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ChooseColor from './ChooseColor';
const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
   // const [checked, setChecked] = useState(false);
    const [color, setColor] = useState('')
    const [visibleColor, setVisibleColor] = useState(false)
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if(name === "description"){
            setDescription(value)
        }else if(name === "color"){
            setColor(color)
        }
        else{
            setVisibleColor(true)
        }


    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Id"] = Math.floor(Math.random() * 10000)
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Color"] = color
        taskObj["Checked"] = false
        save(taskObj)

    }

    return (
        <Modal isOpen={modal} toggle={toggle} modalClassName = "modal" >
            <ModalHeader toggle={toggle}
            style ={{"background-color": color}}>
                Create Task
           </ModalHeader>
            <ModalBody >
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName" />
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
            </ModalBody>
            <ModalFooter >
            <ChooseColor
          visibleColor={visibleColor}
          setColor={color => setColor(color)}
        />
            <Button  className='color-edit' value = {color} onChange = {handleChange}
            name = "color" onClick={() => setVisibleColor(!visibleColor)} style = {{"background-color" : color}}>
              <i className='mdi mdi-brush'  />
            </Button>{' '}
            </ModalFooter>
            <ModalFooter style ={{"background-color": color}}>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;