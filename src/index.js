import ReactDOM from "react-dom"
import React,{useState, useEffect} from "react"
import "./style.css"
import Sidebar from "./components/Sidebar"
import ToDo from "./components/Todo"

function App () {

    const[userData, setUserData] = useState({
            name: "Johnny"
    })

    return(
        <React.Fragment>
            <Sidebar user={userData}/>
            <ToDo />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))