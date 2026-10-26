import './App.css'
import React from "react";

interface movieInterface{
    title: string,
    year: number,
    rating: number,
    image_src: string
}

function Movies(props: movieInterface){
  let title = props.title;
  let year = props.year;
  let image_src = props.image_src;
//   let rating = props.rating;

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
        height:"100%",
        minWidth:"100px",
        maxWidth:"300px"
      }}/>
      <h3>{title}</h3>
      <p>Rok: {year}</p>
    </div>
    </>
  );
}

interface bookInterface{
    title: string,
    year: number,
    page_amount: number,
    gatunek: string,
    image_src: string
}

function Books(props: bookInterface){
  let title = props.title;
  let year = props.year;
  let image_src = props.image_src;
  let gatunek = props.gatunek;
  let page_amount = props.page_amount;
//   let rating = props.rating;

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
        height:"100%",
        minWidth:"100px",
        maxWidth:"300px"
      }}/>
      <h3>{title}</h3>
      <p>Rok: {year}</p>
      <p>Liczba stron: {page_amount}</p>
      <p>Gatunek: {gatunek}</p>
    </div>
    </>
  );
}

interface songInterface{
    title: string,
    year: number,
    time: string,
    image_src: string
}

function Songs(props: songInterface){
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

interface albumInterface{
    title: string,
    year: number,
    band_name: string,
    gatunek: string,
    songs: React.ReactElement[],
    image_src: string
}

function Albums(props: albumInterface){
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
        height:"100%",
        minWidth:"100px",
        maxWidth:"300px",
        alignSelf:"center"
      }}/>
      <h3>{title}</h3>
      <p>Rok: {year}</p>
      <p>Zespół: {band_name}</p>
      <p style={{paddingBottom:"10px"}}>Gatunek: {gatunek}</p>
      <table>
        <tbody>
          {songs.map((songElement, index) => (
            <tr key={index}>
              <td>{songElement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}


const albums: React.ReactElement[] = [
   <Albums 
        title='ride the lightning' 
        year={2001} 
        gatunek='rock' 
        band_name='Metallica' 
        image_src='/metlalica.jpg'
        songs={[
                <Songs title='ride the lightning' 
                year={2001} 
                time='12:23'
                image_src='/jaws.jpg'/>,
            <Songs title='ride the lightning' 
                year={2001} 
                time='12:23'
                image_src='/metlalica.jpg'/>]
              }
    />,
   <Albums 
        title='ride the lightning' 
        year={2001} 
        gatunek='rock' 
        band_name='Metallica' 
        image_src='/metlalica.jpg'
        songs={[
                <Songs title='ride the lightning' 
                year={2001} 
                time='12:23'
                image_src='/metlalica.jpg'/>,
            <Songs title='ride the lightning' 
                year={2001} 
                time='12:23'
                image_src='/metlalica.jpg'/>]
              }
    />
];


const movies: React.ReactElement[] = [
    <Movies title='jaws' year={2010} rating={3} image_src='/jaws.jpg'></Movies>,
    <Movies title='silence of the lambs' year={2005} rating={6} image_src='/silenceofthelambs.jpg'></Movies>,
    <Movies title='matrix' year={2014} rating={2} image_src='/matrix.jpg'></Movies>
];

const books: React.ReactElement[] = [
    <Books title='jaws' year={2010} gatunek='rock' page_amount={100} image_src='/jaws.jpg'></Books>,
    <Books title='silence of the lambs' gatunek='rock' year={2005} page_amount={100} image_src='/silenceofthelambs.jpg'></Books>,
    <Books title='matrix' year={2014} gatunek='rock'  page_amount={100} image_src='/matrix.jpg'></Books>
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
    </div>
  );
}

export default App;
