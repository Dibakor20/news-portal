import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Event.css'

const Event = (props) => {
    const {title,summary,published,} = props.item;
    const [isRead, setIsRead] = useState(true);

    const toggleRead = () => {
        setIsRead(!isRead);
    };
    return (
        <>
           <div class="card mb-3">
            <div class="card-body">
            <h5>
                {isRead ? title?.slice(0, 30) : title}
                <span onClick={toggleRead}>
                    {isRead ? "..." : " show less"}
                </span>
                </h5>
                
                <p>
                {summary?.slice(0, 60)}
                <Link to={`/newsDetails/${title}`} className="text-primary read-more" data-toggle="modal" data-target="#exampleModalLong">
                 Read more...
                </Link>
                </p>


                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{title}</h5>
                        
                    </div>
                    <div class="modal-body">
                      {summary}
                      <p>{published}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
                    
               
                <p class="card-text">{published}</p>
                <img src="..." class="card-img-bottom" alt="..."></img>
            </div>
            </div>
        </>
    );
};

export default Event;