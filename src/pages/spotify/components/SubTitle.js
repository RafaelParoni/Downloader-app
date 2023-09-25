
import '../spotify.css'
import {SiSpotify } from 'react-icons/si'

function SubTitleSpotify() {

  function href(){
    window.open('https://open.spotify.com/intl-pt')
  }


  return (
    <>
       <h3 className='SubTitleSpotify'>Copie o link da musica pelo <a onClick={href}> <SiSpotify/> Spotify</a></h3>
    </>
  );
}

export default  SubTitleSpotify;
    
    