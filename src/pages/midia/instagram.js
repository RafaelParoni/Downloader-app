import "./midia.css"
import {RiInstagramLine} from 'react-icons/ri'
function instagram(){

    const shareMidia = () => {
        window.open('https://www.instagram.com/rafaelparroni/')
    }

    return(
        <div  onClick={shareMidia} className="icon">
            <RiInstagramLine/>
        </div>
    )
}

export default instagram;