
import './instagram.css';
import BtnSearch from './components/BtnSearch'
import ComeBackBtn from '../../Components/ComeBack'
import TitleInsta from './components/Title';
import SubTitleInsta from './components/SubTitle';

function Youtube() {
  document.title = 'Instagram Downloader'
  return (
    <div className="InstaPage">
        <TitleInsta/>
        <SubTitleInsta/>
        <BtnSearch/>
        <ComeBackBtn/>
    </div>
  );
}

export default Youtube;