import React, { useState } from "react";

function Add(props) {
  const [name, setName] = useState("");
  const [imgurl, Setimgurl] = useState("");
  const [description, setDescription] = useState("");
  const [manchar, setmanchar] = useState("");
  const [released, setreleased] = useState("");



  return (
    <div className="Add">
      <input
        type="text"
        placeholder="Name"
        onChange={(props) => setName(props.target.value)}
      />
        <input
        type="text"
        placeholder="Image"
        onChange={(props) => Setimgurl(props.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(props) => setDescription(props.target.value)}
      />
      <input
        type="text"
        placeholder="Main Character"
        onChange={(props) => setmanchar(props.target.value)}
      />
    <input
        type="text"
        placeholder="Release date"
        onChange={(props) => setreleased(props.target.value)}
      />
   
      <button onClick={()=>props.func({name:name,description:description,imgurl:imgurl,manchar:manchar,released:released})}>Send</button>
    </div>
  );
}

export default Add;
