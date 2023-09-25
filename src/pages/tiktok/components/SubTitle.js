
import '../tiktok.css'
import {SiTiktok } from 'react-icons/si'

function SubTitleTiktok() {

  function red(){
    window.open('https://www.tiktok.com/pt-BR')
  }


  return (
    <>
        <h3 className='SubTitleTiktok'>Copie o link do video pelo <a onClick={red}> <SiTiktok/> Titok </a></h3>
    </>
  );
}

export default  SubTitleTiktok;
    
    