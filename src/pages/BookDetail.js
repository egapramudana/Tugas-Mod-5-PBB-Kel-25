import React from 'react';
import { useParams } from 'react-router-dom';
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

  //  mengambil data detail berdasarkan id dari Book.js
  const data = [
    {
        title: "Perahu Kertas", id: 1,
        rate: 4,
        genre: "Romantis, Fantasi", 
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIOa0BjeXVbOsw_Lt9yX-ogMxS5iK5Oi8NCL7m8OQWMeik5XPWWqTr5M_IrrOk",
        description: "Novel ini bercerita tentang seorang gadis bernama Laras yang memiliki kemampuan untuk melihat masa depan melalui mimpinya. Ia bertemu dengan seorang laki-laki bernama Keenan yang juga memiliki kemampuan yang sama. Mereka pun saling jatuh cinta, namun hubungan mereka harus menghadapi berbagai rintangan.",
    },
    {
        title: "Bumi Manusia", id: 2,
        rate: 4,
        genre: "Sejarah", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA40g5nM7Z3LpWgIFpZzTzf_z8SQRfdhD-2IWrNTGWURcCb31hLZYmy8bdJVZ-",
        description: "Novel ini berlatar belakang era kolonial Belanda di Indonesia. Mengisahkan Minke, seorang priyayi muda yang bersekolah di HBS (Hogere Burger School), sekolah menengah khusus Eropa. Minke mulai mempertanyakan ketidakadilan yang terjadi di Indonesia dan kemudian bergabung dengan gerakan nasionalisme.",
    },
    {
        title: "Layangan Putus", id: 3,
        rate: 3,
        genre: "Romance", 
        img: "https://www.gramedia.com/blog/content/images/2021/12/Layangan-Putuuss.png",
        description: "Novel ini bercerita tentang seorang istri bernama Kinan yang mengetahui bahwa suaminya, Aris, berselingkuh dengan Lydia, seorang wanita muda. Kinan pun harus menghadapi kenyataan pahit tersebut dan berjuang untuk mempertahankan rumah tangganya.",
    },
    {
        title: "Twilight", id: 4,
        rate: 4,
        genre: "Romance, Mystery", 
        img: "https://th.bing.com/th/id/OIP.E9TgvacMS87W-wi6oZnWZQHaJl?pid=ImgDet&rs=1",
        description: "Twilight adalah novel karangan Stephenie Meyer yang mengisahkan kisah cinta antara seorang remaja perempuan, Bella Swan, dan vampir tampan, Edward Cullen, di lingkungan fiksi Forks, Washington. Kisah ini menggabungkan unsur roman, fantasi, dan supernatural dalam sebuah narasi yang penuh dengan konflik, drama, dan ketegangan. Twilight adalah bagian pertama dari seri Twilight yang terkenal dan telah diadaptasi menjadi sebuah franchise film yang sukses.",
    },
    {
        title: "The Republic", id: 5,
        rate: 4,
        genre: "Filsafat Politik", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5K__qnZUfAv3tiy1zDYbfh725-MX-4d49apyTL0Qziy8YjhZhBhkx2mGqVLUe",
        description: "Buku ini membahas tentang idealnya sebuah negara. Plato mengemukakan konsep negara ideal yang dipimpin oleh para filsuf.",
    },
    {
        title: "Rashomon", id: 6,
        rate: 4,
        genre: "Mystery, Thriller", 
        img:"https://www.sequelbooks.com/assets/full/9784805314630.jpg?20211028145848",
        description: "Rashomon adalah sebuah novel Jepang yang ditulis oleh Ryunosuke Akutagawa pada tahun 1915. Ceritanya mengisahkan konflik moral dan sudut pandang yang berbeda dalam sebuah kasus kejahatan, di mana beberapa saksi memberikan versi yang berbeda tentang peristiwa yang sama. Novel ini mengeksplorasi sifat subjektivitas dalam narasi dan kebenaran, sambil menggambarkan kompleksitas manusia dan moralitas.",
},
];

  const detailData = data.find((item) => item.id === parseInt(id, 10));

  if (!detailData) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div>
      <div className="book-details">
        <div className="book-image">
          <img src={detailData.img} alt={detailData.title} />
          
        </div>
        <div className="book-info">
          <h1>{detailData.title}</h1>
          <p>Genre: {detailData.genre}</p>
          <p>Deskripsi: {detailData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;