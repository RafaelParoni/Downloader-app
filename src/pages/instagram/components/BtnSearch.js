
import '../instagram.css'
import {SiYoutube} from 'react-icons/si'
import { FaSearch, FaRedo, FaVolumeUp, FaPlay, FaImage, FaPause} from 'react-icons/fa'
import {HiOutlineEmojiSad} from 'react-icons/hi'
import {MdFileDownload} from 'react-icons/md'
import {useState} from 'react'
import axios from 'axios'
var ValidResponse = 'invalid'
var ErroValue = 'Error:'
var reults = []
var preview = []


function HomeSearch() {
  const [input , setInput] = useState('')
  const [resultm, setResults] = useState({})

  async function SearchVideo(){
    SearchAnimation('s')

    if(input === ''){
      alert('link inválido!')
      setInput('')
      setTimeout(SearchAnimation, 2000)
      return
    }
    if(input.includes('https://www.instagram.com/') === false){
      alert(`link inválido! :${input}`)
      setInput('')
      setTimeout(SearchAnimation, 2000)
      return
    }
    if(input.includes('/stories/') === true){
      alert(`link inválido! :${input}`)
      setInput('')
      setTimeout(SearchAnimation, 2000)
      return
    }
    preview = []

    const options = {
      method: 'GET',
      url: 'https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/',
      params: {url: input},
      headers: {
        'X-RapidAPI-Key': '4d1fc03470msh98ed2d469a33f37p102184jsn7cab8e913b66',
        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setResults(response.data)
      if(response.data.length == 0){
        ValidResponse = 'notFound'
      }else{
        ValidResponse = 'valid';
        reults = {type: 'type', urlDown: response.data[0]}
        
      }
      SearchAnimation()
    } catch (err) {
      ValidResponse = 'notFound'
      console.error(err.message);
      ErroValue = err.message
      SearchAnimation()
    }
    setInput('')

  }
  function SearchAnimation(value){
    if(value === 's'){
      document.getElementById(`LoadButton`).style.display = 'flex'
      document.getElementById(`DefaultButton`).style.display = 'none' 
    }else{
      document.getElementById(`LoadButton`).style.display = 'none'
      document.getElementById(`DefaultButton`).style.display = 'flex' 
    }
  } 

  return (

  <>
    <div className='Insta-Search'> <input type='url' placeholder='Link Reels/Post/Video ' onKeyDown={event => {if(event.key === 'Enter'){SearchVideo()}}}value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={()=> SearchVideo()}><a id='LoadButton'><FaRedo/></a> <a id='DefaultButton'><FaSearch/></a></button> </div>
    
    {ValidResponse === 'valid' &&(
      <div className='ResultsInsta'>
        <div className='ResultsInsta-download'>
          <p>Baixar: </p>
          <a href={reults.urlDown}  target="_blank"> <button ><MdFileDownload/></button></a>
        </div>
        <p className='ResultsInsta-type'>
          Type: {reults.type}
        </p>
      </div>
    )}
    {ValidResponse === 'notFound' &&(
      <div className='NotFoundInsta'>
      <div>
        <a className='NotFoundInsta-details'>
          <p><HiOutlineEmojiSad/> Not Found!</p>
          <p>{ErroValue}</p>
        </a>
      </div>
    </div> 
    )}

  </>
  );
}

export default  HomeSearch;
    
    