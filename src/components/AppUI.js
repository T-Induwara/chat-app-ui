import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Avatar from '../assets/images/avatar.jpg';
import DogPic1 from '../assets/images/dog-image-1.jpg';
import DogPic2 from '../assets/images/dog-image-2.jpg';
import DogPic3 from '../assets/images/dog-image-3.jpg';

const AppUI = () => {
    return <div className="d-flex flex-row app">
        <div className="top-shape"></div>
        <div className="bottom-shape"></div>
        <div className="container app-wrapper">
            <div className="row d-flex wrapper-row">
                <div className="app-border">
                    <div className="app-ui"></div>
                </div>
                <div className="text-wrapper">

                </div>
            </div>
        </div>
    </div>
};
export default AppUI;