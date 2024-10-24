import { useState } from "react";
import "./App.css";
import "./index.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);
  const featuredPuppy = puppies.find((puppy) => puppy.id === featPupId);
  return (
    <>
      <div className="app-container">
        <h1 className="app-title"> 🐶 Puppy Pals</h1>
        <div className="puppy-list">
        {puppies.map((puppy) => {
          return (
            <p
              className="puppy-item"
              onClick={() => {
                console.log("puppy id:", puppy.id);
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
        </div>
        {featPupId && (
          <div className="featured-puppy">
            <h2>{featuredPuppy.name}</h2>
            <ul>
              <li>Age: {featuredPuppy.age}</li>
              <li>Email: {featuredPuppy.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
