import { styled } from '@stitches/react';
import { ConfigsType } from '../../configs';

const Section = styled('section', {
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  background: "white",
  position: 'relative',
  alignItems: 'center',
});

const Layout = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: '#5D4037',
  textAlign: 'center',
  padding: "0 15px",
  zIndex: 2,
  maxWidth: 600,
});

const Image = styled('img', {});

const ImageStyle = {
  width: '55vw',
  maxWidth: '200px'
}

type TitleProps = {
  config: ConfigsType;
};

const GroomsBridesDetail = ({ config }: TitleProps) => {

  return (
    <Section>
      <Layout>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Image src={config.bride.photo} style={ImageStyle} />

          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20 ,justifyContent: 'center', textAlign: 'left', zIndex: 1 }}>
            <span><b>THE BRIDE</b></span>
            <span><b>{config.bride.name2}</b></span>
            <span style={{ fontSize: 11 }}>Putri dari {config.bride.fatherName} dan {config.bride.motherName}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: '10px', marginTop: -35 }}>
          <Image src={config.groom.photo} style={ImageStyle} />

          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 20, justifyContent: 'center', textAlign: 'right', zIndex: 1 }}>
            <span><b>THE BRIDE</b></span>
            <span><b>{config.groom.name2}</b></span>
            <span style={{ fontSize: 11 }}>Putra dari {config.groom.fatherName} dan {config.groom.motherName}</span>
          </div>
        </div>

      </Layout>
    </Section>
  );
};

export default GroomsBridesDetail;
