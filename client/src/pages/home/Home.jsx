import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured"
import "./home.scss"
import List from "../../components/list/List"
import { useState, useEffect } from "react";
import axios from 'axios';

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const localUrl = "http://localhost:8080/api/"

const Home = ({type}) => {

  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)
  
  // `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
  // `/lists?type=series&genre=action`, 

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
         { headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2UyMDgwZDA2YjMwMmI1MjdiYjdlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTE5NTkzOSwiZXhwIjoxNjc1NjI3OTM5fQ.7HV5FvaXt0sepK9sZOcVE_0p6DTnceLUehhna9vLJYI"
            }
          },
        );
        console.log(res.data)
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);



  
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home;
