import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../Auxiliary/Auxiliary";
import './Modal.css';
const Modal =(props)=>{
    return(
        <Aux>
        <Backdrop 
            show={props.show} 
            clicked={props.modalClosed}/>
        <div 
            className="Modal"
            >
                {props.children}
        </div>
    </Aux>);

}
export default Modal;