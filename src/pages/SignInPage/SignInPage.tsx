import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/app';

const MSG = 'Мы кликнули по кнопке на SignInPage';

export const SignInPage: FC = () => {
  const test = useAppSelector(appSelectors.getTest);
  const dispatch = useAppDispatch();

  const handleTestBtnClk = () => {
    // console.log('test click');
    const x = appActions.setTest(MSG);
    console.log(x);
    dispatch(x);
  };

  console.log('render');

  return (
    <>
      <div>SignUpPage: {test}</div>
      <div>
        <button
          type={'button'}
          style={{ padding: '20px' }}
          onClick={handleTestBtnClk}
        >
          test
        </button>
      </div>
    </>
  );
};
