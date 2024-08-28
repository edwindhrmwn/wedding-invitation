import { styled } from '@stitches/react';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Button, Input, InputNumber, Select } from 'antd';
import { collection, addDoc, Timestamp } from "firebase/firestore"

import { db } from '../firebase'
import { ConfigsType } from '../configs';

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
  const [guest, setGuest] = useState<number>()
  const [isSubmit, setIsSubmit] = useState<Boolean>(false)

  const resetValue = () => {
    setUsername('')
    setMessage('')
    setAttandace('')
    setGuest(0)
  }

  const onChangeUsername = (input: React.ChangeEvent<HTMLInputElement>) => {
    setIsSubmit(false)
    setUsername(input.target.value)
  }
  const onChangeWish = (input: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsSubmit(false)
    setMessage(input.target.value)
  }
  const onSelect = (input: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSubmit(false)
    setAttandace(input.toString())
  }
  const onChangeGuest = (input: number) => {
    setGuest(input)
  }
  const onSent = async () => {
    try {
      setIsSubmit(true)

      if (!username.length || !message.length || null == guest || undefined == guest || !attandace) return
      resetValue()
      await addDoc(collection(db, 'wishes'), {
        username,
        message,
        guest: guest || 0,
        isAttend: attandace == 'Gladly Accepts',
        insertedDate: Timestamp.now()
      })
      setIsSubmit(false)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', maxWidth: 200, position: 'absolute', top: 0, left: 0 }} />
      <HeaderTitle>
        <div style={{ fontSize: 30 }}>
          <FirstWord>RSVP &</FirstWord>
          <SecoundWord>Wishes</SecoundWord>
        </div>
      </HeaderTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '70vw', maxWidth: 300 }}>

        <div>Name</div>
        <Input
          value={username}
          // status="error"
          status={isSubmit && !username ? 'error' : ''}
          onChange={onChangeUsername}
          disabled={false}
          placeholder='Nama'
          style={{ backgroundColor: '#EFEBE9' }}
        />

        <div>Will you attend?</div>
        <Select
          // @ts-ignore
          value={attandace}
          style={{ backgroundColor: '#EFEBE9' }}
          status={isSubmit && !attandace ? 'error' : ''}
          onChange={onSelect}
          placeholder="Gladly Accepts/Sorry, I can't"
          dropdownStyle={{ backgroundColor: '#EFEBE9' }}
        >
          <Select.Option key={1} value={"Gladly Accepts"}>Gladly Accepts</Select.Option>
          <Select.Option key={2} value={"Sorry, I can't"}>Sorry, I can't</Select.Option>
        </Select>

        <div>How many guest?</div>
        <InputNumber
          value={guest}
          onChange={onChangeGuest}
          placeholder='0/1/2'
          status={isSubmit && (null == guest || undefined == guest) ? 'error' : ''}
          style={{ width: '100%', backgroundColor: '#EFEBE9' }}
        />

        <div>Wishes</div>
        <TextArea
          style={{ backgroundColor: '#EFEBE9' }}
          value={message}
          status={isSubmit && !message.length ? 'error' : ''}
          onChange={onChangeWish}
          placeholder='Ucapan'
        />

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button style={{ width: '40vw', maxWidth: 200, border: '0.5px solid black', backgroundColor: '#F2D6A0', fontWeight: 600 }} onClick={onSent}>SEND</Button>
        </div>
      </div>
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', maxWidth: 200, position: 'absolute', bottom: 0, right: 0 }} />

    </Section>
  );
};

export default Chats;

