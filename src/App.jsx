import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            todos: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ 
                todos: [...this.state.todos, 
                        { id: uuidv4(), task: "Inital loaded task" },
                        { id: uuidv4(), task: "Inital loaded task two" },
                        { id: uuidv4(), task: "Inital loaded task three" }
                ]
            });
        }, 2000);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ 
            task: "", 
            todos: [...this.state.todos, { id: uuidv4(), task: this.state.task }] 
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            <label>Task:</label>
                            <input 
                                value={this.state.task} 
                                onChange={event => this.setState({ task: event.target.value })} 
                                className="form-control" />
                            <button onClick={event => this.handleSubmit(event)} className="btn btn-primary mt-3">
                                Add To Do Task
                            </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.todos.map(todo => (
                                // <li className="list-group-item" key={`todo-task-${todo.id}`}>{todo.task}</li>
                                <TodoItem key={`todo-task-${todo.id}`} todo={todo} />
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        );
    };
};

export default App;