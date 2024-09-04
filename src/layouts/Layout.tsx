import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Seo } from '../components/Seo';

export const Layout = () => {
  return (
    <>
      <Seo
        title="ToDo List"
        description="Simple & fast ToDo List app made on ReactJS/TS"
        type="webapp"
        name="Al Zaplin"
      />
      <Header />
      <Outlet />
    </>
  );
};
