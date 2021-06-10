import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Event.css'
import Modal from '../Modal/Modal'

const Event = ({item,toggleState}) => {
    const { title, summary, published } = item;
    // const { toggleState } = props.toggleState
    const [isRead, setIsRead] = useState(false);

 
  
    return (
        <>
            <div class="card" >
            <div className="remove-icon"> <i class="fal fa-times"></i></div>
                <div class="card-body">
                    <h5 class="card-title">{title?.slice(0,40)}</h5>
                    <p class="card-text" >
                        {summary?.slice(0, 60)}
                        <p onClick={()=>setIsRead(true)} data-toggle="modal" data-target="#exampleModalLong" >Read</p>

                        {

                            isRead ?
                            
                            <Modal item={item}></Modal>
                            
                            
                            : ''
                        }
                    </p>
                    <p>{published}</p>
                    
                </div>
            </div>
        </>
    );
};

export default Event;