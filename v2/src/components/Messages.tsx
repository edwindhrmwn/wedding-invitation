import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Button, Input, InputNumber, Select } from 'antd';
import { collection, query, orderBy, onSnapshot, addDoc, Timestamp } from "firebase/firestore"

import { db } from '../firebase'
import { ConfigsType } from '../configs';

type jsonFileType = {
  id?: any;
  username?: string;
  attandace?: string;
  message?: string;
  guest?: number;
}

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

const Messages = ({ config }: TitleProps) => {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [attandace, setAttandace] = useState('')
  const [guest, setGuest] = useState<number>()
  const [jsonData, setjsonData] = useState<jsonFileType[]>([])
  const [isSubmit, setIsSubmit] = useState<Boolean>(false)

  useEffect(() => {
    const q = query(collection(db, 'wishes'), orderBy('insertedDate', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setjsonData(querySnapshot.docs.map(doc => ({
        id: doc.id,
        attandace: doc.data()?.isAttend ? 'Gladly Accepts' : "Sorry, I can't",
        ...doc.data()
      })))
    })
  }, [])

  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', maxWidth: 200, position: 'absolute', top: 0, left: 0 }} />
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
          height: '70vh',
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
              <div key={i} style={{ backgroundColor: "#C6BBB8", color: "#624A44", padding: 10, minHeight: 150, borderRadius: 5 }}>
                <div><b>{e?.username}</b></div>
                <div><b>{e?.attandace}</b></div>
                <div style={{ fontWeight: 300 }}>
                  <span>{e?.guest} Guest</span> <br />
                  <span>"{e?.message}"</span>
                </div>
              </div>
            )
          })
        }
      </div>
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', maxWidth: 200, position: 'absolute', bottom: 0, right: 0 }} />

    </Section>
  );
};

export default Messages;

