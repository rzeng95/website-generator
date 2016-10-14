import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from '../components/Main';

import * as viewToggleActions from '../actions/viewToggleActions';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentDidMount() {

    }

    handleToggle(newState) {
        //console.log('handle toggle');
        //console.log(newState);
        this.props.toggleView();
    }

    render() {
        return (
            <div>
                <Main onToggle={this.handleToggle} />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleView : () => dispatch( viewToggleActions.viewToggleAction() )
    }
}

export default connect(null, mapDispatchToProps)(MainContainer);
