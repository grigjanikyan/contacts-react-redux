import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-dom';
import {api, scrollTo} from "../../utils";
import {notification} from "antd";


const DataContext = createContext({});
export const DataConsumer = DataContext.Consumer;

class DataProvider extends Component {
    state = {
        info: {},
        data: {},
        current: undefined,
        error: null,
        pagination: {
            defaultPageSize: 10,
            pageSizeOptions: ['10', '20', '30', '40', '50'],
            showSizeChanger: true,
            hideOnSinglePage: true,
            showTotal: function (total, range) {
                return `${range[0]}-${range[1]} of ${total} items`;
            },
        },
        loading: true
    }

    methods = {
        getData: this.getData.bind(this),
        onFilter: this.onFilter.bind(this),
        onPagination: this.onPagination.bind(this)
    }

    getData(params = {
        seed: 'wezom-react-redux-test',
        results: 100
    }) {

        let newState = {}

        api.get('', params)
            .then(({info, results}) => {
                this.setState({
                    info,
                    data: results,
                    loading: false,
                    pagination: {
                        ...this.state.pagination,
                        current: info.page
                    }
                })
            })
            .catch(error => {
                this.setState({
                    error,
                    loading: false
                })
                newState = {error}
            });
    }


    onFilter(params) {
        this.getData(params)
    }


    onPagination(params) {
        this.setState({loading: true})
        this.getData({
            page: params.current,
            results: params.pageSize
        });

        scrollTo(0, 800);
    }

    render() {
        return (
            <DataContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default withRouter(DataProvider);
