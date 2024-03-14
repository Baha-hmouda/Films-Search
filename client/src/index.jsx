import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ListFilm from "./components/ListFilm.jsx"
import Add from "./components/Add.jsx"


const App = () => {
  const [films, setFilms] = useState([])
  const [updater, setUpdater] = useState(false);


  const fetch = () => {
    axios.get("http://localhost:3000/api/items/getAll")
      .then((response) => 
      { const data = response.data.reverse()
        setFilms(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {

    fetch()
  },[updater])


  const addFilm=(obj)=>{
    axios.post("http://localhost:3000/api/items/postAll",obj)
    .then(()=>
    setUpdater(!updater)
    )
    .catch((error)=>console.error(error))
  }


  const updateFilm = (id, body) => {
    console.log("update body", body);
    console.log("update id", id);

    axios
      .put(`http://localhost:3000/api/items/${id}`, body)
      .then((data) => {
        setUpdater(!updater);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

const deleteFilm=(id)=>{
  axios.delete(`http://localhost:3000/api/items/${id}`)
  .then(()=>
  setUpdater(!updater)
  )
  .catch((error)=>console.error(error))
}




  return (
    <div>
      <h1>Films List</h1>
      <Add func={addFilm}/>
      <ListFilm 
      data={films}
      deleteFilm={deleteFilm}
      updateFilm={updateFilm}/>
      
    
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
