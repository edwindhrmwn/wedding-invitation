import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';
import ChatData from '../data/thanksGiving.json'
import { Button, Select } from 'antd';
import { useState } from 'react';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: "#FFFF",
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 20,
  color: '#5D4037',
  // textAlign: 'center',
  padding: "0 25px",
  zIndex: 2,
});

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '20px' : '25px',
  margin: '24px 0',
  fontWeight: '300',
});

const HeaderTitle = styled('div', {
  width: '100%',
  display: 'flex',
  //   justifyContent: 'center',
})

const FirstWord = styled('div', {
  textAlign: 'left'
  // marginLeft: -95
})

const SecoundWord = styled('div', {
  fontFamily: 'Alex Brush',
  letterSpacing: 3,
  marginTop: -35,
  // marginRight: -95,
  fontStyle: 'italic',
  fontSize: 60,
})

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

type TitleProps = {
  config: ConfigsType;
};

const Chats = ({ config }: TitleProps) => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [attandace, setAttandace] = useState('')

  const onChangeUsername = (input: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input.target.value)
    setUsername(input.target.value)
  }
  const onChangeWish = (input: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(input.target.value)
    setMessage(input.target.value)
  }
  const onSent = () => {
    const data = JSON.parse(JSON.stringify(ChatData))
    data.push({ username, message, attandace, key: Math.random() * Math.random() })
    ChatData.push({ username, message, attandace, key: Math.random() * Math.random() })

    // fs.writeFileSync('../data/thanksGiving.json', JSON.stringify(data))
  }


  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', position: 'absolute' }} />
      <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>RSVP &</FirstWord>
            <SecoundWord>Wishes</SecoundWord>
          </div>
        </HeaderTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <input value={username} onChange={onChangeUsername} placeholder='Nama' style={{ width: '80%' }} />
        <textarea placeholder='Ucapan' style={{ width: '80%' }} onChange={onChangeWish} />
        <Select onChange={(e: any) => console.log("asdadas", e)} placeholder='Kehadiran' style={{ width: '80%', border: '0.5px solid black' }}>
          <Select.Option key={1}>Hadir</Select.Option>
          <Select.Option key={2}>Mungkin</Select.Option>
          <Select.Option key={3}>Tidak Hadir</Select.Option>
        </Select>
        <Button style={{ width: '30%', border: '0.5px solid black' }} onClick={onSent}>Kirim</Button>
      </div>

      <SubTitleLayout>Ucapan</SubTitleLayout>
      <Layout>
        <div
          style={{
            border: '1px solid',
            padding: 5,
            overflow: 'auto',
            maxHeight: '40vh',
            borderColor: 'black'
          }}
        >
          {
            ChatData.map(e => {
              return (
                <div key={e.key}>
                  <div><b>{e.username}</b> ({e.attandace})</div>
                  <p><i>{e.message}</i></p>
                </div>
              )
            })
          }
        </div>
      </Layout>
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', position: 'absolute', bottom: 0, right: 0 }} />

    </Section>
  );
};

export default Chats;

