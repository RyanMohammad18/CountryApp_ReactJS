import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [searchtext,setsearchtext]=useState("")
    const handlechange= (e) =>{
        setsearchtext(e.target.value);

    };
    useEffect(()=>{
        props.onSearch(searchtext);


    },[searchtext]);
  return (
    <div style={{textAlign:"center"}}>
        <input type="text" placeholder='search country' value={searchtext} onChange={handlechange}/>
    </div>
  )
}

export default Search