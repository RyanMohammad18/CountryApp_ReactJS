import React, { useEffect, useState } from 'react'
import Countries from './Countries';
import "./Countries.css";
import Search from './Search';

const url="https://restcountries.com/v3.1/all";

const Country_app = () => {



    const[isLoading,setIsLoading]=useState(true);
    const[error,setError]=useState(null);
    const[countries,setCountries]=useState([]);
    const [filtercountries,setFiltercountries]=useState(countries);
    
    const fetchData = async(url)=>{
        setIsLoading(true);

        try{

        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setFiltercountries(data);
        setIsLoading(false);
        setError(null);
        console.log(countries)

        }catch(error){
            setIsLoading(false);
            setError(error);
        }
    }


  useEffect(()=>{
    fetchData(url)

  },[]);

  const handleRemoveCountry= (name)=>{
    const filter = filtercountries.filter((countries)=> countries.name.common !== name);
    setFiltercountries(filter)
    
  }

  const handleSearch =(searchvalue)=>{
    let value = searchvalue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    });
    setFiltercountries(newCountries)

  }

    return (
        <>

        <h1>Country_app</h1>
        <Search onSearch={handleSearch}/>
         <div>
            {isLoading && <h2>Loading</h2>}
            {error && <h2>{error.message}</h2>}
            {countries && <Countries countries={filtercountries} 
            onRemoveCountry={handleRemoveCountry}/>}
           
        </div>
        
        
        </>
   
  );
};

export default Country_app