import { useState } from 'react';
import { thoughtsApi } from "../App"

export const HappyThoughtInput = ({ onSend }) => {
  const [newHappyThought, setNewHappyThought] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(thoughtsApi, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: newHappyThought})
    }).then((response) => {
      console.log("response: ", response)
      onSend();
    }).catch((error) => {
      console.log("error: ", error)
    })
    setNewHappyThought("");
  }

  return <div className="happy-thought container">
    <form onSubmit={handleSubmit}>
      <label>What makes you happy right now?
        <textarea 
          className="happy-thought-input" 
          name="text" 
          value={newHappyThought}
          onChange={(e) => setNewHappyThought(e.target.value)} 
          required
          minLength="5"
          maxLength="140"
        ></textarea>
      </label>
      <button>❤️ Send Happy Thought ❤️</button>
    </form>
  </div>
}