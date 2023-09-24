
import '../youtube.css'
import {SiYoutube} from 'react-icons/si'
import { FaSearch, FaRedo, FaVolumeUp, FaPlay, FaImage} from 'react-icons/fa'
import {useState} from 'react'
import axios from 'axios'
var ValidResponse = 'invalid'
var videoInfo = ''
var Mp4Info = ''
var Mp3Info = ''
var VideoName = ''

function HomeSearch() {
    const [input, setInput] = useState('');
    const [MusicName, setName] = useState({});



    function SearchAnimation(value){
      if(value === 'start'){
        document.getElementById(`LoadButton`).style.display = 'flex'
        document.getElementById(`DefaultButton`).style.display = 'none' 
      }else if(value === 'end'){
        document.getElementById(`LoadButton`).style.display = 'none'
          document.getElementById(`DefaultButton`).style.display = 'flex'
      }
    }
    async function SearchVideo(){
        SearchAnimation('start')
  
        if(input === ''){ 
          alert('Digite o Link da musica!')
          ValidResponse = 'invalid'
          SearchAnimation('end')
          return;
        }
    
        if(input.includes('https://www.youtube.com/watch?v=') === false){
          alert('Parece que o seu link esta incorreto! \n Tente um link com o comeco parecido com: "www.youtube.com/watch?v="  ')
          setInput('')
          ValidResponse = 'invalid'
          SearchAnimation('end')
          return
        }
        ValidResponse = 'invalid'
        SearchMp3()
        SearchMp4()
        setTimeout(function(){
          SearchAnimation('end')
        }, 2000);

    }
    async function SearchMp4(){
      var id = input.slice(32, input.length)
      const options = {
        method: 'GET',
        url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
        params: {id: id},
        headers: {
          'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
          'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
        }
      };
      
      try {
        
        const response = await axios.request(options);
        ValidResponse = 'valid'
        setName(response)
        videoInfo = {
          thumbnail: response.data.thumbnail[2].url,
          channelTitle: response.data.channelTitle,
          channelLink: input
        }
        VideoName = response.data.title
        if(VideoName.length > 45){
          VideoName = VideoName.slice(0,45)
          VideoName = VideoName.concat("", "...")
        }
        Mp4Info = {
          VideoQuality: response.data.formats[2].qualityLabel,
          VideoUrl: response.data.formats[2].url,
        }

        setInput('')
      } catch (error) {
        ValidResponse = 'NotFound'
        console.error(error);
      }
    }
    async function SearchMp3(){
      var id = input.slice(32, input.length)

      const options = {
        method: 'GET',
        url: 'https://youtube-mp36.p.rapidapi.com/dl',
        params: {id: id},
        headers: {
          'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        Mp3Info = {
          VideoUrl: response.data.link,
        }
      } catch (error) {
        console.error(error);
      }
    }
    function red(){
      window.open('https://www.youtube.com/')
    }

  return (
    
    <>
    <h1 className='YoutubeTitle'>Youtube Downloader</h1>
    <h3 className='SubTitleYoutube'>Copie o link da musica pelo <a onClick={()=> red()}> <SiYoutube/> Youtube.com</a></h3>
    <div className='Youtube-Search'> <input type='url' placeholder='Link Youtube Music ' onKeyDown={event => {if(event.key === 'Enter'){SearchVideo()}}}value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={()=> SearchVideo()}><a id='LoadButton'><FaRedo/></a> <a id='DefaultButton'><FaSearch/></a></button> </div>
    
    {ValidResponse === 'valid' &&(
      <div className='resultsYoutube'>
          <img className='results-Video' onClick={()=> window.open(videoInfo.channelLink)} src={videoInfo.thumbnail} />
          <div className='results-Details'>
            <h2 className='results-Title' onClick={()=> window.open(videoInfo.channelLink)}>{VideoName} </h2>
            <h4 className='results-NameChanel'> <a> {videoInfo.channelTitle} </a> </h4>
            <div className='results-Buttons'>
              <button onClick={()=> window.open(Mp4Info.VideoUrl)}> <FaImage/> Mp4 </button>
              <button onClick={()=> window.open(Mp3Info.VideoUrl)}> <FaVolumeUp/> Mp3 </button>
            </div>
          </div>
      </div>
    )}
    </>
  );
}

export default  HomeSearch;
    
    