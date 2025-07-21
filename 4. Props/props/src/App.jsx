import React from 'react'
import User from './User'
import College from "./College"

const App = () => {
    // let name="kaju";

    // you pass multiple arguments with by creating objects,.
    let userName={name:"Vishal",Age:"24",email:"mrvihaan025@gmail.com"}
    let userName1={name:"Kaju",Age:"21",email:"mrvihaan025@gmail.com"}
    let userName2={name:"Vishii",Age:"25",email:"mrvihaan025@gmail.com"}

    let userName3=["vishal", "vihaan","laddoo","kajal"];
    return (
        <div>
            <h1>Props in react js</h1>

            {/* just like you are calling a method by passing actual argument, in react we have properties(props) to pass actual arguments,. */}
            {/* you can pass multiple argument, but we have to give formal argument as respect to actual(if you passing {} in formal args) */}
            {/* <User name={name} age={"24"}/> */}
            <User user={userName}/>
            <User user={userName1}/>
            <User user={userName2}/>

            {/* <College names={userName3[1]}/>   //if you passed a particular element by index, then you can access particular character in the time of fetching */}
            {/* <College names={userName3}/> */}
        </div>
    )
}

export default App;

