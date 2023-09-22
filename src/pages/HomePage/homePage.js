
import './Home.css'
import SpotifyBtn from './components/spotifyBtn';
import YoutubeBtn from './components/youtubeBtn';
import TiktokBtn from './components/tiktokBtn';
import ComeBackBtn from '../../Components/ComeBack'

function HomePage() {
  document.title = 'Home'
  return (
    <div className="HomePage">
        <h1>Home</h1>
        <h3>choose what you want</h3>
        <div className='options'>
          <SpotifyBtn/>
          <YoutubeBtn/>
          <TiktokBtn/>
        </div>
        <ComeBackBtn/>
    </div>
  );
}

export default HomePage;