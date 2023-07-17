import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Regestration from './Components/Regestration';
import Users from './Components/Users';

function App() {

  const data =[
    {

    }
  ]
  const [isShowReg, setIsShowREg] = useState(true)

  const [user, setUser] = useState(data)


  function getTextHello(obj){
    setUser((prev)=>{
      return [...prev,obj]
    })
    
  }

  const openShowReg = () =>{
    setIsShowREg((prev) =>!prev)
  }

  return (
    <div className="App">
      <Header openShowReg={openShowReg}/>
      {!isShowReg && <Regestration onSubmit={getTextHello} openShowReg={openShowReg} />}
    {

        user.map((el)=>(
          <Users pass={el.pass} name={el.name} email={el.email} />
        ))
    }
    </div>
  );
}

export default App;
