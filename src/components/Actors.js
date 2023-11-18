import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map((actor, actorIndex) => (
      <div key={actorIndex}>
        <p> {actor.name}</p>
        <ul>
          {actor.movies.map((movie, movieIndex) => (
            
              <li key={movieIndex}>
                {movie}
              </li>
           
          ))}
          </ul>
      </div>
    ))}
  </div>
  )
}

export default Actors;
