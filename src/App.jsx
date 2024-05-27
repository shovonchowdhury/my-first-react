import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nayok from './Nayok'
import Bookstore from './Bookstore'

function App() {
  const [count, setCount] = useState(0)

  const actor=['shakib khan','hero alom','jayed khan','baby bappi'];

  const books=[

    {id:1,subject:'Mathmetics',price:120},
    {id:2,subject:'Physics',price:110},
    {id:3,subject:'Chemistry',price:100},
    {id:4,subject:'Biology',price:135}

  ];

  return (
    <>

        <Bookstore books={books}></Bookstore>

        <Student grade="1" roll={3}></Student>
        <Student grade="2" roll={10}></Student>
        <Student grade="3" roll={5}></Student>
        <div className='student'>
        {
          actor.map(nayok=> <Nayok name={nayok}></Nayok>)
        }
        </div>
    </>
  )
}

// function Student({grade,roll}){
//   return (

//     <div className='student'>
//         <h2>Student Info</h2>
//         <p>Class:{grade}</p>
//         <p>Roll:{roll} {'('}which is {roll<=3 ? 'great' : 'not great'}{')'}</p>
//     </div>
//   )
// }

function Student({grade,roll}){
  return (

    <div className='student'>
        <h2>Student Info</h2>
        <p>Class:{grade}</p>
        <p>Roll:{roll} {'('}which is {(roll<=3 && 'great') || 'not great'}{')'}</p>
    </div>
  )
}

export default App
