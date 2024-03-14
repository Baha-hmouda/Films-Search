import React, { useState } from 'react';


const OneFilm=(props) =>{
  const [name, setName] = useState(props.film.name)
  const [imgurl, setImgurl] = useState(props.film.imgurl)
   const [description, setDescription] = useState(props.film.description)
  const [filmId, setFilmId] = useState(props.film.id)

  const handleUpdate = () => {
     props.updateFilm(filmId, {

      name: name,
      imgurl: imgurl,
      description: description,
      id: filmId,
    })
  }

  const handleInputChange = (e) => {
    const { name, value } =e.target
    const updateState ={
      name: setName,
      imgurl: setImgurl,
      description: setDescription
     }
  
     if (updateState[name]) {
      updateState[name](value)
    }
  }

  return (
    <div className="OneFilm">
       <h1>{name}</h1>
      <img src={imgurl} alt="" />
      <p>Description : {description}</p>
      <button onClick={() => props.deleteFilm(filmId)}>Delete</button>
      <div className="inputs">
        <p>Name:</p>
         <input type="text" name="name" value={name} onChange={handleInputChange} />
        <p>Image URL:</p>
        <input type="text" name="imgurl" value={imgurl} onChange={handleInputChange} />
        <p>Description:</p>
        <input type="text" name="description" value={description} onChange={handleInputChange} />
      <button onClick={handleUpdate}>Update Film</button>
       </div>
    </div>
   )
}
export default OneFilm
