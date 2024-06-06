import { Divider } from 'antd';
import { styled } from '@stitches/react';
import ImageGallery from "react-image-gallery";

import { ConfigsType } from '../configs';
import GroovePaper from '../resources/GroovePaper.png';
import "react-image-gallery/styles/css/image-gallery.css";


const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '5%' : '5% 10%',
});

const Title = styled('p', {
  // color: '#FFFFFF',
  width: '100%',
  fontSize: isPortrait ? '1.5em' : '2em',
  margin: 0,
  fontWeight: '500',
});

type GalleryProps = {
  config: ConfigsType;
};

const Wrapper = styled('div', {
  backgroud: '#efebe9',
  backgroundImage: `url(${GroovePaper})`,
  // padding: 42,
  width: '100%',
  // maxHeight: '40vh'
  minHeight: '100vh',
})

const Gallery = ({ config }: GalleryProps) => {

  return (
    <Wrapper>
      <Layout>
        <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
          <Title>Album Kami</Title>
        </Divider>
        <ImageGallery autoPlay showPlayButton={false} showFullscreenButton={false} items={config.galleryImages2} />
      </Layout>
    </Wrapper>
  );
};

export default Gallery;
