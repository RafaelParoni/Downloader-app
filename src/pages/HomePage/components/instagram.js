import '../Home.css'
import {SiInstagram} from 'react-icons/si'
function InstaBtn(){
    function href(){
        window.location = '/Dlinstagram'
    }
    return(
        <>
        <p className='BtnTyps insta'  onClick={href}> <SiInstagram/> <a>Instagram</a></p>
        </>
    )
}

export default InstaBtn;