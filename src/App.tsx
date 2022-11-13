import React from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import topFirstPicture from '../src/assets/slide12.png'
import topSecondPicture from '../src/assets/slide10.png'
import bottomFirstPicture from '../src/assets/slide11.png'
import bottomSecondPicture from '../src/assets/slide14.png'
import {Describe} from "./components/Describe/Describe";
import {Footer} from "./components/Footer/Footer";
import {Slider} from "./components/Slider/Slider";

const describeBlockTop = {
  topContent: {
    src: topFirstPicture,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    subtitle: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  bottomContent: {
    src: topSecondPicture,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    subtitle: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
}
const describeBlockBottom = {
  topContent: {
    src: bottomFirstPicture,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    subtitle: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
  bottomContent: {
    src: bottomSecondPicture,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    subtitle: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },
}

export const App = () => {
  return (
    <>
      <Header/>
      <main className={'main'}>
        <Describe topContent={describeBlockTop.topContent}
                  bottomContent={describeBlockTop.bottomContent}/>

        <Slider/>

        <Describe topContent={describeBlockBottom.topContent}
                  bottomContent={describeBlockBottom.bottomContent}/>
      </main>
      <Footer/>
    </>
  );
}


