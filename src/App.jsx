import React from 'react';
import { useEffect, useState } from "react";
import Icons from './components/Icons';
import'./App.scss'



const App = ()=> {
  const [search, setSearch] = useState('');
  const [values, setValues] = useState('');
  const [icon, setIcon] = useState('');



  const getData = async () => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ad23f3dbba2a023546edbcf78d7b1779`;

    await fetch(URL)

      .then(res => {return res.json()})
      .then(data => {
        console.log(data);
        if(data.cod >= 400){
          setValues(false)
        } else {
          setValues(data)
          console.log(data.weather[0].main)
          setIcon(data.weather[0].main)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };


  useEffect(() => {

    getData();

  }, [search]);

  const handleSearch = (e)=>{
    if(e.key === 'Enter'){
      setSearch(e.target.value)
      console.log(e.target.value)
    }
  }


  return (
    <>
  <div className='container'>
    <div>
      <h1>Weather</h1>
        <div className="input-container">
          <input type="text"
          onKeyDown={handleSearch}
          autoFocus
          />
        </div>
    </div>
    <div className="card">
      {
      (values) ? (
        <div>
          <div>
            <h1> {values.name} </h1>
            <p> {values.main.temp.toFixed(0)}&deg; </p>
            <img src={Icons(icon)} alt="Icon-weather" />
          </div>
          <div>
            <p>{values.main.temp_min.toFixed(0)}&deg;</p>
            <p>{values.main.temp_max.toFixed(0)}&deg;</p>
          </div>
        </div>
        ) : (
            <h1 className="error-message"> City Not Found </h1>
        )
      }
      </div>
  </div>
    </>
  );
}

export default App
