import React from 'react';
import { ICommitSummary } from '../api/types';

interface ICommitSummaryProps {
    commit: ICommitSummary;
}

const CommitSummary: React.FC<ICommitSummaryProps> = (props) => {
    return (
        <div>
            <p>{props.commit.commit.message}</p>
        </div>
    );
};

export default CommitSummary;
