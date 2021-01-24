import React from 'react';
import './Contact.css';

function Contact() {
    const name = 'Layla Bailey';
    const avatar = 'https://randomuser.me/api/portraits/women/2.jpg';
    const online = true;

    return(
        <div className="Contact">
            <img className="avatar" src={avatar} alt="avatar" />
            <div>
                <div>
                    <name className="name"> {name}</name> 
                </div>
                <small className="status">
                    <status className="status-online">•</status>
                    <text className="status-text">{online ? 'online' : 'offline'}</text>
                </small>
            </div>
        </div>
    );
}

export default Contact;