import '../index.css'
import {BiArrowBack} from 'react-icons/bi'


function ComeBackBtn() {
    function href(){
      window.location = '/'
  }

  return (
    <>
    <button onClick={href} className='ComeBackBtn'> <BiArrowBack/> <a >Come back</a> </button>
    </>
  );
}

export default  ComeBackBtn;
    