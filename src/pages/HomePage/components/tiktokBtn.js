import '../Home.css'
import {SiTiktok} from 'react-icons/si'

function SpotifyBtn(){
    function href(){
        window.location = '/Dltiktok'
    }
    return(
        <>
        <p className='BtnTyps tiktok' onClick={href}  > <SiTiktok/> <a>Tiktok</a></p>
        </>
    )
}

export default SpotifyBtn;