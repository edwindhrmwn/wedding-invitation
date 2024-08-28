import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100vh',
  background: "white",
});

const Layout = styled('div', {
  height: '100vh',
  width: '100%',
  color: '#5D4037',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: "0 15px",
  animation: 'fadein 2.5s',
  background: 'transparent',
  position: 'relative',
  zIndex: 2,
});

const TitleLayout = styled('p', {
  width: '100%',
  letterSpacing: 10,
  fontWeight: 700,
  fontSize: isPortrait ? '35px' : '40px',
  margin: 0,
});

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? 15 : 20,
  margin: '24px 0',
  fontWeight: '500',
});

const Image = styled('img', {
  position: 'absolute',
  objectFit: 'cover',
  width: '100vw',
  height: '100vh',
  zIndex: 0
});

type TitleProps = {
  config: ConfigsType;
  onClick: Function;
};

const Title = ({ config, onClick }: TitleProps) => {
  const { width, height } = useWindowSize();

  return (
    <Section style={{ backgroundImage: config.mainBackground }}>
      <Image src={config.mainBackground} />
      <Layout>
        <Confetti
          width={width}
          height={height}
          numberOfPieces={300}
          gravity={0.2}
          colors={['#FFCDD2', '#F8BBD0', '#D1C4E9']}
          recycle={false}
          style={{ position: 'fixed' }}
        />
        <span style={{ letterSpacing: 5 }}>THE WEDDING OF</span>
        <TitleLayout>
          INTAN
        </TitleLayout>
        <span style={{ display: 'flex', fontFamily: "Alex Brush", fontSize: 22, gap: 10, alignItems: 'center', justifyContent: 'center' }}>
          <div className='line' />
          and
          <div className='line' />
        </span>
        <TitleLayout>
          EDWIN
        </TitleLayout>
        <SubTitleLayout>
          Tanpa mengurangi rasa hormat, kami bermaksud <br /> mengundang Bapak/Ibu/Saudara/i <br /> pada acara pernikahan kami
        </SubTitleLayout>
        <span style={{ backgroundColor: '#5c63c0', color: 'white', cursor: 'pointer', padding: "8px 15px", borderRadius: 5, letterSpacing: 2 }} onClick={() => onClick()}>
          OPEN INVITATION
        </span>
      </Layout>
    </Section>
  );
};

export default Title;
