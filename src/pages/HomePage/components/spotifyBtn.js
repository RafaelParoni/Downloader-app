import '../Home.css'
import {SiSpotify} from 'react-icons/si'
function SpotifyBtn(){
    function href(){
        window.location = '/spotify-Downloader'
    }
    return(
        <>
        <p className='BtnTyps spotify'  onClick={href}> <SiSpotify/> Spotify</p>
        </>
    )
}

export default SpotifyBtn;