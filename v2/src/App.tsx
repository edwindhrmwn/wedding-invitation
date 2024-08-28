import { useEffect, useState } from 'react';
// import ReactFullpage from '@fullpage/react-fullpage';
import ReactPageScroller from 'react-page-scroller';

import Configs from './configs';

import SubmitMessage from './components/SubmitMessage';
import Messages from './components/Messages';
import Gallery from './components/Gallery';
import History from './components/v2/History';
import Greeting from './components//Greeting';
import Location from './components//Location';
import TitleLayout from './components/v2/Title';
import DateAndPlace from './components/v2/DateAndPlace';
import GroomsBridesDetail from './components/v2/GroomsBridesDetail';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import { styled } from '@stitches/react';
// import { Image } from 'antd';

const Image = styled('img', {
  display: 'flex',
  width: 50,
  position: 'fixed',
  zIndex: 100,
  bottom: '5%',
  right: '50%',
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  borderRadius: '100px',
});

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [audio] = useState(new Audio(Configs.music));
  const [playing, setPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false));
      // onPlayPauseMusic()
      // setTimeout(() => {
      // }, 3000);
    }

    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };

    // if (audio) audio.play()
    // setPlaying(!playing)
  }, []);

  const onPlayPauseMusic = () => {
    setPlaying(!playing)
    playing ? audio.pause() : audio.play()
  }

  const handlePageChange = (number: any) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number: any) => {
    console.log(number);
  };

  // const getPagesNumbers = () => {
  //   const pageNumbers = [];

  //   for (let i = 1; i <= 5; i++) {
  //     pageNumbers.push(
  //       <Pager.Item key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
  //         {i}
  //       </Pager.Item>,
  //     );
  //   }

  //   return [...pageNumbers];
  // };

  if (!isOpened) return (
    <main style={{ height: '100%' }}>
      <TitleLayout
        config={Configs}
        onClick={() => {
          setIsOpened(!isOpened)
          onPlayPauseMusic()
        }}
      />
    </main>
  )

  return (
    // <div style={{ height: '100%', position: 'relative' }} id='main' className='scroll-container'>
    //   <Greeting config={Configs} />
    //   <GroomsBridesDetail config={Configs} />
    //   <DateAndPlace config={Configs} />
    //   <History config={Configs} />


    //   <Gallery config={Configs} />
    //   <Location config={Configs} />
    //   <CongratulatoryMoney config={Configs} />
    //   <SubmitMessage config={Configs} />
    //   <Image src={playing ? Configs.musicIcon.pause : Configs.musicIcon.play} onClick={onPlayPauseMusic} />
    // </div>
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      >
        <Greeting config={Configs} />
        <GroomsBridesDetail config={Configs} />
        <DateAndPlace config={Configs} />
        <History config={Configs} />

        <Gallery config={Configs} />
        <Location config={Configs} />
        <CongratulatoryMoney config={Configs} />
        <SubmitMessage config={Configs} />
        <Messages config={Configs} />

      </ReactPageScroller>
      <Image src={playing ? Configs.musicIcon.pause : Configs.musicIcon.play} onClick={onPlayPauseMusic} />
    </>
  );
}

export default App;
