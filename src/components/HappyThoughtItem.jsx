import { useState, useEffect } from 'react';

export const HappyThoughtItem = () => {
  const thoughtAPI = "https://happy-thoughts-api-4ful.onrender.com/thoughts";
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(thoughtAPI)
    .then((res) => {
      return res.json();
    })
    .then(data => {
      setThoughts(data)
      console.log(thoughts)
    })
  }, [])

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const created = new Date(timestamp);
    const difference = now - created;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "Just now";
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;

    return created.toLocaleDateString();
  }


  return <div>
    {thoughts.map((thought) => {
      return (
          <div key={thought._id} className="happy-thought-item">
            <p>{thought.message}</p>
            <span>
              <span>
                <button className="btn-like">❤️</button>
                <p className="likes">x {thought.hearts}</p>
              </span>
              <p className="time-submitted">{getTimeAgo(thought.createdAt)}</p>
            </span>
            </div>
      )
    })}
  </div>
}