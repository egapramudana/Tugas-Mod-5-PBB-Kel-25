import React from "react";
import "./CardProfile.css";

export default function CardProfile(props) {
  const { name, nim, profilePicture } = props;

  return (
    <div className="card-profile">
      <img src={profilePicture} alt={name} className="card-profile-picture" />
      <div className="card-profile-content">
        <h3>{name}</h3>
        <p>{nim}</p>
      </div>
    </div>
  );
}