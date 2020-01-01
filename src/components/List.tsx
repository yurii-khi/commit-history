import classNames from 'classnames';
import React from 'react';
import { ICommitSummary } from '../api/types';
import { defaultListFetchingErrorMessage } from '../constants';
import CommitSummary from './CommitSummary';

import s from './List.css';

interface IListProps {
    commits: ICommitSummary[];
    isFetching: boolean;
    isFetchingError: boolean;
    errorMessage?: string;

    onReloadClick(): void;
}

const List: React.FC<IListProps> = (props) => {
    const renderCommit = (commit: ICommitSummary) => (
        <CommitSummary
            key={commit.sha}
            commit={commit}
        />
    );

    const items = props.commits.map((commit: ICommitSummary) => renderCommit(commit));

    const errorMessage = (
        <div className={s.error}>
            {props.errorMessage || defaultListFetchingErrorMessage}
        </div>
    );

    const isFetchingClass = props.isFetching ? s.fetching : '';

    const reloadLink = (
        <div className={s.reloadLink}>
            <span className={s.link} onClick={props.onReloadClick}>Reload</span>
        </div>
    );

    return (
        <div className={classNames(s.wrap, isFetchingClass)}>
            {reloadLink}
            {!props.isFetchingError ? items : errorMessage}
        </div>
    );
};

export default List;
