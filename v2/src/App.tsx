import Gallery from './components/Gallery';
import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import CongratulatoryMoney from './components//CongratulatoryMoney';
import Configs from './configs';
import Share from './components/Share';
import { Layout } from 'antd';
import Chats from './components/Chats';
import { useState } from 'react';
import GroomsBridesDetail from './components/GroomsBridesDetail';
import DateAndPlace from './components/DateAndPlace';
import History from './components/History';

const { Footer } = Layout;

function App() {
  const [isOpened, setIsOpened] = useState(false)

  if (!isOpened) return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} onClick={() => setIsOpened(!isOpened)} />
    </main>
  )

  return (
    <main style={{ height: '100%' }}>
      <Greeting config={Configs} />
      <GroomsBridesDetail config={Configs} />
      <DateAndPlace config={Configs} />
      <History config={Configs} />


      <Gallery config={Configs} />
      <Location config={Configs} />
      <CongratulatoryMoney config={Configs} />
      <Share config={Configs} />
      <Chats config={Configs} />
      <Footer
        style={{
          background: '#D7CCC8',
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2021 KyuHyuk Lee
      </Footer>
    </main>
  );
}

export default App;
