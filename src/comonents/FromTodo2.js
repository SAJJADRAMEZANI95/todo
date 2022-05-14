import React,{useState} from 'react';
import { Button, Form } from 'react-bootstrap'
function FormTodo2({ addTodo2 }) {
    const [value2, setValue2] =useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value2) return;
      addTodo2(value2);
      setValue2("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  export default FormTodo2