import { styled } from '@stitches/react';
import { ConfigsType } from '../../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: "transparent",
  position: 'relative',
  alignItems: 'center',
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
  // maxWidth: 600,
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

const HeaderTitle = styled('div', {
  width: '100%',
  display: 'flex',
  color: "#985474",
  justifyContent: "center"
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
      <Image src={config.welcomeImages[3]} style={{ display: 'flex', width: '40vw', zIndex: -1, maxWidth: 200, position: 'absolute', top: -20, right: -20 }} />
      <Layout>
        <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>OUR</FirstWord>
            <SecoundWord>Love Story</SecoundWord>
          </div>
        </HeaderTitle>
        {config.storyContents.map((e, i) => {
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                // minWidth: '50vw',
                flexDirection: e.position === 'right' ? 'row-reverse' : 'row',
                justifyContent: e.position === 'right' ? 'start' : 'end',
              }}
            >
              <div
                style={{
                  width: isPortrait ? '70%' : '50%',
                  gap: 10,
                  display: 'flex',
                  flexDirection: e.position === 'right' ? 'row-reverse' : 'row',
                  justifyContent: e.position === 'right' ? 'start' : 'end',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    fontSize: 12,
                    textAlign: e.position === 'right' ? 'left' : 'right',
                    alignItems: 'center',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {e.text}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ textAlign: e.position === 'right' ? 'right' : 'left', fontWeight: 'bold', color: "#182081" }}>{e?.year}</span>
                  <div style={{ position: 'relative', width: 100, height: 100 }}>
                    <Image src={e.image} style={{ display: 'absolute', objectFit: 'cover', width: 100, height: 100 }} />
                  </div>
                </div>
              </div>
              <div style={{ width: isPortrait ? '30%' : '50%' }} />
            </div>
          )
        })}
      </Layout >
      <Image src={config.welcomeImages[3]} style={{ width: '40vw', maxWidth: 200, position: 'absolute', bottom: -20, left: -20 }} />
    </Section >
  );
};

export default History;