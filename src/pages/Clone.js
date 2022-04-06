import React, { useState } from 'react';
import { Button, Container,Input } from '../GlobalStyles';
// import Header from '../component/Header';

const Clone = () => {

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
    let decrement = () => {
        setCounter(counter - 1);
    }
    return (
        <>
            <div className="input-group w-auto justify-content-end align-items-center">
                <Button onClick={decrement}>-</Button>
                <Input value={counter} />
                <Button onClick={increment}>+</Button>
            </div>
        </>
    )
}
const CloneDiv = () => {
    const [clone, setClone] = useState([]);
    const cloneDiv = () => {
        setClone([...clone,
        React.createElement(Clone, { key: clone.length })])
    }
    return (
        <>
         <Container>
            {/* <div className="content_wrapper"> */}
                {/* <Header activeMenu="clone"/> */}
                <Button type="button" className="btn btn-secondary" onClick={cloneDiv}>Add</Button>
                <Clone />
                {clone}
            {/* </div> */}
         </Container>
        </>
    )
}
//  const CloneDiv = () => {
// 	const [element, setElement] = useState([])
//     const clone =Clone()
// 	const CloneInput = () => {
//         console.log(element.length)
// 		setElement([...element,
// 		React.cloneElement(clone, { key: element.length })])
// 	};
// 	return (
// 		<div>
// 			<button onClick={CloneInput}>NEW</button>
// 			<Clone />
// 			{element}
// 		</div>
// 	)
// }


export default CloneDiv;