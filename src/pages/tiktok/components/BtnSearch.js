
import '../tiktok.css'
import { FaSearch, FaRedo, FaVideoSlash, FaVideo, FaFileAudio} from 'react-icons/fa'
import { useState } from 'react';
import axios from 'axios';

var validVideo = 'invalid'
var VideoInfo = {}
var VideoDescri = ''

function BtnSearch(){
  const [input, setInput] = useState('');

    function SearchAnimation(value){
      
      if(value == 'start'){
        document.getElementById(`LoadSearch`).style.display = 'flex'
        document.getElementById(`DefaultSearch`).style.display = 'none' 
        
        if(input === ''){
          alert('Nao digitou nada')
          SearchAnimation('end')
          return
        }
        if(input.includes('https://www.tiktok.com/@') === true){
          VideoInfo = {}
          SearchVideo()
        }else if(input.includes('https://vm.tiktok.com/') === true){
          VideoInfo = {}
          SearchVideo()
        }else{
          alert('Link Incorreto!')
          SearchAnimation('end')
          return
        }
        
      }else if(value === 'end'){
        document.getElementById(`LoadSearch`).style.display = 'none'
        document.getElementById(`DefaultSearch`).style.display = 'flex' 
        setInput('')
      }
    }
    async function SearchVideo(){
      

      const options = {
        method: 'GET',
        url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
        params: {
          url: input
        },
        headers: {
          'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
          'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        VideoDescri = response.data.description[0]
        if(VideoDescri.length > 45){
          VideoDescri = VideoDescri.slice(0,45)
          VideoDescri = VideoDescri.concat("", "...")
        }else if(VideoDescri.length == 0) {
          VideoDescri= 'sem descrição'
        }else{
          VideoDescri = response.data.description[0]
        }
        VideoInfo = {
          author: response.data.author, 
          avatar: response.data.avatar_thumb,
          thumb: response.data.dynamic_cover,
          videoNoWater: response.data.video, 
          audio: response.data.music, 
          descri: VideoDescri,
          originalVideo: response.data.OriginalWatermarkedVideo,
          videoId: response.data.videoid
        }
        console.log(VideoInfo)
        validVideo = 'valid'
        SearchAnimation('end')
      } catch (error) {
        console.error(error);
        SearchAnimation('end')
      }
    }
    function download(link){
      window.open(link)
    }

  return (
    <>
    <div className='tiktok-Search'> <input  type="url" placeholder='Link Tiktok Video ' id='SpotifyNameInput' onKeyDown={event => {if(event.key === 'Enter'){SearchAnimation('start')}}}value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={()=> SearchAnimation('start')}><a id='LoadSearch'><FaRedo/></a> <a id='DefaultSearch' ><FaSearch/></a></button> </div>
    
    {validVideo === 'valid' &&(
      <div className='results'>
        <div className='ResultsVideo'>
          <div className='ResultsVideo-preview'>
            <img src={VideoInfo.thumb}/>
          </div>
          <div className='ResultsVideo-details'>
            <h3>{VideoInfo.descri}</h3>
            <div className='ResultsVideo-channel'>
              <img  src={VideoInfo.avatar}/>
              <p> {VideoInfo.author} </p>
            </div>
            <div className='ResultsVideo-download'>
                <button onClick={()=> download(VideoInfo.videoNoWater)}> <FaVideoSlash/> Vídeo sem marca d'água </button>
                <button onClick={()=> download(VideoInfo.originalVideo)}> <FaVideo/> Vídeo com marca d'água</button>
                <button onClick={()=> download(VideoInfo.audio)}> <FaFileAudio/> Som do vídeo</button>
            </div>
          </div>
          
        </div>
      </div>
    )}
    
    </>
  );
}

export default  BtnSearch;
    
    