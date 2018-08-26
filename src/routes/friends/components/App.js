import React from 'react';
import {
    Input,
} from 'reactstrap';
import _ from 'lodash';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import './App.css';

import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import queryString from 'query-string';

// imported files
import { fetchFriends, getQuery } from "../modules/friends-actions";
import ListForm from "./list-form";



function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            fetchFriends,
            getQuery
        }, dispatch)
    }
}

function mapStateToProps(state) {
    return {
		friends: state.friends,
		query: state.query.query
    };
}

class App extends React.Component {

    static propTypes = {
        getQuery: PropTypes.func.isRequired,
		friends: PropTypes.object.isRequired,
		query: PropTypes.string
    };

    componentWillMount(){
        this.props.getQuery();
    }

    componentDidMount(){
        const value = queryString.parse(this.props.location.search);
        this.props.getQuery(value.q);
    }


    updateSearch(e){

		this.props.getQuery(e.target.value);

        let v = e.target.value;

        this.props.history.push('/?q=' + v );

    }

    updateKey(e){
        // on enter key
        if (e.keyCode === 13){
            this.props.getQuery(e.target.value)
        }
    }

    render() {

        let { friends, query } = this.props;

        return (
            <div className="App">
                <Input
                    className={'inputContainer'}
                    type={'text'}
                    value={query}
                    onChange={this.updateSearch.bind(this)}
                    placeholder={'Search friends...'}
                    style={{marginTop: 80, width: 400, height: 40, marginLeft: 25}}
                    onKeyDown={this.updateKey.bind(this)}
                />

                <ul>
                    {
                        _.map(friends.friends,
                            (friend) =>
                                <ListForm
                                    friend={friend}
                                    key={Math.random().toString()}
                                />
                        )
                    }
                </ul>

            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))