import React,{useState} from "react";

const InputExample = () => {
   // const [name,setName]=useState("");
  //  const [surname,setSurname]=useState("");
  const [form,setForm]=useState({name:"",surname:""});
   //const onChangeName=(e)=>setName(e.target.value);
   //const onChangeSurname=(e)=>setSurname(e.target.value);
   const onChangeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
   }
  return <div>
    name<br/>
    <input name="name" value={form.name} onChange={onChangeInput}/>
   <br></br>
   surnamename<br/>
    <input name="surname" value={form.surname} onChange={onChangeInput}/>
   <br></br>
   {form.name}---{form.surname}
  </div>;
};

export default InputExample;
