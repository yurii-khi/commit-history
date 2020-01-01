import axios from 'axios';
import React from 'react';
import { hot } from 'react-hot-loader/root';

enum urls {
    COMMITS = 'https://api.github.com/repos/khiznichenko/commit-history/commits',
}

class App extends React.PureComponent<{}, any> {
    constructor(props: {}) {
        super(props);

        this.state = {
            commits: [],
        };
    }

    public componentDidMount(): void {
        axios({
            headers: {
                Accept: 'application/vnd.github.v3+json',
            },
            method: 'get',
            url: urls.COMMITS,
        })
            .then((res) => {
                this.setState({
                    commits: res.data,
                });
            });
    }

    public render() {
        return (
            <div>
                {this.state.commits.map((commit: any) => this.renderCommit(commit))}
            </div>
        );
    }

    private renderCommit(commit: any) {
        return (
            <p key={commit.sha}>{commit.commit.message}</p>
        );
    }
}

export default hot(App);
