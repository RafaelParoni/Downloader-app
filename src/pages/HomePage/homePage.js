
import './Home.css'
import SpotifyBtn from './components/spotifyBtn';
import YoutubeBtn from './components/youtubeBtn';
import TiktokBtn from './components/tiktokBtn';
import InstaBtn from './components/instagram';
import Midia from '../midia/midia';

function HomePage() {
  document.title = 'Home'
  return (
    <div className="HomePage">
        <h1>Início</h1>
        <h3>escolha uma opção que você deseja:</h3>
        <div className='options'>
          <SpotifyBtn/>
          <YoutubeBtn/>
          <TiktokBtn/>
          <InstaBtn/>
        </div>

        <Midia/>
        
    </div>
  );
}

export default HomePage;