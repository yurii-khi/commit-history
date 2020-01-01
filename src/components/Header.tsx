import React from 'react';
import s from './Header.css';

interface IHeaderProps {
    title: string;
}

const Header: React.FC<IHeaderProps> = (props) => {
    return (
        <div className={s.wrap}>
            {props.title}
        </div>
    );
};

export default Header;
