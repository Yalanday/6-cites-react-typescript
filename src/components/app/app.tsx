import React from 'react';
import Main from '../../pages/main/main';
// import Main from '../../pages/main/main';
// import Favorites from '../../pages/favorites/favorites';
// import {Login} from '../../pages/login/login';
// import Property from '../../pages/property/property';

type AppProps = {
  offersCount: number;
}
function App({offersCount}: AppProps): JSX.Element {
  return <Main offersCount={offersCount}/>;
}

export default App;
