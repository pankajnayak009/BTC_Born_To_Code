import React from "react";
import "./Clients.css";

// Sample Client Data (You can replace these with actual client logos)
const clients = [
  {   
    name: "Microsoft",
    logo: "src/assets/images/microsoft_732221.png",
  },
  {
    name: "Google",
    logo: "src/assets/images/google_2504914.png",
  },
  {
    name: "Amazon",
    logo: "src/assets/images/social.png",  
  },
  {
    name: "Apple",
    logo: "src/assets/images/apple.png", 
  },
];

export default function Clients() {
  return (
    <div className="clients-container">
      <h2>Our Clients</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div key={index} className="client-card">
            <img src={client.logo} alt={client.name}/>Comprehensive e-commerce solutions powered by Dynamics 365.
            <h3>{client.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
