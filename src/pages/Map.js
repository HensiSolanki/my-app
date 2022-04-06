import React from 'react'
import { Container } from '../GlobalStyles';

const Map = () => {

    const students = [{
        name: 'John', email: 'john@gmail.com', contact: 222 ,id:"1"
    },
    {
        name: 'Jenth', email: 'jenth@gmail.com', contact: 666, id:"2"
    },
    {
        name: 'Jenny', email: 'jenny@gmail.com', contact: 999, id:"3"
    }]
    return (
        <>
          <Container>
           {/* <div className="content_wrapper"> */}
                <table border="1">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                {
                    students.map((data) =>  <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                    </tr>)
                }</tbody>
                </table>
            {/* </div> */}
          </Container>
        </>
    )
}
export default Map;