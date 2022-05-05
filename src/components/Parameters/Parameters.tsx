import * as React from 'react';
import { DropdownOrLabel } from '../DropdownOrLabel/DropdownOrLabel';
import { ParametersGroup } from './ParametersGroup';

import { UnderlinedHeader } from '../../common-elements';

import { MediaContentModel } from '../../services';
import { FieldModel, RequestBodyModel } from '../../services/models';
import { MediaTypesSwitch } from '../MediaTypeSwitch/MediaTypesSwitch';
import { Schema } from '../Schema';

import { Markdown } from '../Markdown/Markdown';
import { ShelfIcon } from '../../common-elements';

function safePush(obj, prop, item) {
  if (!obj[prop]) {
    obj[prop] = [];
  }
  obj[prop].push(item);
}

export interface ParametersProps {
  parameters?: FieldModel[];
  body?: RequestBodyModel;
}

export interface ParametersState {
  expanded: boolean;
}

const PARAM_PLACES = ['path', 'query', 'cookie', 'header'];

export class Parameters extends React.PureComponent<ParametersProps, ParametersState> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  orderParams(params: FieldModel[]): Record<string, FieldModel[]> {
    const res = {};
    params.forEach(param => {
      safePush(res, param.in, param);
    });
    return res;
  }

  render() {
    const { body, parameters = [] } = this.props;
    if (body === undefined && parameters === undefined) {
      return null;
    }

    const paramsMap = this.orderParams(parameters);

    const paramsPlaces = parameters.length > 0 ? PARAM_PLACES : [];

    const bodyContent = body && body.content;

    const bodyDescription = body && body.description;

    return (
      <>
        {paramsPlaces.map(place => (
          <ParametersGroup key={place} place={place} parameters={paramsMap[place]} />
        ))}
        {bodyContent && (
          <BodyContent
            expanded={this.state.expanded}
            content={bodyContent}
            description={bodyDescription}
            onToggle={this.toggle}
          />
        )}
      </>
    );
  }
}

function DropdownWithinHeader(props) {
  return (
    <UnderlinedHeader onClick={() => props.onToggle()} key="header">
      Request Body schema: <DropdownOrLabel {...props} />
      <ShelfIcon size={'1.5em'} direction={props.expanded ? 'up' : 'down'} />
    </UnderlinedHeader>
  );
}

export function BodyContent(props: {
  content: MediaContentModel;
  expanded: boolean;
  onToggle: () => void;
  description?: string;
}): JSX.Element {
  const { content, description, expanded, onToggle } = props;
  const { isRequestType } = content;
  return (
    <MediaTypesSwitch
      onToggle={onToggle}
      expanded={expanded}
      content={content}
      renderDropdown={DropdownWithinHeader}
    >
      {({ schema }) => {
        return (
          <>
            {expanded && description !== undefined && <Markdown source={description} />}
            {expanded && (
              <Schema
                skipReadOnly={isRequestType}
                skipWriteOnly={!isRequestType}
                key="schema"
                schema={schema}
              />
            )}
          </>
        );
      }}
    </MediaTypesSwitch>
  );
}
