import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import * as React from 'react';

import {model} from './index'
import PersonItem from "./components/PersonItem";

interface PersonViewProps {
    person: model.Person[];
    dispatch: Dispatch<{}>;
}

class PersonView extends React.Component<PersonViewProps> {

    render() {
        const { person } = this.props;

        return (
            <div>
                <h1>
                    People
                </h1>
                <ul>
                    {person.map(p =>
                        <PersonItem person={p}/>
                    )}
                </ul>
            </div>
        );
    };
}

const mapStateToProps = (state: any) => ({
    person: state.person
});

export default connect(mapStateToProps)(PersonView);
