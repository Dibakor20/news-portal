import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Event.css'
import Modal from '../Modal/Modal'

const Event = ({item}) => {
    const { title, summary, published } = item;
    // const { toggleState } = props.toggleState
    const [isRead, setIsRead] = useState(false);

  
    return (
        <>

            <div class="card" style={{ width: '18rem' }}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text" >
                        {summary?.slice(0, 60)}
                        <p onClick={()=>setIsRead(true)} data-toggle="modal" data-target="#exampleModalLong" >Read</p>

                        {

                            isRead ?
                            
                            <Modal item={item}></Modal>
                            
                            
                            : ''
                        }
                    </p>
                </div>
            </div>






            <p class="card-text">{published}</p>
            <img src='...' class="card-img-bottom" alt="..."></img>
        </>
    );
};

export default Event;