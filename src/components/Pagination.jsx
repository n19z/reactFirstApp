import React from 'react';
import '../App.css';

function Pagination () {

    return (
        <div className="pagination flex-flow-row m-b-4">
            <span className="post--time f-s-0">                  {'<'} </span>
            <span className="post--time f-s-0 m-w-1" style={{ color: '#ccc' }}>OLDER POST</span>
            <span className="post--time f-s-0">1</span>
            <span className="post--time f-s-0">2</span>
            <span className="post--time f-s-0">3</span>
            <span className="post--time f-s-0">...</span>
            <span className="post--time f-s-0">8</span>
            <span className="post--time f-s-0 m-w-1">NEXT POST</span>
            <span className="post--time f-s-0">{'>'}</span>
        </div>
    )

};

export default Pagination;