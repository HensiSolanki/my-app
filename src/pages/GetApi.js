import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '../GlobalStyles';

function GetApi() {
    const [record, setRecord] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await axios.get('http://127.0.0.1:8000/api/open');
            console.log(res.data.result);
            setRecord(res.data.result);
        }
        getData();
    },[])

    return (
        <Container>
            <div>GetApi</div>

            <table border="1">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                    {
                        record.map((item) => <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </Container>
    )
}
export default GetApi;