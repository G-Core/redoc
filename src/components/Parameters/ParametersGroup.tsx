import * as React from 'react';

import { UnderlinedHeader } from '../../common-elements';
import { PropertiesTable } from '../../common-elements/fields-layout';

import { FieldModel } from '../../services/models';
import { Field } from '../Fields/Field';

import { mapWithLast } from '../../utils';
import { ShelfIcon } from '../../common-elements';

export interface ParametersGroupProps {
  place: string;
  parameters: FieldModel[];
}

export class ParametersGroup extends React.PureComponent<ParametersGroupProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { place, parameters } = this.props;
    if (!parameters || !parameters.length) {
      return null;
    }

    return (
      <div key={place}>
        <UnderlinedHeader onClick={this.toggle}>
          {place} Parameters:
          <ShelfIcon size={'1.5em'} direction={this.state.expanded ? 'up' : 'down'} />
        </UnderlinedHeader>
        {this.state.expanded && (
          <PropertiesTable>
            <tbody>
              {mapWithLast(parameters, (field, isLast, isFirst) => (
                <Field
                  key={field.name}
                  isLast={isLast}
                  isFirst={isFirst}
                  field={field}
                  showExamples={true}
                />
              ))}
            </tbody>
          </PropertiesTable>
        )}
      </div>
    );
  }
}
