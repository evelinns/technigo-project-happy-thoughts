import { useState } from 'react';

export const HappyThoughtInput = () => {
  const thoughtApi = "https://happy-thoughts-api-4ful.onrender.com/thoughts";
  const [newHappyThought, setNewHappyThought] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(thoughtApi, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: newHappyThought})
    }).then((response) => {
      console.log("response: ", response)
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