import React, { useState , useEffect} from 'react';
import ChooseColor from './ChooseColor';
//import TodoList from '../components/TodoList';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
  //  const [checked, setChecked] = useState()
    
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

    useEffect(() => {
        setId(taskObj.Id)
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setColor(taskObj.Color)
        
    },[taskObj.Color, taskObj.Description, taskObj.Id, taskObj.Name])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
       tempObj["Id"] = id
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj["Checked"] = false
        tempObj["Color"] = color
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} style ={{"background-color": color}}>Update Task</ModalHeader>
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
            <ChooseColor
          visibleColor={visibleColor}
          setColor={color => setColor(color)}
        />
            <Button color="yellow" className='color-edit' value = {color} onChange = {handleChange}
            name = "color" onClick={() => setVisibleColor(!visibleColor)} style = {{"background-color" : color}}>
              <i className='mdi mdi-brush' />
            </Button>
            </ModalFooter>
            <ModalFooter style ={{"background-color": color}}>

            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;