import React from 'react';
import { hot } from 'react-hot-loader/root';
import api from '../api/api';
import { ICommitSummary, IGetRepoResponse } from '../api/types';
import { defaultAppName } from '../constants';
import Header from './Header';
import List from './List';

import s from './App.css';

interface IAppState {
    repo: IGetRepoResponse;
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
            repo: {} as IGetRepoResponse,
        };

        this.handleListReloadClick = this.handleListReloadClick.bind(this);
    }

    public componentDidMount(): void {
        this.getRepoDetails();
        this.getList();
    }

    public render() {
        return (
            <div className={s.wrap}>
                <Header repo={this.state.repo}/>
                <List
                    commits={this.state.commits}
                    isFetching={this.state.isListFetching}
                    isFetchingError={this.state.isListFetchingError}
                    errorMessage={this.state.listFetchingErrorMessage}
                    onReloadClick={this.handleListReloadClick}
                />
            </div>
        );
    }

    private handleListReloadClick() {
        this.getList();
    }

    private getRepoDetails() {
        api.getRepo()
            .then((res) => {
                this.setState({
                    repo: { ...res.data },
                });
            })
            .catch(() => {
                this.setState({
                    repo: {
                        ...this.state.repo,
                        name: defaultAppName,
                    },
                });
            });
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
