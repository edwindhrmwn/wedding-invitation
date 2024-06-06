import { useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
  height: '100vh',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2em' : '2.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '14 px' : '18 px',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Section ref={ref}>
      <Layout>
        <Title>Lokasi</Title>
        <SubTitle>
          Jl. Siaran, Sako, Kec. Sako, Kota Palembang, Sumatera Selatan
          <br />
          (Samping Terminal Sako)
          <br />
        </SubTitle>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1716.457656430824!2d104.7898003861945!3d-2.9310687665381376!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b773ffc38c431%3A0xcb51c1bee2e1d61b!2sMandiri%20Ballroom!5e0!3m2!1sen!2sid!4v1709994723259!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 300 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>

      </Layout>
    </Section>
  );
};

export default Location;
