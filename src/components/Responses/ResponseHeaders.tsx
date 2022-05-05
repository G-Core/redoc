import * as React from 'react';
import { PropertiesTable } from '../../common-elements/fields-layout';

import { FieldModel } from '../../services/models';
import { mapWithLast } from '../../utils';
import { Field } from '../Fields/Field';
import { UnderlinedHeader } from '../../common-elements';

export interface ResponseHeadersProps {
  headers?: FieldModel[];
}

export class ResponseHeaders extends React.PureComponent<ResponseHeadersProps> {
  render() {
    const { headers } = this.props;
    if (headers === undefined || headers.length === 0) {
      return null;
    }
    return (
      <>
        <UnderlinedHeader>Response Headers:</UnderlinedHeader>
        <PropertiesTable>
          <tbody>
            {mapWithLast(headers, (header, isLast, isFirst) => (
              <Field
                isLast={isLast}
                isFirst={isFirst}
                key={header.name}
                field={header}
                showExamples={true}
              />
            ))}
          </tbody>
        </PropertiesTable>
      </>
    );
  }
}
