
import '../youtube.css'
import {SiYoutube } from 'react-icons/si'

function SubTitleYoutube() {

  function red(){
    window.open('https://www.youtube.com/')
  }

  return (
    <>
        <h3 className='SubTitleYoutube'>Copie o link da musica pelo <a onClick={()=> red()}> <SiYoutube/> Youtube.com</a></h3>
    </>
  );
}

export default  SubTitleYoutube;
    
    