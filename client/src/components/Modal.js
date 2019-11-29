import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
const Modal =(props)=>{
    return ReactDOM.createPortal(
        <div className="ui dimmer modals active visible" onClick={()=> history.push('/')}>
            <div className="ui standard modal active visible" onClick={(e)=>e.stopPropagation()}>
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector("#root")
    );
}
export default Modal;