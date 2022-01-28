import React,{useState, useEffect} from "react"
import "../style.css"


export default function ToDo() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return(
       <div className="todo">
            <form className="todo__form" onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="Add item to list..."/>
                <button>+</button>
            </form>
            <main className="todo__list">

                <div className="todo__list--item">
                    <input type="checkbox" checked={false} id="item1"  name=""/>
                    <label htmlFor="item1">Take my pet for a walk</label>
                </div>
                <div className="todo__list--item">
                    <input type="checkbox" checked={false} name=""/>
                    <label>Read the Power of Habit</label>
                </div>
                <div className="todo__list--item">
                    <input type="checkbox" checked={false} name=""/>
                    <label>Watch React Tutorial</label>
                </div>
                <div className="todo__list--item">
                    <input type="checkbox" checked={false} name=""/>
                    <label>Finish my wireframe</label>
                </div>
                <div className="todo__list--item">
                    <input type="checkbox" checked={false} name=""/>
                    <label>Go buy some milk</label>
                </div>
                <div className="todo__list--item">
                    <input type="checkbox" checked={false} name=""/>
                    <label>Take a 30 min nap</label>
                </div>
                <div className="todo__list--item">
                    <input type="checkbox" checked={false} name=""/>
                    <label>Program my panel</label>
                </div>

            </main>
            <footer className="todo__completed">
                <h3>Completed</h3>
                <hr />
                <div className="todo__list">
                    <div className="todo__list--item completed">
                        <input type="checkbox" checked={true} name=""/>
                        <label>Make breakfast</label>
                    </div>
                </div>
            </footer>
       </div>
    )
}