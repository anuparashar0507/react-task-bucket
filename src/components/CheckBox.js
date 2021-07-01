import React from 'react'
import {  Checkbox } from 'semantic-ui-react'



function CheckBox(props) {
    

    return (
        <div>
            <Checkbox
          onChange={props.handleChange}
          checked={props.checked}
        />

        </div>
    )
}

export default CheckBox
