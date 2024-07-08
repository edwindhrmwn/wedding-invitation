import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: "#EFEBE9",
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

const TextDetailStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  fontSize: 13,
  letterSpacing: 2,
}

const HeaderTitle = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

const FirstWord = styled('div', {
  // marginLeft: -95
})

const SecoundWord = styled('div', {
  fontFamily: 'Alex Brush',
  letterSpacing: 3,
  marginTop: -35,
  marginRight: -95,
  fontStyle: 'italic',
  fontSize: 60,
})

const SubTitleStyle = styled('div', {
  fontSize: 36,
  fontStyle: 'italic',
  fontFamily: 'Alex Brush',
})

type TitleProps = {
  config: ConfigsType;
};

const DateAndPlace = ({ config }: TitleProps) => {

  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', position: 'absolute' }} />
      <Layout>
        <HeaderTitle>
          <div style={{ fontSize: 30, width: 200 }}>
            <FirstWord>Wedding Event</FirstWord>
            {/* <SecoundWord>Event</SecoundWord> */}
          </div>
        </HeaderTitle>

        <div style={TextDetailStyle}>
          <SubTitleStyle>Akad Nikah</SubTitleStyle>

          <div>09 November 2024<br />15.30 WIB - Selesai</div>
          <div style={{ fontSize: 9 }}>
            Mandiri Ballroom<br />
            Jl. Siaran, Sako, Kec. Sako, Kota Palembang,<br />
            Sumatera Selatan 30961
          </div>
        </div>

        <div style={TextDetailStyle}>
          <SubTitleStyle>Resepsi Nikah</SubTitleStyle>

          <div>09 November 2024<br />18.30 WIB - Selesai</div>
          <div style={{ fontSize: 9 }}>
            Mandiri Ballroom<br />
            Jl. Siaran, Sako, Kec. Sako, Kota Palembang,<br />
            Sumatera Selatan 30961
          </div>
        </div>
      </Layout >
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', position: 'absolute', bottom: 0, right: 0 }} />
    </Section >
  );
};

export default DateAndPlace;
