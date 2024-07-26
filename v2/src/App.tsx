import { useEffect, useState } from 'react';

import Chats from './components/Chats';
import Configs from './configs';
import Gallery from './components/Gallery';
import History from './components/History';
import Greeting from './components//Greeting';
import Location from './components//Location';
import TitleLayout from './components//Title';
import DateAndPlace from './components/DateAndPlace';
import GroomsBridesDetail from './components/GroomsBridesDetail';
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
    <main style={{ height: '100%', position: 'relative' }}>
      <Greeting config={Configs} />
      <GroomsBridesDetail config={Configs} />
      <DateAndPlace config={Configs} />
      <History config={Configs} />


      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Chats config={Configs} />
      <Image src={playing ? Configs.musicIcon.pause : Configs.musicIcon.play} onClick={onPlayPauseMusic} />
    </main>
  );
}

export default App;
