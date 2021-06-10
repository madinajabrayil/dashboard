import React, {Component} from 'react'
import logo from '../../images/logo.png'
import dots from '../../images/dots.png'
import home from '../../images/home.png'
import chat from '../../images/chat.png'
import groups from '../../images/groups.png'
import training from '../../images/training.png'
import events from '../../images/events.png'
import docs from '../../images/documents.png'
import people from '../../images/people.png'
import email from '../../images/email.png'
import extra from '../../images/extra.png'
import './LeftMenu.css'

class LeftMenu extends Component {
    render() {
        return (
            <div className="menu-section">
                <div className="menu-container">
                    <div className="logo">
                        <img src={logo} alt="" className="logo-img"/>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={home} className="menu-img" alt=""/>
                        <p className="menu-text">Home</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={chat} className="menu-img" alt=""/>
                        <p className="menu-text">Chat</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={groups} className="menu-img" alt=""/>
                        <p className="menu-text">Groups</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={training} className="menu-img" alt=""/>
                        <p className="menu-text">Training</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={events} className="menu-img" alt=""/>
                        <p className="menu-text">Events</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={docs} className="menu-img" alt=""/>
                        <p className="menu-text">Documents</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={people} className="menu-img" alt=""/>
                        <p className="menu-text">People</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={email} className="menu-img" alt=""/>
                        <p className="menu-text">Email</p>
                    </div>
                    <img src={dots} className="dots" alt=""/>
                    <div className="menu-item">
                        <img src={extra} className="menu-img" alt=""/>
                        <p className="menu-text">Extra</p>
                    </div>
                  
                </div>
            </div>
        )
    }
}

export default LeftMenu;