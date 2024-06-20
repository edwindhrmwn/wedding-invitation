import { useState } from 'react';
import { Button, Input, InputNumber, Select } from 'antd';
import { styled } from '@stitches/react';
// import ChatData from '../data/thanksGiving.json'
// @ts-ignore
// import { writeFile } from 'fs-web';
import { ConfigsType } from '../configs';
import TextArea from 'antd/lib/input/TextArea';

type jsonFileType = {
  key?: any;
  username?: string;
  attandace?: string;
  message?: string;
  guest?: number;
}
// const jsonData: jsonFileType[] = ChatData

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  display: 'flex',
  position: 'relative',
  minHeight: '100vh',
  background: '#FFFF',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Section2 = styled('section', {
  height: '100%',
  display: 'flex',
  position: 'relative',
  minHeight: '100vh',
  background: '#EFEBE9',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
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
  alignItems: 'center',
  justifyContent: 'center',
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
  const [jsonData, setjsonData] = useState<jsonFileType[]>([])

  const resetValue = () => {
    setUsername('')
    setMessage('')
    setAttandace('')
  }

  const onChangeUsername = (input: React.ChangeEvent<HTMLInputElement>) => {
    console.log(input.target.value)
    setUsername(input.target.value)
  }
  const onChangeWish = (input: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(input.target.value)
    setMessage(input.target.value)
  }
  const onSelect = (input: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(input)
    setAttandace(input.toString())
  }
  const onSent = async () => {
    try {
      console.log("submit")
      const data = JSON.parse(JSON.stringify(jsonData))
      data.push({ username, message, attandace, key: Math.random() * 1000 })
      // ChatData.push({ username, message, attandace, key: Math.random() * 1000 })

      // await fs.writeFile(fileName, JSON.stringify(data), function writeJSON(err: any) {
      //   if (err) return console.log(err);
      //   console.log(JSON.stringify(data));
      //   console.log('writing to ' + fileName);
      // })
      resetValue()
      setjsonData(data)
      // await writeFile('../data/thanksGiving.json', JSON.stringify(data))
    } catch (error) {
      console.log("error", error)
    }
  }


  return (
    <>
      <Section>
        <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', position: 'absolute', top: 0, left: 0 }} />
        <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>RSVP &</FirstWord>
            <SecoundWord>Wishes</SecoundWord>
          </div>
        </HeaderTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '70vw', maxWidth: 300 }}>

          <div>Name</div>
          <Input value={username} onChange={onChangeUsername} disabled={false} placeholder='Nama' style={{ border: '0.5px solid black', backgroundColor: '#EFEBE9' }} />

          <div>Will you attend?</div>
          <Select
            // @ts-ignore
            value={attandace}
            onChange={onSelect}
            placeholder="Gladly Accepts/Sorry, I can’t"
            style={{ border: '0.5px solid black', backgroundColor: '#EFEBE9' }}
            dropdownStyle={{ backgroundColor: '#EFEBE9' }}
          >
            <Select.Option key={1} value={"Gladly Accepts"}>Gladly Accepts</Select.Option>
            <Select.Option key={2} value={"Sorry, I can't"}>Sorry, I can't</Select.Option>
          </Select>

          <div>How many guest?</div>
          <InputNumber
            placeholder='0/1/2'
            style={{ border: '0.5px solid black', width: '100%', backgroundColor: '#EFEBE9' }}
          />

          <div>Wishes</div>
          <TextArea value={message} placeholder='Ucapan' style={{ border: '0.5px solid black', backgroundColor: '#EFEBE9' }} onChange={onChangeWish} />

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button style={{ width: '40vw', maxWidth: 200, border: '0.5px solid black', backgroundColor: '#F2D6A0', fontWeight: 600 }} onClick={onSent}>SEND</Button>
          </div>
        </div>
        <Image src={config.welcomeImages[1]} style={{ width: '40vw', position: 'absolute', bottom: 0, right: 0 }} />

      </Section>


      <Section2>
        <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', position: 'absolute', top: 0, left: 0 }} />
        <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>RSVP &</FirstWord>
            <SecoundWord>Wishes</SecoundWord>
          </div>
        </HeaderTitle>
        <div
          style={{
            gap: 10,
            width: '70vw',
            height: '50vh',
            padding: 5,
            display: 'flex',
            maxWidth: 400,
            overflow: 'auto',
            flexDirection: 'column',
          }}
        >
          {
            jsonData.map((e, i) => {
              return (
                <div key={e?.key || i} style={{ backgroundColor: "#C6BBB8", padding: 5 }}>
                  <div><b>{e?.username}</b></div>
                  <div><b>{e?.attandace}</b></div>
                  <span>{e?.guest}</span>
                  <span><i>{e?.message}</i></span>
                </div>
              )
            })
          }
        </div>
        <Image src={config.welcomeImages[1]} style={{ width: '40vw', position: 'absolute', bottom: 0, right: 0 }} />

      </Section2>
    </>
  );
};

export default Chats;

