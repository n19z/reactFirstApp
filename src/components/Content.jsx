import React from 'react';
import '../App.css';
import Banner from './Banner';
import PostsDocs from './PostsDocs';
import Sidebar from './SideBar';

function Content() {
    return (
        <main className="main">
            <Banner />
            <div className="wrapper flex-flow-row-wrap">
                <PostsDocs />
                <Sidebar />
            </div>
        </main>
    )
};

export default Content;