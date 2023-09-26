
import '../instagram.css'
import {SiInstagram } from 'react-icons/si'

function SubTitleInsta() {

  function red(){
    window.open('https://www.instagram.com/')
  }


  return (
    <>
        <h3 className='SubTitleInsta'>Copie o link da musica pelo <a onClick={()=> red()}> <SiInstagram/> instagram.com</a></h3>
    </>
  );
}

export default  SubTitleInsta;
    
    