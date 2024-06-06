import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

// const Section = styled('section', {
//   height: '100%',
//   background: "linear-gradient(to right, #A6B4C3, #B3BECC, #B3C0CE, #C3D1E0, #C7D5E3, #C4D2E1, #C2D0DF)",
//   overflow: 'hidden',
//   position: 'relative',
// });
const Section = styled('section', {
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  background: "white",
  // overflow: 'hidden',
  // position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  padding: "0 15px",
  animation: 'fadein 2.5s',
  zIndex: 2,
});

const TitleLayout = styled('p', {
  width: '100%',
  letterSpacing: 5,
  fontWeight: 300,
  fontSize: isPortrait ? '35px' : '40px',
  margin: 0,
});

// const SubTitleLayout = styled('p', {
//   width: '100%',
//   fontSize: isPortrait ? '20px' : '25px',
//   margin: '24px 0',
//   fontWeight: '300',
// });

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? 15 : 20,
  margin: '24px 0',
  // padding: '0 10px',
  fontWeight: '300',
});

const ImageLayout = styled('div', {
  width: '100%',
  // background: '#DADADA',
  bottom: '-5px',
  textAlign: 'center',
  position: 'absolute',
  // zIndex: -1,
});

const Image = styled('img', {
  width: isPortrait ? '100%' : '40%',
});

type TitleProps = {
  config: ConfigsType;
  onClick: Function;
};

const Title = ({ config, onClick }: TitleProps) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        gravity={0.2}
        colors={['#FFCDD2', '#F8BBD0', '#D1C4E9']}
        recycle={false}
        style={{ position: 'fixed' }}
      />
      <Section>
        <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw' }} />
        <Layout>
          <span style={{ letterSpacing: 2 }}>THE WEDDING OF</span>
          <TitleLayout>
            INTAN
          </TitleLayout>
          <span style={{ fontFamily: "Alex Brush", fontSize: 22, wordSpacing: 10 }}>- and -</span>
          <TitleLayout>
            EDWIN
          </TitleLayout>
          <SubTitleLayout>
            Tanpa mengurangi rasa hormat, kami bermaksud <br/> mengundang Bapak/Ibu/Saudara/i <br/> pada acara pernikahan kami
          </SubTitleLayout>
          <span style={{ backgroundColor: '#EEEBE9', padding: "8px 15px", borderRadius: 5, letterSpacing: 2 }} onClick={() => onClick()}>
            OPEN INVITATION
          </span>
        </Layout>
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'flex-end' }}>
          <Image src={config.welcomeImages[1]} style={{ width: '40vw' }} />
        </div>

      </Section>
    </>
  );
};

export default Title;
