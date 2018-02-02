import * as React from 'react';
import {Person} from "../model";

interface PersonItemProps {
  person: Person;
}
interface PersonItemState {
  editing: boolean;
};

class PersonItem extends React.Component<PersonItemProps, PersonItemState> {

  constructor(props: PersonItemProps) {
    super(props);
    this.state = {
      editing: false
    };
  }

  render() {
    const {person} = this.props;

    return (
      <li>
        {person.id} - {person.name}
      </li>
    );
  }
}

export default PersonItem;
