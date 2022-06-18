import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'

function Name({onChange}) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstLastName, setFirstLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");

  useEffect(() => {
    onChange({firstName, secondName, firstLastName, secondLastName})
  }, [firstName, secondName, firstLastName, secondLastName])

  return (
    <div className='form-test'>
                <div className='fondo'>
                  <h3>¿Cuál es tu nombre?</h3>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                      className='inputs'
                      name="firstName"
                      type="text"
                      placeholder='Nombre'
                      value={firstName}
                      onChange={ (event) => setFirstName(event.target.value)}
                    />
                  </Form.Group>
                   <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                        className='inputs'
                        type="text"
                        name="secondName"
                        placeholder='Segundo nombre'
                        value={secondName}
                        onChange={(event) => setSecondName(event.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                        className='inputs'
                        type="text"
                        name="firstLastName"
                        placeholder='Apellido parterno'
                        value={firstLastName}
                        onChange={(event) => setFirstLastName(event.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                        className='inputs'
                        type="text"
                        name="secondLastName"
                        placeholder='Apellido Materno'
                        value={secondLastName}
                        onChange={(event) => setSecondLastName(event.target.value)}/>
                  </Form.Group>
                </div>
                <div className='pink'>
                  <p><b>{firstName} {secondName} {firstLastName} {secondLastName}</b></p>
                </div>
    </div>
  )
}

export default Name