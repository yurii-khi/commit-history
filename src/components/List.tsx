import React from 'react';
import { ICommitSummary } from '../api/types';
import CommitSummary from './CommitSummary';

interface IListProps {
    commits: ICommitSummary[];
}

const List: React.FC<IListProps> = (props) => {
    const renderCommit = (commit: ICommitSummary) => (
        <CommitSummary
            key={commit.sha}
            commit={commit}
        />
    );

    return (
        <div>
            {props.commits.map((commit: ICommitSummary) => renderCommit(commit))}
        </div>
    );
};

export default List;
