import * as React from 'react';

import { darken } from 'polished';
import styled from '../../styled-components';
import { MenuItemLabel } from '../SideMenu/styled.elements';

export const SearchWrap = styled.div`
  padding: 5px 0;
  margin: 25px 0;
  position: relative;
`;

export const SearchInput = styled.input.attrs(() => ({
  className: 'search-input',
}))`
  width: calc(100% - ${props => props.theme.spacing.unit * 8}px);
  box-sizing: border-box;
  margin: 0 ${props => props.theme.spacing.unit * 4}px;
  padding: 14px 12px;
  background: #ffffff;
  border: 1px solid #d7dbdf;
  box-shadow: 0px 1px 0px rgba(17, 24, 28, 0.08);
  border-radius: 6px;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: bold;
  font-size: 13px;
  color: ${props => props.theme.sidebar.textColor};
  outline: none;

  &::placeholder {
    color: #a5a6a8;
    font-weight: 500;
  }
`;

export const SearchIcon = styled((props: { className?: string }) => (
  <svg
    className={props.className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6673 14.6667L11.2921 11.2915M11.2921 11.2915C12.3477 10.2358 13.0006 8.7775 13.0006 7.16667C13.0006 3.94501 10.389 1.33334 7.16732 1.33334C3.94566 1.33334 1.33398 3.94501 1.33398 7.16667C1.33398 10.3883 3.94566 13 7.16732 13C8.77815 13 10.2365 12.3471 11.2921 11.2915Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)).attrs({
  className: 'search-icon',
})`
  position: absolute;
  right: 35px;
  height: 16px;
  top: 20px;
  width: 16px;
`;

export const SearchResultsBox = styled.div`
  padding: ${props => props.theme.spacing.unit}px 0;
  background-color: ${({ theme }) => darken(0.05, theme.sidebar.backgroundColor)}};
  color: ${props => props.theme.sidebar.textColor};
  min-height: 150px;
  max-height: 250px;
  border-top: ${({ theme }) => darken(0.1, theme.sidebar.backgroundColor)}};
  border-bottom: ${({ theme }) => darken(0.1, theme.sidebar.backgroundColor)}};
  margin-top: 10px;
  line-height: 1.4;
  font-size: 0.9em;
  
  li {
    background-color: inherit;
  }

  ${MenuItemLabel} {
    padding-top: 6px;
    padding-bottom: 6px;

    &:hover,
    &.active {
      background-color: ${({ theme }) => darken(0.1, theme.sidebar.backgroundColor)};
    }

    > svg {
      display: none;
    }
  }
`;

export const ClearIcon = styled.i`
  position: absolute;
  display: inline-block;
  width: ${props => props.theme.spacing.unit * 2}px;
  text-align: center;
  top: 12px;
  right: 35px;
  line-height: 2em;
  vertical-align: middle;
  margin-right: 2px;
  cursor: pointer;
  font-style: normal;
  color: '#666';
`;

export const NoResult = styled.div`
  width: 100%;
  height: 100%;
  min-height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
