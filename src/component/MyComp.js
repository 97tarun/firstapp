import React from 'react';
import { useState } from 'react';

export default function MyComp(props) {
  const [value, setValue] = useState(100);
  const [str, setStr] = useState("this is a string");
  const [bool, setBool] = useState(true);
  const [obj, setObj] = useState({name:"Sagar", age:20});
  const[price,setPrice]=useState(500);
  

  const changeobj=()=>{

    setObj({name:"sagar", age:20})
  }

  const changestr=()=>{

    setStr("This is updated string")
  }

  const changeboolean=()=>{

    setBool(false);
  }

  const changesetvalue=()=>{

    setValue(300);
  }

  return (
    <div>
      <p>{value}</p>
      {/* <button onClick={()=>{setValue(value+1)}}>Increment Value</button>
    */}
    <p>String is {str}</p>
   
    <p>Object is {obj.name}    {obj.age}</p>
    <p>{bool?"hello":"welcome"}</p>

    {props.country=="in"?<p>{price} INR</p>:<p>{price/80} USD</p>}
    <button onClick={changeobj}>change object value</button>


<button onClick={changestr}>change string value</button>


<button onClick={changesetvalue}>change setvalue</button>

<button onClick={changeboolean}>change boolean</button>
<div>

  <p>{props.data.age}</p>
  <p>{props.data.name}</p>
  <p>{props.data.salary}</p>
  
</div>

    </div>
  )
}

