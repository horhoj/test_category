import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/app';

export const HomePage: FC = () => {
  const test = useAppSelector(appSelectors.getTest);
  const dispatch = useAppDispatch();

  const handleTestBtnClk = () => {
    dispatch(appActions.setTest('А теперь кликнули по кнопке на homePage'));
  };

  return (
    <>
      <div>HomePage: {test}</div>
      <div>
        <button
          type={'button'}
          onClick={handleTestBtnClk}
          style={{ padding: '20px' }}
        >
          test
        </button>
      </div>
    </>
  );
};
