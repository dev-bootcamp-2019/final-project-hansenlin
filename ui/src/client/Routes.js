import App from './App';
import HomePage from './pages/HomePage';
import CreateLeaguePage from './pages/CreateLeaguePage';
import LeaguePage from './pages/LeaguePage';
import TeamPage from './pages/TeamPage';
import AddPage from './pages/AddPage';
import DropPage from './pages/DropPage';
import DraftPage from './pages/DraftPage';
import SetRosterPage from './pages/SetRosterPage';
import GamePage from './pages/GamePage';
import ValidatePage from './pages/ValidatePage';
import SetScoresPage from './pages/SetScoresPage';
import TransactionsPage from './pages/TransactionsPage';
import NotFoundPage from './pages/NotFoundPage';
import FindPlayerPage from './pages/FindPlayerPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...CreateLeaguePage,
        path: '/create'
      },
      {
        ...TransactionsPage,
        path: '/transactions'
      },
      {
        ...LeaguePage,
        path: '/league/:contract',
        exact: true
      },
      {
        ...AddPage,
        path: '/league/:contract/add'
      },
      {
        ...DropPage,
        path: '/league/:contract/drop'
      },
      {
        ...DraftPage,
        path: '/league/:contract/draft'
      },
      {
        ...FindPlayerPage,
        path: '/league/:contract/find'
      },
      {
        ...SetRosterPage,
        path: '/league/:contract/setRoster'
      },
      {
        ...TeamPage,
        path: '/league/:contract/team/:address',
        exact: true
      },
      {
        ...GamePage,
        path: '/league/:contract/team/:address/:week',
        exact: true
      },
      {
        ...SetScoresPage,
        path: '/league/:contract/team/:address/:week/set'
      },
      {
        ...ValidatePage,
        path: '/league/:contract/team/:address/:week/validate'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
