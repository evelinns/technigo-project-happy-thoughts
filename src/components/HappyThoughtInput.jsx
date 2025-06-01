export const HappyThoughtInput = () => {
  return <div className="happy-thought container">
    {/* <p>What makes you happy right now?</p> */}
    <form action="">
      <label>What makes you happy right now?</label>
      <input className="happy-thought-input" type="text" required />
      <button>❤️ Send Happy Thought ❤️</button>
    </form>
  </div>
}