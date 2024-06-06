import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  background: "white",
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  color: '#5D4037',
  textAlign: 'center',
  padding: "0 15px",
  zIndex: 2,
});

const TitleLayout = styled('p', {
  width: '100%',
  letterSpacing: 5,
  fontWeight: 300,
  fontSize: isPortrait ? '35px' : '40px',
  margin: 0,
});

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? 15 : 20,
  margin: '24px 0',
  fontWeight: '300',
});

const ImageLayout = styled('div', {
  width: '100%',
  bottom: '-5px',
  textAlign: 'center',
  position: 'absolute',
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

const ImageStyle = {
  width: '40%',
  maxWidth: 300,
  borderTopLeftRadius: '100px',
  borderTopRightRadius: '100px',
}

type TitleProps = {
  config: ConfigsType;
};

const GroomsBridesDetail = ({ config }: TitleProps) => {

  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', position: 'absolute' }} />
      <Layout>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span
            style={{
              fontSize: 30,
              fontFamily: "Alex Brush",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            The Bride
          </span>

          <Image src={config.bride.photo} style={ImageStyle} />

          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20, justifyContent: 'center', textAlign: 'left' }}>
            <span><b>{config.bride.name2}</b></span>
            <span style={{ fontSize: 11 }}>Putri dari {config.bride.fatherName} dan {config.bride.motherName}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '10px' }}>
          <span
            style={{
              fontSize: 30,
              fontFamily: "Alex Brush",
              writingMode: "vertical-rl",
            }}
          >
            The Groom
          </span>

          <Image src={config.groom.photo} style={ImageStyle} />

          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20, justifyContent: 'center', textAlign: 'right' }}>
            <span><b>{config.groom.name2}</b></span>
            <span style={{ fontSize: 11 }}>Putra dari {config.groom.fatherName} dan {config.groom.motherName}</span>
          </div>
        </div>

      </Layout>
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', position: 'absolute', bottom: 0, right: 0 }} />
    </Section>
  );
};

export default GroomsBridesDetail;
