import React from 'react';
import './SidebarDrawer.css'


const SidebarDrawer = ({drawerState}) => {
    return (
        <div className="row">
            <div className="col-md-3">
                {/* <Sidebar></Sidebar> */}
            </div>
            <div className="col-md-9 news-bavkground">
                <div className="row ml-5 mt-5">
                    <h1>Form</h1>
                </div>
            </div>
        </div>
    );
};

export default SidebarDrawer;