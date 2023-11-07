import React from 'react';
import { useParams } from 'react-router-dom';
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

  // Anda dapat mengambil data detail berdasarkan id dari Movie.js
  const data = [
    {
        title: "John Wick 4",
        id: 1,
        rating: 5,
        genre: "action, drama",
        img:"https://lzd-img-global.slatic.net/g/ff/kf/S159e06d3875440589806c0f11ac2be3cT.jpg_720x720q80.jpg",
        description: "John Wick (Keanu Reeves) menemukan jalan untuk mengalahkan The High Table. Tapi sebelum dia bisa mendapatkan kebebasannya, Wick harus berhadapan dengan musuh baru dengan aliansi yang kuat di seluruh dunia! Memaksanya mengubah teman lama menjadi musuh.",
    },
    {
        title: "Mr Bean The Movie",
        id: 2,
        rating: 4,
        genre: "comedy, crime, drama",
        img:"https://upload.wikimedia.org/wikipedia/en/3/37/Bean_movie_poster.jpg",
        description: "Bean adalah sebuah film tahun 1997 yang berdasarkan serial televisi Mr. Bean. Dibintangi Rowan Atkinson dan Peter MacNicol. Film ini disutradarai oleh Mel Smith. Film ini banyak menggunakan ide dan sandiwara dari serial televisi yang asli.",
    },
    {
        title: "No Way Out",
        id: 3,
        rating: 4,
        genre: "crime, romance",
        img:"https://m.media-amazon.com/images/M/MV5BMTQ2OTkxNzIzN15BMl5BanBnXkFtZTcwNTgwOTc2NA@@._V1_.jpg",
        description: "No Way Out adalah sebuah film cerita seru politik Amerika 1987. Film tersebut dibintangi oleh Kevin Costner, Gene Hackman, dan Sean Young. Will Patton, Howard Duff, George Dzundza, Jason Bernard, Fred Thompson, dan Iman tampil dalam peran-peran pendukung.",
    },
    {
        title: "Raging Fire",
        id: 4,
        rating: 4,
        genre: "drama, crime",
        img: "https://resizing.flixster.com/-4X5YkKInP3RBB4qhuQ-QOOFudo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA1NDY3MTI1LTFkYzQtNDQ5My1hNGE2LTk3ZWVjMzdmNDE3Zi5qcGc=",
        description: "Cheung Sung-bong (Donnie Yen) adalah seorang perwira polisi yang bekerja di garis depan selama bertahun-tahun. Namun, masa lalu menghantui dirinya ketika ia harus menghadapi sekelompok penjahat yang dipimpin oleh mantan anak didiknya, Yau Kong-ngo (Nicholas Tse), yang masih menyimpan dendam terhadap Bong yang memasukkan dirinya ke penjara",
    },
    {
        title: "Inception",
        id: 5,
        rating: 4,
        genre: "sci-fi, action, thriller",
        img: "https://wallpapercave.com/wp/fWnWpHj.jpg",
        description: "Inception adalah sebuah film aksi ilmiah yang disutradarai oleh Christopher Nolan. Film ini mengisahkan tentang seorang pencuri profesional yang merancang rencana untuk mencuri informasi dari alam bawah sadar seseorang melalui mimpi. Dengan konsep dunia mimpi yang kompleks, film ini menggabungkan elemen cerita yang mendalam dengan aksi spektakuler dan efek visual yang mengagumkan.",
    },
  ];

  const detailData = data.find((item) => item.id === parseInt(id, 10));

  if (!detailData) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div>
      <div className="movie-details">
        <div className="movie-image">
          <img src={detailData.img} alt={detailData.title} />
          
        </div>
        <div className="movie-info">
          <h1>{detailData.title}</h1>
          <p>Genre: {detailData.genre}</p>
          <p>Deskripsi: {detailData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;