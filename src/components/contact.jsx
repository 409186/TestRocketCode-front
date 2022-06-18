import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'

const Contact = ({onChange}) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    onChange({email, phone})
  }, [email, phone])


  return (
    <div className='form-test'>
              <div className='fondo'>
                <h3>Datos de contacto</h3>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                    className='inputs'
                      name="email"
                      type="text"
                      placeholder='Correo electrónico'
                      value={email}
                      onChange={ (event) => setEmail(event.target.value)}
                    />
                  </Form.Group>
                   <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                        className='inputs'
                        type="text"
                        name="phone"
                        placeholder='Teléfono celular'
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}/>
                  </Form.Group>
              </div>
                <div className='pink'>
                  {email && (<p><b>Correo electrónico: {email}</b></p>)}
                  {phone && (<p><b>Teléfono celular: {phone}</b></p>)}
                </div>
    </div>
  )
}

export default Contact