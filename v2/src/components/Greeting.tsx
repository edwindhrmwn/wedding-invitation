import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';
import { Image } from 'antd';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // background: '#AAB2BC',
});

// const Title = styled('p', {
//   color: '#795548',
//   width: '100%',
//   fontSize: isPortrait ? '2em' : '2.5em',
//   margin: 0,
//   fontWeight: '500',
// });

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2em' : '2.5em',
  margin: 0,
  textAlign: 'center',
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1em' : '1.5em',
  margin: 0,
  textAlign: 'center',
  fontWeight: '500',
});

// const SubTitle = styled('p', {
//   color: '#795548',
//   width: '100%',
//   fontSize: isPortrait ? '14px' : '18px',
//   margin: '24px 0',
//   fontWeight: '300',
//   lineHeight: 1.8,
// });

const Text = styled('p', {
  // color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '14px' : '18px',
  textAlign: 'center',
  margin: '10px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#AAB2BC',
        overflow: 'hidden',
        position: 'relative',
        animation: 'fadein 2.5s',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <div style={{
          zIndex: 2,
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isPortrait ? '0 5%' : '0 10%',
        }}>
          <Text>
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
            menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
            agar kamu cenderung dan merasa tentram kepadanya,
            dan Dia menjadikan di antaramu rasa kasih dan sayang.
            Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir”.
          </Text>

          <Text>(QS. Ar-Ruum 30 : 21)</Text>
        </div>

        <div
          style={{
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Image
            style={{
              maxHeight: '50vh',
              filter: 'brightness(80%)',
              maxWidth: 'max-content',
            }}
            preview={false}
            src={config.welcomeImages[2]}
          />
        </div>
      </Layout>
    </section>
  );
};

export default Greeting;
