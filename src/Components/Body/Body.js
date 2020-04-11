import React from 'react';

const Body = () => {
    return (
        <div className="container">
        <div className = " text-center mt-5 mb-5">
        <h2>Our Services</h2>
        <h1>Services we provide</h1>
        </div>
        <div className="row">
        
            <div className="col-md-4">
                <img src="https://i.ibb.co/nPLxV1Q/001-dental.png" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos perferendis iusto nisi tempore.. Corrupti illo eius dolor earum.</p>
            </div>
            <div className="col-md-4">
            <img src="https://i.ibb.co/WxHRhV6/tooth-1.png" alt=""/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos perferendis iusto nisi tempore.. Corrupti illo eius dolor earum.</p>

            </div>
            <div className="col-md-4">
            <img src="https://i.ibb.co/7XfCHct/tooth.png" alt=""/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos perferendis iusto nisi tempore.. Corrupti illo eius dolor earum.</p>

            </div>
        </div>
            
        </div>
    );
};

export default Body;