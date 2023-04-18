import React,{useState} from 'react'
import "../App.css";
import Count from '../components/count';
import InputExample from '../components/InputExample/InputExample';
import Test from "../components/test";
import Test2 from "../components/test2";

const Home = () => {
   
    const [test, setTest] = useState(false);
    const [age, setAge] = useState(30);
    const [friends,setFriends]=useState(["x1","x2","x3"]);
    const [adress,setAdress]=useState({title:"esk",zip:2626});
    function handleClick() { 
        setTest(!test);
        console.log(test);
      }
      const name="haci";
      return (
        <div className="App"> 
         
          {test ? <Test  name={name} /> : <Test2/>}
          <Test  name={name} age={age}/>
          <Test2/>
          <button onClick={handleClick}>Test değiştir</button>
          <button onClick={()=>setAge(22)}>Yaş değiştir</button>
          <hr></hr>
          <br/><br/>
          <h2>Friends</h2>
          {friends.map((friend,key)=>(
            <div key={key}>{friend}</div>
          ))}
          <button onClick={(e)=>setFriends([...friends,"x4"])}>Arkadaş ekle</button>
          <hr></hr>
          <br/><br/>
          {adress.title}<br/>
          <button onClick={(e)=>setAdress({title:"eskişehir"})}>Adress değişikliği</button>
          <Count/>
          <hr></hr>
          <br/><br/>
          <InputExample/>
        </div>
      );
}

export default Home