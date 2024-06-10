import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

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
  gap: 10,
  color: '#5D4037',
  textAlign: 'center',
  padding: "0 25px",
  zIndex: 2,
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

const HeaderTitle = styled('div', {
  width: '100%',
  display: 'flex',
})

const FirstWord = styled('div', {
  textAlign: 'left'
})

const SecoundWord = styled('div', {
  fontFamily: 'Alex Brush',
  letterSpacing: 3,
  marginTop: -35,
  fontStyle: 'italic',
  fontSize: 60,
})

type TitleProps = {
  config: ConfigsType;
};

const History = ({ config }: TitleProps) => {

  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', position: 'absolute' }} />
      <Layout>
        <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>OUR</FirstWord>
            <SecoundWord>Love Story</SecoundWord>
          </div>
        </HeaderTitle>
        {config.storyContents.map(e => {
          return (
            <div
              style={{
                gap: 10,
                display: 'flex',
                flexDirection: e.position === 'right' ? 'row' : 'row-reverse',
                justifyContent: e.position === 'right' ? 'end' : 'start',
              }}
            >
              <span
                style={{
                  display: 'flex',
                  fontSize: 12,
                  textAlign: e.position === 'right' ? 'right' : 'left',
                  alignItems: 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                {e.text}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ textAlign: e.position === 'right' ? 'right' : 'left', fontWeight: 'bold' }}>{e?.year}</span>
                <div style={{ position: 'relative', width: 100, height: 100 }}>
                  <Image src={e.image} style={{ display: 'absolute', objectFit: 'cover', width: 100, height: 100 }} />
                </div>
              </div>
              {/* <div style={{ width: '40vw' }}></div> */}
            </div>
          )
        })}
      </Layout >
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', position: 'absolute', bottom: 0, right: 0 }} />
    </Section >
  );
};

export default History;