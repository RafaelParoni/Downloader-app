
import './youtube.css';
import BtnSearch from './components/BtnSearch'
import ComeBackBtn from '../../Components/ComeBack'

function Youtube() {
  document.title = 'Youtube Downloader'
  return (
    <div className="YoutubePage">
        <BtnSearch/>
        <ComeBackBtn/>
    </div>
  );
}

export default Youtube;