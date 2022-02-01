import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeList } from './routeList';

export const Router: FC = () => {
  return (
    <>
      <Routes>
        {routeList.map((routeItem) => (
          <Route
            key={routeItem.name}
            path={routeItem.path}
            element={<routeItem.component />}
          />
        ))}
      </Routes>
    </>
  );
};
