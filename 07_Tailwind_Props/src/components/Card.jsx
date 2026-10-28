import React from 'react'

function Card({username,btnText="visit me"}) {
    console.log(username);
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
        alt="Profile"
      />

      <div className="card-content">
        <h3>Delba</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Excepturi, debitis?
        </p>

        <button>{btnText || "visit me"}</button>
      </div>
    </div>
  )
}

export default Card