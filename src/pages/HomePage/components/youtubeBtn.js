import '../Home.css'
import {SiYoutube} from 'react-icons/si'

function SpotifyBtn(){

    function href(){
        window.location = '/Dlyoutube'
    }
    return(
        <>
        <p  className='BtnTyps youtube' onClick={href}  > <SiYoutube/> <a>Youtube</a></p>
        </>
    )
}

export default SpotifyBtn;