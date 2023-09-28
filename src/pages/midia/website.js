import "./midia.css"
import { RiGlobalLine} from 'react-icons/ri'
function website(){


    const shareMidia = () => {
        window.open('https://rafaelparoni.netlify.app/')
    }
    return(
        <div onClick={shareMidia} className="icon">
           <RiGlobalLine/>
        </div>
    )
}


export default website;