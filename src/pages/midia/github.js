import "./midia.css"
import {RiGithubLine} from 'react-icons/ri'
function github(){

    const shareMidia = () => {
        window.open('https://github.com/RafaelParoni')
    }

    return(
        <div onClick={shareMidia} className="icon">
            <RiGithubLine/>
        </div>
    )
}

export default github;