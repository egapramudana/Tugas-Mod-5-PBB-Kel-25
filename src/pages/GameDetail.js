import React from 'react';
import { useParams } from 'react-router-dom';
import "./GameDetail.css";

const GameDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

  //  mengambil data detail berdasarkan id dari Game.js
  const data = [
    {
        title: "The Legend of Zelda", id: 1,
        rate: 4,
        genre: "Souls-like, RPG, Open World",
        img:"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/elden-ring-cover.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
        description: "Game ini berlatar di dunia terbuka yang luas dan penuh dengan rahasia, di mana pemain akan menjelajahi berbagai lokasi, menyelesaikan berbagai quest, dan melawan berbagai musuh..",
 
    },
    {
        title: "Minecraft", id: 2,
        rate: 4,
        genre: "Pixel", 
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38eb60f7-015f-4e9a-a98c-0f81cb883d0f/dg3rj58-5cf5800a-6f42-42a4-9a1d-cc5d619c5d81.jpg/v1/fit/w_459,h_640,q_70,strp/minecraft_game_cover_by_joearmy3_dg3rj58-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvMzhlYjYwZjctMDE1Zi00ZTlhLWE5OGMtMGY4MWNiODgzZDBmXC9kZzNyajU4LTVjZjU4MDBhLTZmNDItNDJhNC05YTFkLWNjNWQ2MTljNWQ4MS5qcGciLCJ3aWR0aCI6Ijw9NDU5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.jNVaJaIJT99A9ffCSYnVKUhSSBcPQ5y9rXzQnp_OYZk",
        description: "Game ini memungkinkan pemain untuk membangun apa pun yang mereka inginkan di dunia kotak-kotak yang luas.",
    },{
        title: "Dota 2", id: 3,
        rate: 3,
        genre: "Moba", 
        img: "https://pbs.twimg.com/profile_images/876607433640103938/sMCPmD8P_400x400.jpg",
        description: "Game ini adalah MOBA di mana pemain mengontrol karakter yang memiliki kemampuan unik. Pemain harus bekerja sama dengan tim mereka untuk mengalahkan tim lawan.",
    },
    {
        title: "Among Us", id: 4,
        rate: 4,
        genre: "Action", 
        img: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg",
        description: "Game ini adalah permainan sosial deduktif di mana pemain dibagi menjadi dua tim, crewmates dan imposters. Crewmates harus menyelesaikan tugas-tugas untuk memenangkan permainan, sementara imposters harus membunuh crewmates untuk memenangkan permainan.",
    },
    {
        title: "League", id: 5,
        rate: 4,
        genre: "MOBA", 
        img: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab",
        description: "League of Legends adalah permainan video daring berjenis Multiplayer Online Battle Arena (MOBA) yang dikembangkan oleh Riot Games. Pemain bergabung dalam tim untuk bertarung dalam pertempuran intens di arena 5 lawan 5, dengan tujuan menghancurkan basis musuh. Setiap pemain memilih karakter unik dengan kemampuan khusus untuk berkontribusi dalam pertandingan. Game ini memadukan strategi, keterampilan individu, dan kerja sama tim untuk mencapai kemenangan.",
    },
    {
        title: "PUBG", id: 6,
        rate: 4,
        genre: "Shooter, Battle Royale", 
        img: "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",
        description: "PUBG (PlayerUnknown's Battlegrounds) adalah game battle royale yang penuh aksi di mana pemain terjun dari pesawat dan berusaha menjadi yang terakhir bertahan hidup di pulau dengan berbagai senjata dan peralatan.",
    },

];

  const detailData = data.find((item) => item.id === parseInt(id, 10));

  if (!detailData) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div>
      <div className="game-details">
        <div className="game-image">
          <img src={detailData.img} alt={detailData.title} />
          
        </div>
        <div className="game-info">
          <h1>{detailData.title}</h1>
          <p>Genre: {detailData.genre}</p>
          <p>Deskripsi: {detailData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default GameDetail;