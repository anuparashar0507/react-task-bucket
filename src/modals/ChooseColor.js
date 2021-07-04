import React from 'react'
import colors from '../constants/colors'

function ChooseColor(props) {
    return (
        <div
        className={
          'color-options ' + (props.visibleColor ? 'shown' : '')
        }>
        {colors.map(color => {
          const styling = {
            borderColor: color.hex,
            backgroundColor: color.hex
          };
          return (
            <button
              key={color.hex}
              className='color-button'
              title={color.name}
              style={styling}
              onClick={() => props.setColor(color.hex)}
              aria-label={color.name}
            />
          );
        })}
      </div>
    )
}

export default ChooseColor
