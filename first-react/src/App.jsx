
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { per } from './Data/Data'
import Show from './Data/ShowData/Show';
import Buttoms from './Data/Buttoms/Buttoms';
import Persons from './Data/Persons/Persons';
import { useEffect, useState } from 'react';
function App() {
const [perData, setPerData]= useState(per)
const onDelete =()=>{
  setPerData([])
}
const onShow =()=>{
  setPerData(per)
}
useEffect(()=>{
  setPerData([])
},[])
return (
<>
<div className="color-body">

<Show per={perData}/>

<Persons per={perData}/>

<Buttoms DEL={onDelete} SHOW={onShow}/>


</div>

</>
  )
}

export default App
