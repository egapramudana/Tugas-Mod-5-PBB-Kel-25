import React from "react";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
  const members = [
    {
      name: "Ega Pramudana Ali",
      nim: "21120121130072",
      genrefav: "Mystery",
      profilePicture: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png",
    },
    {
      name: "Hiazintus Bagas Reynara",
      nim: "21120121130060",
      genrefav: "Action",
      profilePicture: "https://cdn1-production-images-kly.akamaized.net/GThpK29xMOyzhJMHajflep4CF9E=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1439641/original/042027300_1482131661-reddit.jpg",
    },
    {
      name: "Maritza Septiarini",
      nim: "21120121140122",
      genrefav: "Action",
      profilePicture: "https://static.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png",
    },
    {
      name: "Hilmy Dhiya Ulhaq",
      nim: "21120121120008",
      genrefav: "Horror",
      profilePicture: "https://upload.wikimedia.org/wikipedia/id/thumb/f/fc/Kakashi_Hatake.jpg/280px-Kakashi_Hatake.jpg",
    },
  ];

  return (
    <div>
      <h1 className="profile-title">Profile Anggota :</h1>
      <div className="profile-container">
        {members.map((member, index) => (
          <CardProfile
            key={index}
            name={member.name}
            nim={member.nim}
            genrefav={member.genrefav}
            profilePicture={member.profilePicture}
          />
        ))}
      </div>
    </div>
  );
}