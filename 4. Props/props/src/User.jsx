// function User(props){    //here, we are recieving a data, in the time of calling it,..
//     console.log(props.age);   //access name with object
//     // console.log(props.name)   //access name only, instead of object

//     return <div>
//         <h1>User Component</h1>
//         <p>Name : {props.name}</p>
//         <p>Age : {props.age}</p>
//     </div>
// }


// function User({name,age}){    //we can do like this also to fetch data by passing one object with the same property name (where you call it),...
//     // console.log(name);

//     return <div>
//         <h1>User Component</h1>
//         <p>{name}</p>
//         <p>{age}</p>

//     </div>
// }


function User({user}){
    return <div>
        <hr/>
        <p>name: {user.name}</p>
        <p>age: {user.Age}</p>
        <p>email: {user.email}</p>
    </div>

}
export default User