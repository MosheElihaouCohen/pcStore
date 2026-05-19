import './App.css';
import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { LanguageContext } from './utils';





function App() {
   const [userData, setUserData] = useState({});



  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data =>{
      setUserData(data);
    })
  }, [])



  return (
    <LanguageContext value="he">
    <div className="App">
      <header className="App-header">
        Hello {userData.name}
        <div>Email: {userData.email}</div>
        <div>City: {userData.address.city}</div>
        <ItemList />
      </header>
    </div>
    </LanguageContext>
  );
}

export default App;
