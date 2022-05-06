import { darken } from 'polished';
import { Tabs as ReactTabs } from 'react-tabs';

import styled from '../styled-components';

export { Tab, TabList, TabPanel } from 'react-tabs';

export const Tabs = styled(ReactTabs)`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 0 -5px;

    > li {
      padding: 9px 10px;
      display: inline-block;

      cursor: pointer;
      text-align: center;
      outline: none;
      color: ${props => props.theme.colors.text.primary};
      margin: 0 ${({ theme }) => `${theme.spacing.unit}px 16px ${theme.spacing.unit}px`};
      background: #fff;
      border: 1px solid #d7dbdf;
      border-radius: 5px;
      font-size: 0.9em;
      font-weight: 500;
      min-width: 60px;

      &:only-child {
        flex: none;
      }

      &.tab-success {
        color: ${props => props.theme.colors.text.primary};
      }

      &.tab-redirect {
        color: ${props => props.theme.colors.text.primary};
      }

      &.tab-info {
        color: ${props => props.theme.colors.text.primary};
      }

      &.tab-error {
        color: ${props => props.theme.colors.text.primary};
      }

      &:hover {
        color: #56535f;
        border-color: #bfc8ce;
      }

      &:active {
        color: #56535f;
        border-color: #a3a7aa;
      }

      &.react-tabs__tab--selected {
        color: ${props => props.theme.typography.links.color};
        background: #fff;
        border: 1px solid ${props => props.theme.typography.links.color};

        &:focus {
          outline: auto;
        }
      }
    }
  }
  > .react-tabs__tab-panel {
    background: #17161b;
    border-radius: 6px;
    position: relative;

    & > div,
    & > pre {
      padding: ${props => props.theme.spacing.unit * 4}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`;

export const SmallTabs = styled(Tabs)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${({ theme }) => darken(theme.colors.tonalOffset, theme.rightPanel.textColor)};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${({ theme }) => theme.rightPanel.textColor};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${props => props.theme.spacing.unit * 2}px 0;
    }
  }
`;
