import '../Home.css'
import {SiSpotify} from 'react-icons/si'
function SpotifyBtn(){
    function href(){
        window.location = '/Dlspotify'
    }
    return(
        <>
        <p className='BtnTyps spotify'  onClick={href}> <SiSpotify/> <a>Spotify</a></p>
        </>
    )
}

export default SpotifyBtn;