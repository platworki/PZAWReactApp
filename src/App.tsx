import './App.css'

interface interfPoster{
    title: string,
    year: number,
    image_src: string
}

function Poster({title, year, image_src}: interfPoster){
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
      <h3>Tytuł: {title}</h3>
      <p>Rok: {year}</p>
    </div>
    </>
  );
}

interface musicInterface{
    title: string,
    year: number,
    band_name: string,
    gatunek: string,
    image_src: string
}

function Muzyka({title, year, band_name, gatunek, image_src}: musicInterface){
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
      <h3>Tytuł: {title}</h3>
      <p>Rok: {year}</p>
      <p>Zespół: {band_name}</p>
      <p>Gatunek: {gatunek}</p>
    </div>
    </>
  );
}


function App(){
  return(
    <div className='library'>
      <Poster title='jaws' year={2010} image_src='/jaws.jpg'></Poster>
      <Poster title='silence of the lambs' year={2005} image_src='/silenceofthelambs.jpg'></Poster>
      <Poster title='matrix' year={2014} image_src='/matrix.jpg'></Poster>
      <Muzyka title='ride the lightning' year={2001} gatunek='rock' band_name='Metallica' image_src='/metlalica.jpg'></Muzyka>
      <Muzyka title='ride the lightning' year={2001} gatunek='rock' band_name='Metallica' image_src='/metlalica.jpg'></Muzyka>
      <Muzyka title='ride the lightning' year={2001} gatunek='rock' band_name='Metallica' image_src='/metlalica.jpg'></Muzyka>
      <Muzyka title='ride the lightning' year={2001} gatunek='rock' band_name='Metallica' image_src='/metlalica.jpg'></Muzyka>
    </div>
  );
}

export default App;
