import "./midia.css"
import Github from "./github"
import Website from "./website"
import Instagram from "./instagram"
import {HiArrowRight} from 'react-icons/hi'

function midia(){

    return (
        <div className="midias">
            <HiArrowRight/>
            <Github/>
            <Instagram/>
            <Website/>
        </div>
    )

}

export default midia;