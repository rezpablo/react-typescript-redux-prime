import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import * as React from 'react';

import {model} from './index'
import PersonItem from "./components/PersonItem";
import {Field} from "react-redux-form";
import {User} from "../user/User";
import {addUser} from "../user/actions";

interface PersonViewProps {
    newUser: User;
    person: model.Person[];
    dispatch: Dispatch<{}>;
    addUser: (user: User)=> any;
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

                <form>
                    <Field model="newUser.name">
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Nome</label>
                            <input className="form-control" type="text" />
                        </div>
                    </Field>


                    <input type="button" onClick={a => this.props.addUser(this.props.newUser)} />

                </form>

            </div>
        );
    };
}

const mapStateToProps = (state: any) => ({
    person: state.person,
    newUser: state.newUser,
});

const mapDispatchToProps = (dispatch: Dispatch<{}> ) =>
    bindActionCreators({addUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PersonView);
