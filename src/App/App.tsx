import React from 'react';
import { NavLink } from 'react-router-dom';
import { Router } from '../router';
import { getRouthPath } from '../router/routeList';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to={getRouthPath('SignInPage')}>sign in</NavLink>
          </li>
          <li>
            <NavLink to={getRouthPath('HomePage')}>home</NavLink>
          </li>
          <li>
            <NavLink to={'/123123'}>Левый адрес</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Router />
      </div>
    </div>
  );
};
