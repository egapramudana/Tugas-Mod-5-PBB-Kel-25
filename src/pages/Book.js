import React from 'react';
import { CardBig } from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import "./Book.css";

const Book = () => {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
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
        description: "Description of Movie 1",
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
        description: "Description of Movie 1",
},
];

  return (
    <>
      <p id="books">Top Books</p>
      <div className="containerTop">
        {data.map((item, index) => (
        <Link to={`/book/detail/${item.id}`} key={item.id}>
          <CardBig key={item.id} title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
        </Link>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="books">All Books</p>
          {data.map((item, index) => (
            <Link to={`/book/detail/${item.id}`} key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Book;