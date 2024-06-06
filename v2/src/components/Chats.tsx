import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';
import ChatData from '../data/thanksGiving.json'
import { Button, Input, Select } from 'antd';
import { useState } from 'react';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  background: '#DADADA',
  overflow: 'hidden',
  position: 'relative',
  padding: isPortrait ? '10% 5%' : '5%'
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  // textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
});

const TitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '2em' : '2.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '20px' : '25px',
  margin: '24px 0',
  fontWeight: '300',
});

const ImageLayout = styled('div', {
  width: '100%',
  background: '#DADADA',
  bottom: '-5px',
  textAlign: 'center',
  position: 'absolute',
});

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

  const onChangeUsername = (input: any) => {
    console.log(input)
  }
  const onSent = () => {
    const data = JSON.parse(JSON.stringify(ChatData))
    data.push({ username, message, attandace })
    console.log('input', data)
  }

  return (
    <Section>
      <TitleLayout>Kirim Ucapan</TitleLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <input value={username} onChange={onChangeUsername} placeholder='Nama' style={{ width: '80%' }} />
        <textarea placeholder='Ucapan' style={{ width: '80%' }} />
        <Select placeholder='Kehadiran' style={{ width: '80%', border: '0.5px solid black' }}>
          <Select.Option>Hadir</Select.Option>
          <Select.Option>Mungkin</Select.Option>
          <Select.Option>Tidak Hadir</Select.Option>
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

    </Section>
  );
};

export default Chats;
function onSent() {
  throw new Error('Function not implemented.');
}

