import React,{useState, useEffect} from "react"
import "../style.css"
import trash from "../imgs/trashcan.svg"
import editImg from "../imgs/edit.svg"

export default function ToDo() {
    
    function ListItem(props) {
        return(
            <div className="todo__list--item">
                <input type="checkbox" id={`${props.id}`} checked={props.completed} onChange={handleChangeCheck} name="completed"/>
                <label className={props.completed ? "crossed" : ""} htmlFor={`item${props.id}`}>{props.title}</label>
                <button className="list__btn">
                    <img className="edit" src={editImg} alt="" onClick={() => handleEdit(props.id)} />
                </button>
                <button className="list__btn" onClick={() => handleRemove(props.id)}>
                    <img className="trashcan" src={trash} alt=""  />
                </button>
            </div>
        )
    } 
    
    //Todo List
    const[todoItems,setTodoItems] = useState([])
    const[task, setTask] =useState({
        title:""
    })
    //Edited task
    const [edit, setEdit] = useState(false)
    const [editTask, setEditTask] = useState({
        id:"",
        editTitle:"",
    })

    //Create error message
    const [error, setError] = useState("")
    
    //Get tasks from database
    const loadTasks = async () => {
        const response = await fetch("http://localhost:5000/api/tasks")
        const data = await response.json()
        console.log(data)
        const sortedArr = data.sort((a,b) => a.id - b.id)
        setTodoItems(sortedArr)
    }

    //Load tasks on component mount
    useEffect(async () => {
        loadTasks()
    },[]);

    //Handle new task submit/creation
    const handleSubmit = async(event) => {
        event.preventDefault()
        //Checkt task is not empty
        if(task.title === ""){
            setError("Please enter a task")
        }else{
            setError("")
        }
        const res = await fetch("http://localhost:5000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task),

        });
        setTask({title:""})
        loadTasks()

    }

    //Handle task completion check
    const handleChangeCheck = async (event) => {
        const{checked,id} = event.target
        setTodoItems((prevItems) => {
            return(
                prevItems.map((item) => item.id == id ? {...item,completed:checked} : item)
            )
        })
        await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({completed:checked})
        });

    }

    //Handle task change
    function handleChange(event) {
        if(event.target.value.length < 150){
            setTask({...task,title:event.target.value})
        }else{
            setError("Task cannot be more than 150 characters")
        }

    }

    //Handle task deletion
    const handleRemove = async (id) => {
        await fetch(`http://localhost:5000/api/tasks/${id}`, {
            method: "DELETE",
        });
        setTodoItems((prevItems) => prevItems.filter((item) => item.id != id ))
    }
    
    // Handle task edit
    const handleEdit = (id) => {
        setEdit(true)
        const item = todoItems.find((item) => item.id == id)
        setEditTask({...editTask,id:id,editTitle:item.title})   
    }
    
    //Handle task edit change
    function handleChangeEdit(e) {
        setEditTask({...editTask,editTitle:e.target.value})
    }

    //Handle task edit submit
    const handleEditSubmit = async (event) => {
        event.preventDefault()
        setEdit(false)
        await fetch(`http://localhost:5000/api/tasks/${editTask.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title:editTask.editTitle})
        });
        loadTasks()
    }

    //Save uncompleted tasks on component unmount
    const uncompletedItems = 
        todoItems.filter((item) => !item.completed)
            .map((item) => {
            return(
                <ListItem key={item.id} {...item} />
            )
            })

    //Save completed tasks on component unmount
    const completedItems = 
        todoItems.filter((item) => item.completed)
            .map((item) => {
            return(
                <ListItem key={item.id} {...item} />
            )
            })

    //Render todo list
    return(
        <div className="todo">
            <form className="todo__form" onSubmit={handleSubmit}>
                <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Add item to list..." autoComplete="off"/>
                <button>+</button>
                {error.length > 0 && <p className="error-message">{error}</p>}
            </form>
            <main className="todo__list">
                {uncompletedItems}

            </main>
            <footer className="todo__completed">
                <div></div>
                <h3>Completed</h3>
                <hr />
                <div className="todo__list">
                    {completedItems}
                </div>
            </footer>
            {edit && 
                <div className="overlay">
                    <div className="modal">
                        <div className="modal__header">
                            <h3>Edit Task</h3>
                            <button className="modal__close" onClick={() => setEdit(false)} >X</button>
                        </div> 
                        <div className="modal__body">
                            <form className="modal__form">
                                <input type="text" value={editTask.editTitle} onChange={handleChangeEdit}/>
                                <button onClick={handleEditSubmit}>Save</button>
                            </form>
                        </div>           
                    </div>
                </div>
            }

        </div>
    )
}