import React from 'react';
import OneFilm from './OneFilm.jsx';

function ListFilm(props) {
  return (
    <div className="ListFilm">
      {props.data.map((element) => (
        <OneFilm
          key={element.id} 
          film={element}
          deleteFilm={props.deleteFilm} 
          updateFilm={props.updateFilm}
        />
        

      ))}
    </div>
  );
}

export default ListFilm
