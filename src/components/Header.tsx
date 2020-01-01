import React from 'react';
import { IGetRepoResponse } from '../api/types';
import s from './Header.css';

interface IHeaderProps {
    repo: IGetRepoResponse;
}

const Header: React.FC<IHeaderProps> = (props) => {
    const repo = props.repo;

    return (
        <div className={s.wrap}>
            <div className={s.title}>{repo.name}</div>
            <div className={s.fullName}>
                <a className={s.link} href={repo.html_url}>{repo.full_name}</a>
            </div>
            <div className={s.description}>{repo.description}</div>
        </div>
    );
};

export default Header;
