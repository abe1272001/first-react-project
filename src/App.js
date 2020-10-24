import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {

  useState()

  const [users, setUsers] = useState([
    {name: "Abe Chen", message: "It's my first React Project"},
    {name: "Jazmine", message: "Wow, It's nice"},
    {name: "Donarld Jump", message: "MAKE ME GREAT AGAIN!!"}
  ])


  return(
    //類似React.createElement('div')
    <div className="app"> 
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
};

export default App