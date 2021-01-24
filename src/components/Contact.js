import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact(props) {

    return(
        <div className="Contact">
            <img className="avatar" src={props.image} alt="avatar" />
            <div>
                <div>
                    <name className="name"> {props.name}</name> 
                </div>
                <small className="status">
                    <status className={props.online ? 'status-online' : 'status-offline'}></status>
                    <status className="status-text">{props.status}</status>
                </small>
            </div>
        </div>
    );
}

Contact.prototypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,

}

export default Contact;