
import '../youtube.css'
import {FcSearch, FcSynchronize} from 'react-icons/fc'

function HomeSearch() {

    function SearchMusic(value){
        console.log(value)
        document.getElementById(`Load${value}`).style.display = 'flex'
        document.getElementById(`Default${value}`).style.display = 'none' 
 
        setTimeout(function(){
            document.getElementById(`Load${value}`).style.display = 'none'
            document.getElementById(`Default${value}`).style.display = 'flex'
        }, 4000);
    }

  return (
    <>
    <div className='Youtube-Search'> <input placeholder='Name Youtube Music ' /> <button onClick={()=> SearchMusic('Btn1')}><a id='LoadBtn1' className='LoadSearch'><FcSynchronize/></a> <a id='DefaultBtn1' className='DefaultSearch'><FcSearch/></a></button> </div>
      Or
    <div className='Youtube-Search'> <input placeholder='Link Youtube Music ' /> <button onClick={()=> SearchMusic('Btn2')}><a id='LoadBtn2' className='LoadSearch'><FcSynchronize/></a> <a id='DefaultBtn2' className='DefaultSearch'><FcSearch/></a></button> </div>
    </>
  );
}

export default  HomeSearch;
    
    