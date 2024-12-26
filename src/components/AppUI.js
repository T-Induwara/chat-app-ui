import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import BackIcon from '../assets/images/back-icon.png';
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
                <div className="app-border d-flex flex-column">
                    <div className="app-ui">
                        <div className="app-body d-flex flex-column">
                            <div className="ui-notch"></div>
                            <div className="d-flex flex-column ui-header">
                                <div className="header-col"></div>
                                {/*Below div is for app header contents*/}
                                <div className="d-flex flex-row header-col"> 
                                    <div className="d-flex flex-row img-col">
                                        <img src={BackIcon} className="back-icon" alt="Back icon"></img>
                                        <img src={Avatar} className="user-img" alt="User avatar"></img>
                                    </div>
                                    <div className="d-flex flex-column data-col">
                                        <p className="username">Samuel Green</p>
                                        <p className="user-status">Available to Walk</p>
                                    </div>
                                    <div className="d-flex flex-column menu-col">
                                        <div className="menu-circle"></div>
                                        <div className="menu-circle"></div>
                                        <div className="menu-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-content"></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column text-wrapper">
                    <h1 className="app-title">Simple Booking</h1>
                    <p className="app-desc">Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat.</p>
                </div>
            </div>
        </div>
    </div>
};
export default AppUI;