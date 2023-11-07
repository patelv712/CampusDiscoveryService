import React from 'react'
import './PopUp.css'

function Popup(props) {

  return (props.trigger) ? (
    <div className='popUp'>
        <div className='popUp-inner'>
            <button class='close-btn' onClick={() => {
              props.setTrigger(false);
            }
            }>close</button>
            {props.children}
        </div>
    </div>

  ) : "";
}

export default Popup;