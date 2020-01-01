import moment from 'moment';
import React from 'react';
import { ICommitSummary } from '../api/types';

import s from './CommitSummary.css';

interface ICommitSummaryProps {
    commit: ICommitSummary;
}

const CommitSummary: React.FC<ICommitSummaryProps> = (props) => {
    const date = moment(props.commit.commit.committer.date).calendar();
    return (
        <div className={s.wrap}>
            <div className={s.details}>
                <div className={s.message}>{props.commit.commit.message}</div>
                <div className={s.author}>by {props.commit.commit.committer.name} ({date})</div>
            </div>
            <a
                className={s.link}
                href={props.commit.html_url}
                target={'_blank'}
            >
                {props.commit.sha}
            </a>
        </div>
    );
};

export default CommitSummary;
