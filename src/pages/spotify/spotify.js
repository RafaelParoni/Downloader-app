
import './spotify.css';
import BtnSearch from './components/BtnSearch'
import ComeBackBtn from '../../Components/ComeBack'

function Spotify() {
  document.title = 'Spotify Downloader'
  return (
    <div className="SpotifyPage">
        <BtnSearch/>
        <ComeBackBtn/>
    </div>
  );
}

export default Spotify;