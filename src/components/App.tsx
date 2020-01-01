import React from 'react';
import { hot } from 'react-hot-loader/root';
import api from '../api/api';
import { ICommitSummary } from '../api/types';
import List from './List';

interface IAppState {
    commits: ICommitSummary[];
    isListFetching: boolean;
    isListFetchingError: boolean;
    listFetchingErrorMessage?: string;
}

class App extends React.PureComponent<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            commits: [],
            isListFetching: false,
            isListFetchingError: false,
        };
    }

    public componentDidMount(): void {
        this.getList();
    }

    public render() {
        return (
            <div>
                <List commits={this.state.commits}/>
            </div>
        );
    }

    private getList(): void {
        this.setState({
            isListFetching: true,
            isListFetchingError: false,
        });

        api.getList()
            .then((res) => {
                this.setState({
                    isListFetching: false,
                    isListFetchingError: false,
                });

                this.setState({
                    commits: res.data,
                });
            })
            .catch((err) => {
                this.setState({
                    isListFetching: false,
                    isListFetchingError: true,
                    listFetchingErrorMessage: err.message,
                });
            });
    }
}

export default hot(App);
