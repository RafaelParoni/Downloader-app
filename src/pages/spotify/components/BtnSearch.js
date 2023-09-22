
import '../spotify.css'
import {FcSearch, FcSynchronize, FcDownload, FcMusic} from 'react-icons/fc'
import axios from 'axios'
import {useState} from 'react'


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
    if(input == ''){

    }
    checkUrl(input)
    if(ValidUrl == 'invalid'){

      return
    }
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader-api.p.rapidapi.com/Home/GetSpotifyUserInfo',
      params: {
        Tracklink: input
      },
      headers: {
        'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
        'X-RapidAPI-Host': 'spotify-downloader-api.p.rapidapi.com'
      }
    };   
    try {
      const response = await axios.request(options);
      setName(response.data)
    } catch (error) {
      console.error(error);
      
    }
    
  }

  function DownloadMusic(){
    document.getElementById('DownloadOn').style.display = 'flex'
    document.getElementById('DownloadDefault').style.display = 'none'

    var url = MusicName.Downloadurl
    window.location = url

    document.getElementById(`DownloadOn`).style.display = 'none'
    document.getElementById(`DownloadDefault`).style.display = 'flex'
  }

  function checkUrl(string) {
    try {
      let url = new URL(string)
     ValidUrl = 'valid'

   } catch(err) {
       alert('Invalid URL!')
   }
 }


  return (
    <>
    <div className='Spotify-Search'><input type="url" placeholder='Link Spotify Music' id='SpotifyNameInput' onKeyDown={event => {if(event.key === 'Enter'){SearchMusic()}}}value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={()=> SearchMusic()}><a id='LoadSearch' ><FcSynchronize/></a> <a id='DefaultSearch' ><FcSearch/></a></button> </div>

    {Object.keys(MusicName).length > 0 &&(
      <div className='ResultMusic'>
        <div>
          <p className='ResultMusic-icon'><FcMusic/></p>
          <a className='ResultMusic-details'>
            <p>{MusicName.SongTitle}</p>
            <p>Artist: {MusicName.Artist[0].Name}</p>
            <button onClick={DownloadMusic} ><a id='DownloadDefault'><FcDownload/></a><a id='DownloadOn'><FcSynchronize/></a></button>
          </a>
        </div>
      </div>    
    )}
    </>

   
  );
}

export default  HomeSearch;
    