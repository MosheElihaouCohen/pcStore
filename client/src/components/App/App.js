import './App.css';
import React, {useEffect, useState} from 'react';
import { LanguageContext, products } from '../../utils';
import Header from '../Header/Header';
import Section from '../Section/Section';





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
        <Header />
        <Section title="Offers" items={products} classTitle="offers-section" isSlider={true}/>
    </LanguageContext>
  );
}

export default App;
