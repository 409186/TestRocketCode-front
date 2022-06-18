import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Name from "./components/name";
import Date from "./components/date";
import Contact from "./components/contact";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from "axios";



function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    firstLastName: "",
    secondLastName: "",
    day: "",
    month: "",
    year: "",
    email: "",
    phone: "" 
  })

  const [data, setData] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(" =>", formData)
    axios.post("http://localhost:5005/users",formData)
    .then(datos => console.log(datos))
    .catch(error => console.log(error))
  }

  function handleChange(data){
    setFormData({
      ...formData,
      ...data
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className="App">
        <Name onChange={handleChange}/>
        <Date onChange={handleChange}/>
        <div>
          <Contact onChange={handleChange}/>
          <div className="button">
            <Button variant="danger" type="submit" onClick={() => setData(true)}>Iniciar</Button>
            {data && (
              <div className='pink'>
                <p><b>Fecha de nacimiento: {formData.day} {formData.month} {formData.year}</b></p>,
                <p><b>Correo electrónico: {formData.email}</b></p>,
                <p><b>Teléfono celular: {formData.phone}</b></p>,
                <p><b>Fecha de nacimiento: {formData.firstName} {formData.secondName} {formData.firstLastName} {formData.secondLastName}</b></p>
              </div>
            )}
          </div>
        </div>
      </Form>
      <Routes>
        {routes({}).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
