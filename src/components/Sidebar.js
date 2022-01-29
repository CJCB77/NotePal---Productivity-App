import React,{useState, useEffect} from "react"
import "../style.css"
import logo from "../imgs/logo.svg"
import userIcon from "../imgs/user-icon.svg"
import settingsIcon from "../imgs/settings-icon.svg"
import todo from "../imgs/todo-icon.svg"
import pin from "../imgs/pin.svg"

export default function Sidebar(props) {
    return(
        <nav className="sidebar">
    
            <img src={logo} className="logo" />
    

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
                    <a href="" className="sidebar__section--link">
                        <img src={todo} alt="" />
                        <p>To-Do-List</p>
                    </a>
                </div>
                <div className="link--wrapper">
                    <a href="" className="sidebar__section--link">
                        <img src={pin} alt="" />
                        <p>Notes</p>
                    </a>
                </div>
            </div>
        </nav>
    )
}