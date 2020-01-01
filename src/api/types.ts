export type TGetListResponse = ICommitSummary[];

export interface ICommitSummary {
    sha: string;
    node_id: string;
    commit: ICommitDetails;
    url: string;
    html_url: string;
    comments_url: string;
}

export interface ICommitDetails {
    author: IUserData;
    committer: IUserData;
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
    comment_count: number;
}

export interface IUserData {
    name: string;
    email: string;
    date: string; // "YYYY-MM-DDTHH:mm:ssZ"
}
