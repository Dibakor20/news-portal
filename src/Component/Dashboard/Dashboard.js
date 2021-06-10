import React, { useState } from 'react';
import News from '../News/News';
import Sidebar from '../Sidebar/Sidebar';
import SidebarDrawer from '../SidebarDrawer/SidebarDrawer';
import './Dashboard.css'

const Dashboard = () => {


    const [toggleState, setToggleState] = useState(true)
    const [drawerState, setDrawerState] = useState(false)


    return (
        <div>
            <Sidebar toggleState={toggleState} drawerState={drawerState} setDrawerState={setDrawerState} setToggleState={setToggleState}></Sidebar>

            {
                drawerState ? '' : <News toggleState={toggleState} ></News>
            }

            {
                drawerState ? <SidebarDrawer drawerState={drawerState}></SidebarDrawer> : ''
            }

        </div>
    );
};

export default Dashboard;