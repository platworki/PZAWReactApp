import './App.css'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface MovieInterface{
    title: string,
    year: number,
    rating: number,
    image_src: string
}

function Movies(props: MovieInterface){
  return (
    <div className="card h-100 shadow-sm">
      <img src={props.image_src} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text mb-1">Rok: {props.year}</p>
        <p className="card-text mb-1">Rating: {props.rating}/10</p>
        {props.rating >= 8 && (
          <span className="badge bg-success mt-2">Polecany!</span>
        )}
      </div>
    </div>
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
  return (
    <div className="card h-100 shadow-sm">
      <img src={props.image_src} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text mb-1">Rok: {props.year}</p>
        <p className="card-text mb-1">Liczba stron: {props.page_amount}</p>
        <p className="card-text mb-1">Gatunek: {props.gatunek}</p>
        {props.year < 2000 && (
          <span className="badge bg-secondary mt-2">Klasyka!</span>
        )}
      </div>
    </div>
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
  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <span>{props.title}</span>
      <span className="text-end text-muted ms-2">{props.time}</span>
    </div>
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
  return (
    <div className="card h-100 shadow-sm">
      <img src={props.image_src} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text mb-1">Rok: {props.year}</p>
        <p className="card-text mb-1">Zespół: {props.band_name}</p>
        <p className="card-text mb-3">Gatunek: {props.gatunek}</p>
        
        {props.songs.length > 0 ? (
          <table className="table table-striped table-hover mb-0">
            <tbody>
              {props.songs.map((songElement, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{songElement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="alert alert-warning mb-0" role="alert">
            Brak utworów
          </div>
        )}
      </div>
    </div>
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
    <div className="mb-4">
      <h2 onClick={handleClick} style={{ cursor: "pointer" }} className="border-bottom pb-2">
        {title} {open ? "▾" : "▸"}
      </h2>

      {open && (
        <div className="row g-3">
            {list.map((listItem, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                {listItem}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

function App(){
  return (
    <div className="container py-4">
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
