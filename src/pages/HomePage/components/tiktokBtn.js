import '../Home.css'
import {SiTiktok} from 'react-icons/si'

function SpotifyBtn(){
    function href(){
        window.location = '/tiktok-Downloader'
    }
    return(
        <>
        <p className='BtnTypsDisable'   onClick={href}> <SiTiktok/> Tiktok</p>
        </>
    )
}

export default SpotifyBtn;