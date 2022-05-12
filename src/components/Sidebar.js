import React,{useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "../style.css"
import logo from "../imgs/logo.svg"
import userIcon from "../imgs/user-icon.svg"
import settingsIcon from "../imgs/settings-icon.svg"
import todo from "../imgs/todo-icon.svg"
import pin from "../imgs/pin.svg"

export default function Sidebar(props) {
    return(
        <nav className="sidebar">
    
            <Link to="/todo" className="sidebar__link"> 
                <img src={logo} className="logo" />
            </Link>
    

            <div className="sidebar__section">
                <h3 className="sidebar__section--title">Account</h3>
                <div className="link--wrapper">
                    <a href="" className="sidebar__section--link">
                        <img src={userIcon} alt="" />
                        <p>{props.user.name}'s NotePal</p>
                        
                    </a>
                </div>
                <div className="link--wrapper">
                    <a href="" className="sidebar__section--link">
                        <img src={settingsIcon} alt="" />
                        <p>Settings</p>
                    </a>
                </div>
            </div>

            <div className="sidebar__section">
                <h3 className="sidebar__section--title">Organization</h3>
                <div className="link--wrapper selected">
                    <Link to="/todo" className="sidebar__section--link">
                        <img src={todo} alt="" />
                        <p>To-Do-List</p>
                    </Link>
                </div>
                <div className="link--wrapper">
                    <Link to="/kanban" className="sidebar__section--link"> 
                        <img src={pin} alt="" />
                        <p>Notes</p>
                    </Link>
                </div>
            </div>
        </nav>
    )
}