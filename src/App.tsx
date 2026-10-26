import './App.css'
import React from "react";

interface MovieInterface{
    title: string,
    year: number,
    rating: number,
    image_src: string
}

function Movies(props: MovieInterface){
  let title = props.title;
  let year = props.year;
  let image_src = props.image_src;
  let rating = props.rating;

  return(
    <>
    <div style={{
      display:"flex",
      flexDirection:"column",
      border:"1px solid black",
      padding:"10px"
    }}>
      <img src={image_src} style={{
        width:"100%",
        minWidth:"100px",
        maxWidth:"300px"
      }}/>
      <h3>{title}</h3>
      <p>Rok: {year}</p>
      <p>Rating: {rating}/10</p>
      {(rating >= 8) && (
        <label style={{paddingTop: '10px'}}><em>Polecany!</em></label>
      )}
    </div>
    </>
  );
}

const moviesData: MovieInterface[] = [
    { title: 'silence of the lambs', year: 2005, rating: 6, image_src: '/silenceofthelambs.jpg' },
    { title: 'jaws', year: 2010, rating: 3, image_src: '/jaws.jpg' },
    { title: 'matrix', year: 2014, rating: 2, image_src: '/matrix.jpg' },
    { title: 'metallica', year: 2018, rating: 9, image_src: '/metlalica.jpg' }
];

moviesData.sort((a,b) => a.title.localeCompare(b.title));

const movies = moviesData.map((movie, index) => (
    <Movies 
        key={index}
        title={movie.title} 
        year={movie.year} 
        rating={movie.rating} 
        image_src={movie.image_src} 
    />
));

interface BookInterface{
    title: string,
    year: number,
    page_amount: number,
    gatunek: string,
    image_src: string
}

function Books(props: BookInterface){
  let title = props.title;
  let year = props.year;
  let image_src = props.image_src;
  let gatunek = props.gatunek;
  let page_amount = props.page_amount;

  return(
    <>
    <div style={{
      display:"flex",
      flexDirection:"column",
      border:"1px solid black",
      padding:"10px"
    }}>
      <img src={image_src} style={{
        width:"100%",
        minWidth:"100px",
        maxWidth:"300px"
      }}/>
      <h3>{title}</h3>
      <p>Rok: {year}</p>
      <p>Liczba stron: {page_amount}</p>
      <p>Gatunek: {gatunek}</p>
      {(year < 2000) && (
        <label style={{paddingTop: '10px'}}><em>Klasyka!</em></label>
      )}
    </div>
    </>
  );
}

const booksData: BookInterface[] = [
    { title: 'jaws', year: 2010, gatunek: 'rock', page_amount: 100, image_src: '/jaws.jpg'},
    { title: 'silence of the lambs', year: 1987, gatunek: 'rock', page_amount: 70, image_src: '/silenceofthelambs.jpg'},
    { title: 'matrix', year: 1999, gatunek: 'rock', page_amount: 120, image_src: '/matrix.jpg'}
];

booksData.sort((a,b) => a.title.localeCompare(b.title));

const books = booksData.map((book, index) => (
    <Books 
        key={index}
        title={book.title} 
        year={book.year} 
        gatunek={book.gatunek}
        page_amount={book.page_amount}
        image_src={book.image_src} 
    />
));


interface SongInterface{
    title: string,
    year: number,
    time: string,
    image_src: string
}

function Songs(props: SongInterface){
  let title = props.title;
  let year = props.year;
  let time = props.time;
  let image_src = props.image_src;
  
  return(
    <>
    <div style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      border:"1px solid black",
      gap:"10px",
      paddingLeft:"5px",
      paddingRight:"5px"
    }}>
      <img src={image_src} style={{
        maxHeight:"60px"
      }}/>
      <h4>{title}</h4>
      <p>Rok: {year}</p>
      <p>Czas: {time}</p>
    </div>
    </>
  );
}

const songsData1: SongInterface[] = [
    { title: 'jaws', year: 2001, time: '12:23', image_src: '/jaws.jpg'},
    { title: 'ride the lightning', year: 2005, time: '09:01', image_src: '/metlalica.jpg'},
    { title: 'matrix', year: 2001, time: '03:54', image_src: '/matrix.jpg'}
];
const songsData2: SongInterface[] = [
    { title: 'jaws', year: 2001, time: '12:23', image_src: '/jaws.jpg'},
    { title: 'ride the lightning', year: 2005, time: '09:01', image_src: '/metlalica.jpg'},
    { title: 'matrix', year: 2001, time: '03:54', image_src: '/matrix.jpg'},
    { title: 'ride the lightning', year: 2005, time: '09:01', image_src: '/metlalica.jpg'},
    { title: 'jaws', year: 2001, time: '12:23', image_src: '/jaws.jpg'},
    { title: 'jaws', year: 2001, time: '12:23', image_src: '/jaws.jpg'}
];

interface AlbumInterface{
    title: string,
    year: number,
    band_name: string,
    gatunek: string,
    songs: React.ReactElement[],
    image_src: string
}

function Albums(props: AlbumInterface){
  let title = props.title;
  let year = props.year;
  let image_src = props.image_src;
  let band_name = props.band_name;
  let songs = props.songs;
  let gatunek = props.gatunek;

  return(
    <>
    <div style={{
      display:"flex",
      flexDirection:"column",
      border:"1px solid black",
      padding:"10px"
    }}>
      <img src={image_src} style={{
        width:"100%",
        minWidth:"100px",
        maxWidth:"300px",
        alignSelf:"center"
      }}/>
      <h3>{title}</h3>
      <p>Rok: {year}</p>
      <p>Zespół: {band_name}</p>
      <p style={{paddingBottom:"10px"}}>Gatunek: {gatunek}</p>
      {songs.length > 0 ? 
        (
          <table>
            <tbody>
              {songs.map((songElement, index) => (
                <tr key={index}>
                <td>{index+1}.</td>
                <td>{songElement}</td>
                </tr>
              ))}
           </tbody>
        </table>
        ) 
      : (
        <em>Brak utworów</em>
      )}
    </div>
    </>
  );
}

const albumsData: AlbumInterface[] = [
    { 
        title: 'ride the lightning',
        year: 2010, 
        gatunek: 'rock', 
        band_name: 'Metallica', 
        image_src: '/silenceofthelambs.jpg', 
        songs: songsData1.map((song, index) => (
            <Songs 
                key={index}
                title={song.title} 
                year={song.year} 
                time={song.time} 
                image_src={song.image_src}
            />
        ))
    },
    { 
        title: 'master of puppets', 
        year: 1986, 
        gatunek: 'metal', 
        band_name: 'Metallica', 
        image_src: '/metlalica.jpg', 
        songs: songsData2.map((song, index) => (
            <Songs 
                key={index}
                title={song.title} 
                year={song.year} 
                time={song.time} 
                image_src={song.image_src}
            />
        ))
    },
    { 
        title: 'kickstart the heart', 
        year: 1988, 
        gatunek: 'metal', 
        band_name: 'Metallica', 
        image_src: '/jaws.jpg', 
        songs: []
    }
];

albumsData.sort((a, b) => a.title.localeCompare(b.title));

const albums = albumsData.map((album, index) => (
    <Albums 
        key={index}
        title={album.title}
        year={album.year}
        band_name={album.band_name}
        gatunek={album.gatunek}
        image_src={album.image_src}
        songs={album.songs}
    />
));

const moviesAfter2010Data = moviesData.filter(movie => movie.year > 2010);
moviesAfter2010Data.sort((a, b) => a.title.localeCompare(b.title));

const moviesAfter2010 = moviesAfter2010Data.map((movie, index) => (
    <Movies 
        key={index}
        title={movie.title} 
        year={movie.year} 
        rating={movie.rating} 
        image_src={movie.image_src} 
    />
));

const sortedBooksData = [...booksData].sort((a, b) => b.year - a.year);

const sortedBooks = sortedBooksData.map((book, index) => (
    <Books 
        key={index}
        title={book.title} 
        year={book.year} 
        gatunek={book.gatunek} 
        page_amount={book.page_amount} 
        image_src={book.image_src} 
    />
));

const maxAlbumData = albumsData.reduce((prev, current) => 
    prev.songs.length > current.songs.length ? prev : current
);

const maxAlbum: React.ReactElement[] = [
    <Albums 
        key={0}
        title={maxAlbumData.title}
        year={maxAlbumData.year}
        band_name={maxAlbumData.band_name}
        gatunek={maxAlbumData.gatunek}
        image_src={maxAlbumData.image_src}
        songs={maxAlbumData.songs}
    />
];

interface listInterface{
    title: string,
    list: Array<React.ReactElement>
}

function ListComponent({title, list}: listInterface) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
    <div className='library'>
      <h2 onClick={handleClick} style={{ cursor: "pointer" }}>
          {title} {open ? "▾" : "▸"}
      </h2>

      {open && (
        <div className="cards-container">
            {list.map(listItem => listItem)}
        </div>
      )
      }
    </div>
    </>
  );
}

function App(){
  return (
    <div className='main'>
      <ListComponent title={"Filmy"} list={movies}/>
      <ListComponent title={"Albumy"} list={albums}/>
      <ListComponent title={"Książki"} list={books}/>
      <ListComponent title={"Filmy po 2010"} list={moviesAfter2010}/>
      <ListComponent title={"Książki posortowane"} list={sortedBooks}/>
      <ListComponent title={"Największy album"} list={maxAlbum}/>
    </div>
  );
}

export default App;
