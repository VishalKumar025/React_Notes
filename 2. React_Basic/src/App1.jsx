import React, { useState } from 'react'

const App1 = () => {

    // ctrl + space to import automatically,..
    //let data= useState() //useState is a Hook in react, which is use to create state object in function-Based component,..
    //use state return array type, which have 2 values ()
    // also we destructure that,.. by following destructure rules,.


    let [count, setCount] = useState(1000);
    let [isLogin, setIsLogin] = useState(500);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 2) }}>Increase</button>

            <h1>{isLogin}</h1>
            <button onClick={() => { setIsLogin(isLogin - 2) }}>Decrease</button>
        </div>
    )
}

export default App1
