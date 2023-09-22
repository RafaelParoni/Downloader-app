import '../Home.css'
import {SiYoutube} from 'react-icons/si'

function SpotifyBtn(){

    function href(){
        window.location = '/youtube-Downloader'
    }
    return(
        <>
        <p  className='BtnTypsDisable youtube'  onClick={href} > <SiYoutube/> Youtube</p>
        </>
    )
}

export default SpotifyBtn;