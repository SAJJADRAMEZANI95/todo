import React,{useState} from "react";
import "./App.css";
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./comonents/Todo";
import FormTodo from "./comonents/FromTodo";
import FormTodo1 from "./comonents/FromTodo1";
import FormTodo2 from "./comonents/FromTodo2";


function App() {
  const [todos, setTodos] =useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);
  const [todos1, setTodos1] =useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);
  const [todos2, setTodos2] =useState([
    {
      text: "This is a sampe todo",
      isDone: false
    }
  ]);
  


  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const addTodo1 = text => {
    const newTodos1 = [...todos1, { text }];
    setTodos1(newTodos1);
  };
  const addTodo2 = text => {
    const newTodos2 = [...todos2, { text }];
    setTodos2(newTodos2);
  };
  

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  const markTodo1 = index => {
    const newTodos1 = [...todos1];
    newTodos1[index].isDone = true;
    setTodos1(newTodos1);
  };
  const markTodo2 = index => {
    const newTodos2 = [...todos2];
    newTodos2[index].isDone = true;
    setTodos2(newTodos2);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const removeTodo1 = index => {
    const newTodos1 = [...todos1];
    newTodos1.splice(index, 1);
    setTodos1(newTodos1);
  };
  const removeTodo2 = index => {
    const newTodos2 = [...todos2];
    newTodos2.splice(index, 1);
    setTodos2(newTodos2);
  };
  

  return (
    <div className="app">
    <div className="container">
     <div className="row justify-content-between">
       
      <div className="col">
        <h6>To Do </h6>
        <FormTodo addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
      </div>
      <div className="col">
        <h6>To Do 2</h6>
        <FormTodo1 addTodo1={addTodo1} />
          {todos1.map((todo1, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo1}
                markTodo={markTodo1}
                removeTodo={removeTodo1}
                />
              </Card.Body>
            </Card>
          ))}
      </div>
      <div className="col">
        <h6>To Do 3</h6>
        <FormTodo2 addTodo2={addTodo2} />
          {todos2.map((todo2, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo2}
                markTodo={markTodo2}
                removeTodo={removeTodo2}
                />
              </Card.Body>
            </Card>
          ))}
      </div>
     </div>
    </div>
  </div>
  );
}

export default App;
