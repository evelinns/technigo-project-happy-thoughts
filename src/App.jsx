import { useState, useEffect } from 'react';
import { HappyThoughtInput } from "./components/happyThoughtInput"
import { HappyThoughtItem } from "./components/HappyThoughtItem"

export const thoughtsApi = "https://happy-thoughts-api-4ful.onrender.com/thoughts"

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  
  const fetchThoughts = () => {
      fetch(thoughtsApi)
      .then((res) => {
        return res.json();
      })
      .then(data => {
        setThoughts(data)
      })
  }

  useEffect(() => {
    fetchThoughts();  
  }, [])


  return <div className="app-container">
    <HappyThoughtInput onSend={fetchThoughts} />
    <HappyThoughtItem thoughts={thoughts} onLike={fetchThoughts} />
    </div>
}
