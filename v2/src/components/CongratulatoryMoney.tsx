import { styled } from '@stitches/react';
import { Button, Divider, Image, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  zIndex: -2,
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  minHeight: '100vh',
  background: '#AAB2BC',
  flexDirection: 'column',
  // justifyContent: 'center',
});

const Layout = styled('div', {
  width: '100%',
  height: '30vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  // padding: isPortrait ? '10% 5%' : '5% 0% 5% 10%',
});

const HeaderTitle = styled('div', {
  width: '100%',
  color: '#624A44',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const FirstWord = styled('div', {
  textAlign: 'left',
  fontWeight: 700,
})

const SecoundWord = styled('div', {
  fontFamily: 'Alex Brush',
  letterSpacing: 3,
  marginTop: -35,
  fontStyle: 'italic',
  marginLeft: 30,
  fontSize: 60,
})

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <Section>
      <div
        style={{
          width: '100vw',
          zIndex: -1,
          height: '100vh',
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Image
          src={config.thankYouBackgroundImage}
          style={{
            width: 'auto',
            filter: 'brightness(80%)',
            maxHeight: '80vh',
          }}
          preview={false}
        />
      </div>

      <Layout>
        <HeaderTitle>
          <div style={{ fontSize: 30 }}>
            <FirstWord>Give</FirstWord>
            <SecoundWord>Love</SecoundWord>
          </div>
        </HeaderTitle>

        <Button style={{ backgroundColor: '#EFEBE9', borderRadius: 9, color: '#523817' }} onClick={() => setIsOpenModal(!isOpenModal)}>
          KLIK DISINI
        </Button>
      </Layout>

      <Modal
        title={<b>Nomor Rekening Mempelai</b>}
        open={isOpenModal}
        onOk={() => setIsOpenModal(!isOpenModal)}
        onCancel={() => setIsOpenModal(!isOpenModal)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div
          style={{
            gap: 5,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Image src={config.bankBca} width={50} />
          <CopyToClipboard text={config.groom.accountNumber}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }} onClick={() => message.success('Berhasil disalin.')}>
              {config.groom.accountNumber}
              <img src={config.copyImage} width={15} />
            </span>
          </CopyToClipboard>
          <b>{config.groom.name}</b>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Image src={config.backJago} width={50} />
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
