
import './tiktok.css';
import BtnSearch from './components/BtnSearch'
import ComeBackBtn from '../../Components/ComeBack'
import TitleTiktok from './components/Title';
import SubTitleTiktok from './components/SubTitle';

function Youtube() {
  document.title = 'Tiktok Downloader'
  return (
    <div className="TiktokPage">
        <TitleTiktok/>
        <SubTitleTiktok/>
        <BtnSearch/>
        <ComeBackBtn/>
    </div>
  );
}

export default Youtube;