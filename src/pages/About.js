import { Navigate } from "react-router-dom";

export default function About({ user }) {
    return (
      <div>
        { user ?
          <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quisquam. Tempora quod dolores a, at quis accusantium praesentium vitae beatae aliquam harum autem fugit! Unde repellendus est pariatur quia odit!</p>
          </div>
        : <Navigate to='/login'/> }
        
      </div>
    )
  }
  