import React,{useState} from 'react';
import { Button, Form } from 'react-bootstrap'
function FormTodo1({ addTodo1 }) {
    const [value1, setValue1] =useState("");
  
    const handleSubmit1 = e => {
      e.preventDefault();
      if (!value1) return;
      addTodo1(value1);
      setValue1("");
    };
  
    return (
      <Form onSubmit={handleSubmit1}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  export default FormTodo1