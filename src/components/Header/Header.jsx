import React, {Component} from 'react'
import './Header.css'
import left from '../../images/left.png'
import menu from '../../images/menu.png'
import search from '../../images/search.png'
import add from '../../images/add.png'
import dropdown from '../../images/drop.png'
import list from '../../images/list.png'
import icon from '../../images/icon.png'
import photo from '../../images/pp.png'

class Header extends Component {
    render() {
        return (
            <div className="header-menu">
                <div className="flex">
                    <div className="menu-icon">
                        <img src={left} alt="" className="menu-img1"/>
                        <img src={menu} alt="" className="menu-img"/>
                    </div>
                    <div className="search">
                        <img src={search} className="search-icon" alt=""/>
                        <input type="text" className="search-input" placeholder="Search..."/>
                    </div>
                </div>
                <div className="flex">
                    <div className="create">
                        <img src={add} alt="" className="add-img"/>
                        <span className="create-text">Create</span>
                        <img src={dropdown} alt="" className="drop"/>
                    </div>
                    <div className="noti">
                        <div className="noti-position">
                        <div className="count"><span>3</span>
                            </div>
                            <img src={list} alt="" className="noti-icon"/></div>

                        <div className="noti-position">
                        <div className="count"><span>3</span>
                            </div>
                            <img src={icon} alt="" className="noti-icon"/>
                        </div>
                    </div>
                    <div className="profil">
                        <div className="profil-div">
                            <img src={photo} alt="" className="prof-img"/>
                        </div>
                        <img src={dropdown} alt=""/>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;