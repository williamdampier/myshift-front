import { FC, ReactNode } from 'react';
import cls from './Form.module.scss'

interface IFormProps {
 className?: string;
 children? : React.ReactNode;

}

export const Form: FC<IFormProps> = ({className, children}) => {
 return (
 <form className={cls.from}>
    {children}
 </form>
 );
};