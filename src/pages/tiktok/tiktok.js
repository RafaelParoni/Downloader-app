
import './tiktok.css';
import BtnSearch from './components/BtnSearch'
import ComeBackBtn from '../../Components/ComeBack'

function Youtube() {
  document.title = 'Tiktok Downloader'
  return (
    <div className="TiktokPage">
        <BtnSearch/>
        <ComeBackBtn/>
    </div>
  );
}

export default Youtube;