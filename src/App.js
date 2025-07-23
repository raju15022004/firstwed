// import React from 'react';

// function App() {
//   let user ="Raju"
//   // const age = 20
//   // const weight=50+"kg"
//   // const hight=4+"fit";

//   const changeUser=()=>{
//     console.log(user)
//     user="Shivek"
//     console.log(user)
//   }
//   return (
//    <div>
//     <h1>Username is {user} </h1>
//      <button onClick={changeUser}>Change User</button>
//    </div>

//   );
// }

// export default App;


import React,{useState} from 'react'

const App=()=>{
  const [num,setnum]=useState(0)
  return(
    <div>
     <h3>Number is {num}</h3>
      <button onClick={()=>setnum(num+10)}>Increment</button>
      <button onClick={()=>setnum(num-10)}>Decrement</button>
    </div>
  )
}

export default App
