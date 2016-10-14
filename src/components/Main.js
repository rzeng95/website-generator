import React from 'react';
import { connect } from 'react-redux';

import Switch from 'react-bootstrap-switch';

import '../styles/react-bootstrap-switch.css';
import '../styles/main.css';

const Main = (props) => {

    let label;
    if (props.isCondensed) {
        label = 'Viewing Condensed Content';
    } else {
        label = 'Viewing Full Content';
    }

    return (
        <div>
            <div id="header-bar">
                <div className="container">
                    <div style={{"fontSize":"45px","marginTop":"20px"}}>Roland Zeng</div>

                    <Switch
                    onText="Show Full" offText="Show Condensed"
                    onColor="info" offColor="success"
                    labelText={label}
                    handleWidth={300} labelWidth={300}
                    defaultValue={true}
                    inverse={true}
                    onChange={(e,s) => props.onToggle(s)} />

                </div>

                <div id="headline2"></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isCondensed : state.viewChange.isCondensed
})

export default connect(mapStateToProps)(Main);
