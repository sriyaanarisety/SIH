import React from "react";
import '../css/newfile.scss'
import Data from './mockdata.json'
import UniversityData from './UniversitiesData.json'
import '../css/search.css'
import { useState } from "react";
import Navbar from "../Navbar";

const Home =() =>{
    // const link =() =>{
    //     props.push("/")
    // }
    const [query, setQuery] = useState("");
    const change =() =>{
      
        console.log(query);
    }
   
   
    return(<div>
    
       {/* <Search details={details} />   */}   
        <form >
        <input type="search" placeholder="Search Colleges" onChange={event => {setQuery(event.target.value); change()}} />
        </form>
        {
            UniversityData.filter(post => {
              if (query === '') {
                return post;
              } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                return post;
              }
            }).map((post, index) => (
                <ul><div  key={index}><li>   
                <p>{post.name +" " + post.country}</p></li>
              </div></ul>
           
            ))
          }
        </div>
        )
}
export default Home;