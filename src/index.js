import ReactDOM from "react-dom"
import {BrowserRouter, Routes, Route  } from "react-router-dom"
import React,{useState} from "react"
import "./style.css"
import Register from "./components/Register"
import Login from "./components/Login"
import Sidebar from "./components/Sidebar"
import { PageHeader } from "./components/PageHeader"
import ToDo from "./components/ToDo"
import Kanban from "./components/Kanban"


function App () {

    const[userData, setUserData] = useState({
            name: "Johnny",
    })

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/todo" element={
                            <main className="content">
                                <Sidebar user={userData}/>
                                <PageHeader title="ToDoList" />
                                <ToDo />
                            </main>
                }/>
                <Route path="/kanban" 
                    element={
                        <main className="content">
                            <Sidebar user={userData}/>
                            <PageHeader title="Kanban" />
                            <Kanban />
                        </main>
                    }
                />
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>


    )
}

ReactDOM.render(<App />, document.getElementById("root"))