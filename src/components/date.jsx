import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'

const Date = ({onChange}) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    onChange({day, month, year})
  }, [day, month, year])


  return (
    <div className='form-test'>
                <div className='fondo'>
                  <h3>¿Cuál es tu fecha de nacimiento?</h3>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control
                    className='inputs'
                      name="day"
                      type="text"
                      placeholder='Día'
                      value={day}
                      onChange={ (event) => setDay(event.target.value)}
                    />
                  </Form.Group>
                   <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                        className='inputs'
                        type="text"
                        name="month"
                        placeholder='Mes'
                        value={month}
                        onChange={(event) => setMonth(event.target.value)}/>
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                        <Form.Control
                        className='inputs'
                        type="text"
                        name="year"
                        placeholder='Año'
                        value={year}
                        onChange={(event) => setYear(event.target.value)}/>
                  </Form.Group>
                </div>
                <div className='pink'>
                  <p><b>{day} {month} {year}</b></p>
                </div>
    </div>
  )
}

export default Date