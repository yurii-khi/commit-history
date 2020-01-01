import moment from 'moment';
import React from 'react';
import { ICommitSummary } from '../api/types';

import s from './CommitSummary.css';

interface ICommitSummaryProps {
    commit: ICommitSummary;
}

const CommitSummary: React.FC<ICommitSummaryProps> = (props) => {
    const details = props.commit.commit;
    const date = moment(details.committer.date).calendar();
    const mailToAuthorLink = `mailto:${details.committer.email}`;
    const authorName = details.committer.name;

    return (
        <div className={s.wrap}>
            <div className={s.details}>
                <div className={s.message}>{details.message}</div>
                <div className={s.author}>
                    by <a className={s.email} href={mailToAuthorLink}>{authorName}</a> ({date})
                </div>
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
