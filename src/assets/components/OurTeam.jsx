import React from "react";
import "./OurTeam.css";

const teamMembers = [
    {
        name: "Ds Dharmendra Singh",
        role: "Techno functional",
        // image: "https://via.placeholder.com/150",
        image: "src/assets/images/user2.jpg",
    },
    {
        name: "Bhupender",
        role: "Technical Consultant",
        image: "src/assets/images/user1.jpg",
    },
    {
        name: "Harsh",
        role: "Functional Consultant",
        image: "src/assets/images/user1.jpg",
    },
    {
        name: "Aaksh",
        role: "Functional Consultant",
        image: "src/assets/images/user1.jpg",
    },

    {
        name: "Pankaj Nayak",
        role: "Web Developer",
        image: "src/assets/images/user1.jpg",  
    },
];

export default function OurTeam() {
    return (
        <div className="team-container">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
