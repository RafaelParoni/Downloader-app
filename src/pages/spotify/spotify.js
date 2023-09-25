
import './spotify.css';
import BtnSearch from './components/BtnSearch'
import ComeBackBtn from '../../Components/ComeBack'
import TitleSpotify from './components/Title';
import SubTitleSpotify from './components/SubTitle';

function Spotify() {
  document.title = 'Spotify Downloader'
  return (
    <div className="SpotifyPage">
        <TitleSpotify/>
        <SubTitleSpotify/>
        <BtnSearch/>
        <ComeBackBtn/>
    </div>
  );
}

export default Spotify;