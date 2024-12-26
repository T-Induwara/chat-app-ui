import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import BackIcon from '../assets/images/back-icon.png';
import SendIcon from '../assets/images/send-icon.png';
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
                                    <div className="d-flex flex-row user-col">
                                        <div className="d-flex flex-row img-col">
                                            <img src={BackIcon} className="back-icon" alt="Back icon"></img>
                                            <img src={Avatar} className="user-img" alt="User avatar"></img>
                                        </div>
                                        <div className="d-flex flex-column data-col">
                                            <p className="username">Samuel Green</p>
                                            <p className="user-status">Available to Walk</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column menu-col">
                                        <div className="menu-circle"></div>
                                        <div className="menu-circle"></div>
                                        <div className="menu-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-content">
                                <div className="content-col">
                                    <p className="left-chat">
                                        That sounds great. I'd be happy with that.
                                    </p>
                                    <p className="left-chat">
                                        Could you send over some pictures of your dog, please?
                                    </p>
                                </div>
                                <div className="content-col">
                                    <div className="d-flex flex-row pet-images">
                                        <img src={DogPic1} className="dog-img" alt="Dog image"/>
                                        <img src={DogPic2} className="dog-img" alt="Dog image"/>
                                        <img src={DogPic3} className="dog-img" alt="Dog image"/>
                                    </div>
                                    <p className="right-chat">
                                        Here are a few picture. She's a happy girl!
                                    </p>
                                    <p className="right-chat">
                                        Can you make it?
                                    </p>
                                </div>
                                <div className="content-col">
                                    <p className="left-chat">
                                        She looks so happy! The time we discussed works. How long shall I take her out for?
                                    </p>
                                    <div className="d-flex flex-row left-chat-check">
                                        <div className="d-flex flex-row">
                                            <input type="radio" id="selection" name="time-walk" value="30"/>
                                            <p class="user-choice-text">
                                                30 minute walk
                                            </p>
                                        </div>
                                        <p className="choice-price">$29</p>
                                    </div>
                                    <div className="d-flex flex-row left-chat-check">
                                        <div className="d-flex flex-row">
                                            <input type="radio" id="selection" name="time-walk" value="30"/>
                                            <p className="user-choice-text">
                                                1 hour walk
                                            </p>
                                        </div>
                                        <p className="choice-price">$49</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row content-col">
                                    <input type="text" placeholder="Type a message..." className="text-placeholder"></input>
                                    <div className="send-btn">

                                    </div>
                                </div>
                            </div>
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