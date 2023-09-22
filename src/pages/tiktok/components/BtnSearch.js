
import '../tiktok.css'
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
    <div className='tiktok-Search'> <input placeholder='Link Tiktok Video ' /> <button onClick={()=> SearchMusic('Btn2')}><a id='LoadBtn2' className='LoadSearch'><FcSynchronize/></a> <a id='DefaultBtn2' className='DefaultSearch'><FcSearch/></a></button> </div>
    </>
  );
}

export default  HomeSearch;
    
    