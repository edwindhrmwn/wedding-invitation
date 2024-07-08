// import { useRef } from 'react';
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
  gap: 20,
  color: '#5D4037',
  // textAlign: 'center',
  padding: "0 25px",
  zIndex: 2,
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

const SubTitle = styled('span', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '14 px' : '18 px',
  fontWeight: '300',
  lineHeight: 1.8,

});

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {

  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', position: 'absolute' }} />
      <Layout>
        <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>Wedding</FirstWord>
            <SecoundWord>Location</SecoundWord>
          </div>
        </HeaderTitle>
        <SubTitle>
          <b style={{ fontSize: 15, fontWeight: 900 }}>Mandiri Ballroom</b> <br />
          Jl. Siaran, Sako, Kec. Sako, Kota Palembang, Sumatera Selatan 30961
        </SubTitle>
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1716.457656430824!2d104.7898003861945!3d-2.9310687665381376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b773ffc38c431%3A0xcb51c1bee2e1d61b!2sMandiri%20Ballroom!5e0!3m2!1sen!2sid!4v1709994723259!5m2!1sen!2sid"
          width="100%"
          style={{ border: 0, minHeight: 300, maxHeight: '50vh' }}
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

      </Layout>
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', position: 'absolute', bottom: 0, right: 0 }} />
    </Section>
  );
};

export default Location;
