import { useEffect } from 'react';
import { ConfigsType } from '../configs';

declare global {
  interface Window {
    Kakao: any;
  }
}


type ShareProps = {
  config: ConfigsType;
};

const Share = ({ config }: ShareProps) => {

  useEffect(() => {

  }, []);

  return <></>
};

export default Share;
