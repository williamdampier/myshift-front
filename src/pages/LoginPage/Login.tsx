import { FC } from 'react';
import cls from './login.module.scss';

interface ILoginProps {}

const Login: FC<ILoginProps> = (props) => {
  return <main className={cls.login}>
    <div className={cls.loginForm}>
  
    </div>
  </main>;
};

export default Login;
