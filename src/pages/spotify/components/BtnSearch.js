
import '../spotify.css'
import { FcHighPriority} from 'react-icons/fc'
import {FaPlay, FaPause, FaSearch,FaRedo, FaLongArrowAltDown} from 'react-icons/fa'
import {SiSpotify} from 'react-icons/si'
import axios from 'axios'
import {useState} from 'react'
var ValidMusuic = 'invalid'
var playMuisc = false


function HomeSearch() {
  const [input, setInput] = useState('');
  const [MusicName, setName] = useState({});
  var ValidUrl = 'invalid'


  function SearchMusic(){
    document.getElementById(`LoadSearch`).style.display = 'flex'
    document.getElementById(`DefaultSearch`).style.display = 'none'

    setTimeout(function(){
        document.getElementById(`LoadSearch`).style.display = 'none'
        document.getElementById(`DefaultSearch`).style.display = 'flex'
    }, 4000);
    SearchMusicName()
  }
  async function SearchMusicName(){

    if(input === ''){ 
      alert('Digite o nome da musica!')
      return;
    }

    if(input.includes('https://open.spotify.com/intl-pt/track/') === false){
      alert('Parece que o seu link esta incorreto! \n Tente um link com o comeco parecido com: "open.spotify.com/intl-pt/track/"  ')
      setInput('')
      return
    }


    ValidMusuic = 'invalid'
    checkUrl(input)
    if(ValidUrl === 'invalid'){
      setInput('')
      return
    }
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader-api.p.rapidapi.com/Home/Download',
      params: {
        Tracklink: input
      },
      headers: {
        'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
        'X-RapidAPI-Host': 'spotify-downloader-api.p.rapidapi.com'
      }
    };
    try {
      setInput('')
      setName({})
      const response = await axios.request(options);
      setName(response.data)
      console.log(response.data)
      ValidMusuic = 'valid'
      
    } catch (error) {
      console.error(error);
      ValidMusuic = 'NotFound'
      setInput('')
      setName({})
    }
    
  }

  function DownloadMusic(){
    document.getElementById('DownloadOn').style.display = 'flex'
    document.getElementById('DownloadDefault').style.display = 'none'
    document.getElementById('buttonDownload').style.border = 'none'
    var url = MusicName.Downloadurl
    window.location = url
    setTimeout(function(){
      document.getElementById('buttonDownload').style.borderBottom = '3px solid #000'
      document.getElementById(`DownloadOn`).style.display = 'none'
      document.getElementById(`DownloadDefault`).style.display = 'flex'
    }, 4000);

  }
  function checkUrl(string) {
   try {
     let url = new URL(string)
     ValidUrl = 'valid'

   } catch(err) {
       alert('Invalid URL!')
   }
  }
  function PreviewMusic(){
    var music = document.getElementById("MusicPreview"); 
    music.volume = 0.01;
    if(playMuisc == false){
      document.getElementById('PauseMusic').style.display = 'flex'
      document.getElementById('playMusic').style.display = 'none'
      music.play();
      playMuisc = true
    }else{
      document.getElementById('playMusic').style.display = 'flex'
      document.getElementById('PauseMusic').style.display = 'none'
      music.pause()
      playMuisc = false
    }
  
  }

  return (
    <>
    <div className='Spotify-Search'><input type="url" placeholder='Link Spotify Music' id='SpotifyNameInput' onKeyDown={event => {if(event.key === 'Enter'){SearchMusic()}}}value={input} onChange={(e) => setInput(e.target.value)} />
     <button onClick={()=> SearchMusic()}>
        <a id='LoadSearch' ><FaRedo/></a>
        <a id='DefaultSearch' ><FaSearch/></a>
      </button> 
    </div>

    {ValidMusuic === 'valid'  &&(
      <div className='ResultMusic'>
        <div>
          <audio id='MusicPreview'><source src={MusicName.PreviewUrl} /></audio>
          <p onClick={PreviewMusic} className='ResultMusic-icon'> <a id='playMusic'><FaPlay/></a> <a id='PauseMusic'><FaPause/></a> <a className='PreviewText'><strong> Preview </strong></a> </p>
          <a className='ResultMusic-details'>
            <p> <b> <strong>{MusicName.SongTitle} </strong></b></p>
            <p> <b> <strong> Artist: {MusicName.Artist[0].Name} </strong></b></p>
            <button id='buttonDownload' onClick={DownloadMusic} ><a id='DownloadDefault'><FaLongArrowAltDown/></a><a id='DownloadOn'><FaRedo/></a></button>
          </a>
        </div>
      </div>    
    )}
    {ValidMusuic == 'NotFound'  &&(
      <div className='NotFoundMusic'>
        <div>
          <p className='NotFoundMusic-icon'><FcHighPriority/></p>
          <a className='NotFoundMusic-details'>
            <p>Not Found!</p>
          </a>
        </div>
      </div>    
    )}
    </>

   
  );
}

export default  HomeSearch;
    