import React from 'react'
import { per } from '../Data'
const Persons = ({per}) => {
  return (
    <div>
      
      <div className="row justify-content-center ">
      <div className="col-lg-8">
<div className="rectangle   ">
 { per.length ? (per.map((e , indx)=>{ 
  return(
    <div key={indx} className="mora d-flex  mx-3">
    <img className='person' src="../public/people-headshot-nick-maslow-f21ef38676504bc89a091ec9a5c95e4b.jpg" alt="person" />
  <h3 className='p-2'>{e.name}</h3>
  <h4 className='p-2 text-success '>{e.date}</h4>
    </div>
  )
 })): <h2 className='text-center text-danger'>no information</h2> }
 
  

</div>
      </div>
    </div>
    </div>
  )
}

export default Persons
