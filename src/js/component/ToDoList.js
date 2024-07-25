import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";

const ToDoList = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [filter, setFilter] = useState("");
    const myUrlTodos = "https://playground.4geeks.com/todo/"

    //First it compares if my user is created since this api keep deleting it,
    // and then get the to-dos we have saved
    useEffect(() => {
        createUser(); 
    }, []);

    const createUser = () => {
        fetch(myUrlTodos + "users/IgnacioQuiros", {
            method: "GET"
        })
        .then(response => {
            if (response.status === 404) {
                return fetch(myUrlTodos + "users/IgnacioQuiros", {
                    method: "POST"
                });
            } else if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error veryfing user');
            }
        })
        getTodos();
    };


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addToList();
        } else if (e.key === "Enter") {
            alert("Write something in the input field first");
        }
    };

    const addToList = () => {
        if (todo === "") {
            alert("Write something in the input field first");
            return;
        }
        let newTodo = {
            label: todo,
            is_done: false
        };
        fetch(myUrlTodos + "todos/IgnacioQuiros", {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then((data) => { setTodoList([...todoList, data]); })
            .catch(() => { console.log("Error Catch Add/POST") });
        setTodo("");
    };

    const getTodos = () => {
        fetch(myUrlTodos + "users/IgnacioQuiros", {
            method: "GET"
        })
            .then(response => response.json())
            .then((data) => {
                setTodoList(data.todos);
            })
            .catch(() => { console.log("Error Catch GET") });
    };

    const eraseTask = (index) => {
        //Delete only 1 if it has index but all tasks if index is null
        if (index != null) {
            fetch(myUrlTodos + `todos/${todoList[index].id}`, {
                method: "DELETE",
            })
                .then(() => {
                    getTodos();
                })
                .catch(error => console.error(error));
        } else {
            todoList.map(task => {
                return fetch(myUrlTodos + `todos/${task.id}`, {
                    method: "DELETE",
                })
                    .then(() => {
                        getTodos();
                    })
            })
        }
    };

    //Extra filter function
    const filteredList = todoList.filter(
        task => task.label.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="mx-2 mb-5">
            <div className="text-center container mt-5 border border-5 border-dark rounded-4"
                style={{ backgroundColor: "#E5B762" }}>
                <div className="mb-3 mt-4 justify-content-center pb-4">
                    <label htmlFor="exampleInputEmail" className="form-label fs-1">My personal List</label>
                    <div className="row-flex">
                        <hr className="container col-8 col-sm-6 col-md-5" />
                        <hr className="container col-8 col-sm-6 col-md-5 mb-4" />
                    </div>
                    <div className="p-4 rounded-2 mx-0 mx-sm-4 pb-5" style={{
                        backgroundColor: "#F7F3CB", position: "relative", zIndex: 2
                    }}>
                        <div>
                            <input type="text" className="form-control fs-3" id="exampleInputEmail" placeholder="What should I do?"
                                value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={handleKeyDown} maxLength="40"
                            />
                            <button className="btn btn-success ms-2 mt-2 px-4" onClick={addToList}>Enter</button>
                            <button className="btn btn-danger ms-2 mt-2 px-4" onClick={() => { setTodo(""); setFilter("") }}>Clear Inputs</button>
                            <button className="btn btn-danger ms-2 mt-2 px-4" onClick={() => eraseTask()}> Erase All Tasks</button>
                        </div>
                        <div className="row d-flex justify-content-center mt-3">
                            <input type="text" className="col-4 border rounded-3" id="filterInput" placeholder="Filter tasks here:"
                                value={filter} onChange={(e) => setFilter(e.target.value)} maxLength="40" />
                        </div>
                        {filteredList.map((todo, index) => (
                            <NewTask description={todo.label} index={index + 1} key={index} eraseTask={() => eraseTask(index)} />
                        ))}
                        <p className="pt-5">Tasks left: {todoList.length === 0 ? "There are no more tasks" : todoList.length}</p>
                    </div>

                    <div className="mx-1">
                        <div className="p-3 rounded-2 mx-0 mx-sm-4" style={{
                            backgroundColor: "#E7E2B8", marginTop: "-26px", position: "relative", zIndex: 1
                        }}></div>
                        <div className="mx-1">
                            <div className="p-3 rounded-2 mx-0 mx-sm-4" style={{
                                backgroundColor: "#D3CEA2", marginTop: "-26px", position: "relative", zIndex: 0
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
