
import './youtube.css';
import BtnSearch from './components/BtnSearch'
import ComeBackBtn from '../../Components/ComeBack'
import TitleYoutube from './components/Title';
import SubTitleYoutube from './components/SubTitle';

function Youtube() {
  document.title = 'Youtube Downloader'
  return (
    <div className="YoutubePage">
        <TitleYoutube/>
        <SubTitleYoutube/>
        <BtnSearch/>
        <ComeBackBtn/>
    </div>
  );
}

export default Youtube;