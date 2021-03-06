import Home from '../Home';
import Help from '../Help';
import Form from '../Form';

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
  form: {
    key: 'form',
    name: 'Form',
    path: '/form',
    exact: true,
    icon: 'ca-gov-icon-pencil-edit',
    component: Form,
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
