// import { Divider } from 'antd';
import { styled } from '@stitches/react';
import ImageGallery from "react-image-gallery";

import { ConfigsType } from '../configs';
import "react-image-gallery/styles/css/image-gallery.css";


const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: "#FFFF",
  position: 'relative',
  alignItems: 'center',
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
  padding: "0 25px",
  zIndex: 2,
  maxWidth: 600,
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

type GalleryProps = {
  config: ConfigsType;
};

const Gallery = ({ config }: GalleryProps) => {

  return (
    <Section>
      <Image src={config.welcomeImages[0]} style={{ display: 'flex', width: '40vw', maxWidth: 200, position: 'absolute', top: 0, left: 0 }} />
      <Layout>
        <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>OUR</FirstWord>
            <SecoundWord>Memories</SecoundWord>
          </div>
        </HeaderTitle>
        <ImageGallery autoPlay showPlayButton={false} showFullscreenButton={false} items={config.galleryImages2} />
      </Layout>
      <Image src={config.welcomeImages[1]} style={{ width: '40vw', maxWidth: 200, position: 'absolute', bottom: 0, right: 0 }} />
    </Section>
  );
};

export default Gallery;
