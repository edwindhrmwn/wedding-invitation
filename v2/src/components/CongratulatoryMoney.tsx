import { styled } from '@stitches/react';
import { Button, Divider, Image, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import HongBao from './HongBao';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100vh',
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
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
  fontSize: isPortrait ? '14px' : '18px',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

const GridLayout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '50% 50%',
});

const Description = styled('p', {
  fontSize: '1em',
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: '8px',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      <Layout>
        <Title>Bagikan Ucapan</Title>
        <SubTitle>Tunjukkan ucapan selamat Anda dan kirimkan hadiah kepada pasangan tersebut.</SubTitle>
      </Layout>
      <GridLayout>
        <HongBao title={config.groom.name} subTitle="Nomor Rekening" onClick={() => setGroomVisible(true)} />
        <HongBao title={config.bride.name} subTitle="Nomor Rekening" onClick={() => setBrideVisible(true)} />
      </GridLayout>
      <Modal
        title={<b>Nomor Rekening Mempelai Pria</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Image src={config.bankBca} width={50} />
          <CopyToClipboard text={config.groom.accountNumber}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => message.success('Berhasil disalin.')}>
              {config.groom.accountNumber}
              <img src={config.copyImage} width={15} />
            </span>
          </CopyToClipboard>
          <b>{config.groom.name}</b>
        </div>
      </Modal>
      <Modal
        title={<b>Nomor Rekening Mempelai wanita</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Image src={config.bankBca} width={50} />
          <CopyToClipboard text={config.bride.accountNumber}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => message.success('Berhasil disalin.')}>
              {config.bride.accountNumber}
              <img src={config.copyImage} width={15} />
            </span>
          </CopyToClipboard>
          <b>{config.bride.name}</b>
        </div>
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;
