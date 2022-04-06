import React, { useState, useRef } from 'react';
import { Button, Container, Input } from '../GlobalStyles';

const UseStateArray = () => {
  const [value, setValue] = useState('');
  let index = useRef(3);
  const [myArr, setmyArr] = useState([
    {
      id: 1,
      name: 'Rajkot'
    },
    {
      id: 2,
      name: 'Junagadh'
    },
    {
      id: 3,
      name: 'Veraval'
    }
  ]);
  const object = {
    name:"hensi", id:"1", city:"Rajkot"
  }
   console.log("object::", object);
  // useEffect(() => {
  //   index.current = myArr[myArr.length - 1].id;
  // }, []);
  const addTask = (name) => {
    console.log('index', index);
    // index.current = index.current + 1;
    // console.log('index ater', index.current);
    const newTasks = [...myArr, { id: ++index.current, name }];
    const newObject = {...object,city:"Veraval",state:"Gujrat"}
  //  console.log("newobject::", newObject);

    setmyArr(newTasks);
  };

  const removeTask = (id) => {
    let filterData = myArr.filter((num) => num.id !== id);
    setmyArr(filterData);
    // index.current = myArr[myArr.length - 1].id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {alert("Please enter Value");return};
    addTask(value);
    setValue('');
  };

  return (
    <>
    <Container>
    {/* <div className="content_wrapper"> */}
      <form onSubmit={handleSubmit}>
        {myArr.map((num, index) => {
          return (
            <div key={num.id}>
              <h4>
                id: {num.id}, Name: {num.name}
                <button onClick={() => removeTask(num.id)}>Delete</button>
              </h4>
            </div>
          );
        })}
        <br />
        <Input
          type="text"
          className="input"
          value={value}
          placeholder="Add a new task"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button>Add</Button>
      </form>
      {/* </div> */}
    </Container>
    </>
  );
};

export default UseStateArray;
