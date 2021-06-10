import React from 'react';
import './Sidebar.css';
import user from '../../images/user.jpg'

const Sidebar = ({ toggleState, setToggleState, drawerState, setDrawerState }) => {
    return (
        <>
            <div className="sidebar display-flex flex-column justify-content-between col-md-3 py-5">
                <ul className="list-unstyled">
                    <li>
                        <div className="user">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={user} alt="" className="w-100 mt-2" />
                                </div>
                                <div className="col-md-9">
                                    <h5>Hi Reader</h5>
                                    <p>Here's your news</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h3> </h3>
                        <div className={drawerState ? "toggle d-none" : "toggle"}>
                            <h3 className="text-center">View Toggle</h3>
                            <div className="view-toggle  d-block mx-auto">

                                <i onClick={() => setToggleState(true)} class={toggleState ? 'toggle-active toggle-one fas fa-th ' : 'toggle-one fas fa-th'}></i>
                                <i onClick={() => setToggleState(false)} class={toggleState ? 'toggle-one far fa-list-ul' : 'toggle-active  toggle-one far fa-list-ul'}></i>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="feedback">
                            <h3 className="text-center">Have a feedback</h3>
                            <button onClick={()=>setDrawerState(true)} className={drawerState?"d-none":'main-button d-block mx-auto'}>We are lisenting!</button>
                            <button onClick={()=>setDrawerState(false)}  className={drawerState?"danger-button d-block  mx-auto":'d-none'}>We are lisenting!</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;