import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);
  const featuredPuppy = puppies.find((puppy) => puppy.id === featPupId);
  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return (
            <p
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
        {featPupId && (
          <div>
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
