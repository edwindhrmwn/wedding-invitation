// import TitleImage from './resources/Title.png';
// import TitleImage from './resources/Photo_PW_2.jpg';
import TitleImage from './resources/Photo_PW_8.png';
import LocationMapImage from './resources/LocationMap.png';
// import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
// import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
// import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
// import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
// import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
// import GalleryPhoto6 from './resources/Gallery_Photo_6.png';
import GalleryPhoto1 from './resources/1.png';
import GalleryPhoto2 from './resources/2.png';
import GalleryPhoto3 from './resources/3.png';
import GalleryPhoto4 from './resources/4.png';
import GalleryPhoto5 from './resources/5.png';
import GalleryPhoto6 from './resources/6.png';
import GalleryPhoto7 from './resources/7.png';
import GalleryPhoto8 from './resources/8.png';
import GalleryPhoto9 from './resources/9.png';

import GalleryPhoto10 from './resources/Photo_PW_10.jpg';
import GalleryPhoto11 from './resources/Photo_PW_11.jpg';
import GalleryPhoto12 from './resources/Photo_PW_12.png';

import FlowerTopLeft from './resources/flower_top_left Background Removed.png';
import FlowerBottomRight from './resources/flower_bottom_right Background Removed.png';
import WelcomeImage from './resources/Photo_PW_9.png';
// import BankBca from './resources/BCA.jpeg'
import CopyImage from './resources/copy.png'

import StoryImage1 from './resources/Story_Photo_1.jpeg'
import StoryImage2 from './resources/Story_Photo_2.jpeg'
import StoryImage3 from './resources/Story_Photo_3.jpeg'
import StoryImage4 from './resources/Story_Photo_4.jpeg'

import Music from './resources/music_love_wins_all.mp3'
import PlayIcon from './resources/music_play_icon.png'
import PauseIcon from './resources/music_pause_icon.png'

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: 'testing',
  kakaoImage: 'testing kakao image',
  weddingDate: '09 November 2024',
  weddingAddress: 'Jl. Siaran, Sako, Kec. Sako, Kota Palembang, <br/> Sumatera Selatan 30961',
  weddingLocation: 'Mandiri Ballroom',
  musicIcon: {
    play: PlayIcon,
    pause: PauseIcon
  },
  music: Music,
  groom: {
    name: 'EDWIN DHARMAWAN',
    name2: 'Edwin Dharmawan',
    accountNumber: '7151643829',
    photo: GalleryPhoto11,
    fatherName: 'Alm. Bapak Eddy Rachmat',
    fatherAccountNumber: '-----',
    motherName: 'Ibu Siti Narwani',
    motherAccountNumber: '7151643829',
  },
  bride: {
    name: 'ANGGREINI INTAN PERMATA SARI',
    name2: 'Anggreini Intan Permata Sari',
    photo: GalleryPhoto10,
    accountNumber: '104325818490',
    fatherName: 'Bapak Indrasyah Permana',
    fatherAccountNumber: '7151643829',
    motherName: 'Ibu Sutinah',
    motherAccountNumber: '7151643829',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  welcomeImages: [
    FlowerTopLeft,
    FlowerBottomRight,
    WelcomeImage,
  ],
  thankYouBackgroundImage: GalleryPhoto12,
  galleryImages: [
    // GalleryPhoto1,
    // GalleryPhoto2,
    // GalleryPhoto3,
    // GalleryPhoto4,
    // GalleryPhoto5,
    // GalleryPhoto6,
    // GalleryPhoto7,
  ],
  galleryImages2: [
    {
      original: GalleryPhoto1,
      thumbnail: GalleryPhoto1,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto2,
      thumbnail: GalleryPhoto2,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto3,
      thumbnail: GalleryPhoto3,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto4,
      thumbnail: GalleryPhoto4,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto5,
      thumbnail: GalleryPhoto5,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto6,
      thumbnail: GalleryPhoto6,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto7,
      thumbnail: GalleryPhoto7,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto8,
      thumbnail: GalleryPhoto8,
      originalHeight: '300px',
    },
    {
      original: GalleryPhoto9,
      thumbnail: GalleryPhoto9,
      originalHeight: '300px',
    },
  ],
  storyContents: [
    {
      year: 2021,
      position: 'left',
      text: 'We know each other because we were one of the participants for the office poster and become a very good friend to each other.',
      image: StoryImage1,
    },
    {
      year: 2022,
      position: 'right',
      text: 'We started dating after dinner on the street around UGM.',
      image: StoryImage2,
    },
    {
      year: 2023,
      position: 'left',
      text: 'Long distance relationship (LDR) Depok and Yogyakarta, we decided to take our relationship seriously with a bowl of Kimukatsu.',
      image: StoryImage3,
    },
    {
      year: 2024,
      position: 'right',
      text: 'Wedding Day! \n at Mandiri Ballroom Palembang.',
      image: StoryImage4,
    },
  ],
  backJago: 'https://www.jago.com/images/brand/logo-jago.svg',
  bankBca: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg',
  copyImage: CopyImage
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingAddress: any;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  welcomeImages: string[];
  galleryImages: string[];
  bankBca: string;
  backJago: string;
  thankYouBackgroundImage: string;
  galleryImages2: any[];
  copyImage: string;
  storyContents: Content[];
  musicIcon: music;
  music: any;
};

type Person = {
  name: string;
  name2: String;
  photo: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

type Content = {
  position?: string;
  text: string;
  image: string;
  year?: number;
}

type music = {
  play: string;
  pause: string;
}


export default Configs;