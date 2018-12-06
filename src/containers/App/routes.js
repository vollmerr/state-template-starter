import Forms from '../Forms';
import Help from '../Help';
import Home from '../Home';
import LoadingData from '../LoadingData';

// order here determines order in navigation menu
export const routesByKey = {
  home: {
    key: 'home',
    name: 'Home',
    path: '/',
    exact: true,
    icon: 'ca-gov-icon-home',
    component: Home,
  },
  forms: {
    key: 'forms',
    name: 'Forms',
    path: '/forms',
    exact: true,
    icon: 'ca-gov-icon-pencil-edit',
    component: Forms,
  },
  loadingData: {
    key: 'loadingData',
    name: 'Loading Data',
    path: '/loadingData',
    exact: true,
    icon: 'ca-gov-icon-download',
    component: LoadingData,
  },
  help: {
    key: 'help',
    name: 'Help',
    path: '/help',
    exact: true,
    icon: 'ca-gov-icon-question-line',
    component: Help,
  },
};

export default Object.values(routesByKey);
