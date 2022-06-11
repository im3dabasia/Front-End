import React from 'react';

function nameSplitter(person) {
  return (
  <article 
      key={person.id} 
      className ="person">

    <img src={person.image} alt={person.name}/>

    <div>
      <h4>{person.name}</h4>
      <p>{person.msg}</p>
    </div>

  </article>
  )
} 

function List({people}){
  return (
    <>
    {people.map(nameSplitter)}
    </>
  )

}

export default List;
