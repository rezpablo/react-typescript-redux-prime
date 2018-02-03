import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import * as React from 'react';

import {model} from './index';
import PersonItem from './components/PersonItem';
import {Card} from 'primereact/components/card/Card';
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from 'primereact/components/column/Column';

interface PersonViewProps {
    person: model.Person[];
    dispatch: Dispatch<{}>;
}

class PersonView extends React.Component<PersonViewProps> {

    render() {
        const { person } = this.props;

         return (
            <Card>
                <div>

                    <DataTable value={person}>
                        <Column field="id" header="#" />
                        <Column field="name" header="Nome" />
                        <Column field="surname" header="Sobrenome" />
                    </DataTable>


                    <h1>
                        People
                    </h1>
                    <ul>
                        {person.map(p =>
                            <PersonItem person={p} key={p.id}/>
                        )}
                    </ul>
                </div>
            </Card>
        );
    };
}

const mapStateToProps = (state: any) => ({
    person: state.person
});

export default connect(mapStateToProps)(PersonView);
