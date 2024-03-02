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
                <span 
                    className="close"
                    onClick={props.modalClosed}>x</span>
                {props.children}
                
        </div>
    </Aux>);

}
export default Modal;