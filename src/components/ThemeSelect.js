import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SiteThemeContext } from '../contexts/SiteThemeContext';
import { themes } from '../theme/globalStyle';

const SelectWrapper = styled.div`
  margin: 0rem 0.5rem 0rem 0.25rem;
  padding: 0rem 0.5rem 0rem 0.25rem;
`;

const Select = styled.select`
  margin: 1.5rem 0.5rem;
  padding: 0.25rem 0.5rem;
  font-family: ${({ theme }) => theme.fontBody};
  border: 2px solid ${({ theme }) => theme.secondary};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.foreground};
  border-radius: 4px;
`;

export const SelectOpt = styled.option`
  font-family: ${({ theme }) => theme.fontBody};
`;

const ThemeSelect = props => {
  return (
    <SiteThemeContext.Consumer>
      {({ handleThemeChange }) => (
        <SelectWrapper>
          <Select onChange={e => handleThemeChange(e)}>
            {Object.keys(themes).map((theme, index) => {
              return (
                <SelectOpt key={index} value={theme}>
                  Theme {index + 1}
                </SelectOpt>
              );
            })}
          </Select>
        </SelectWrapper>
      )}
    </SiteThemeContext.Consumer>
  );
};

ThemeSelect.propTypes = {
  handleThemeChange: PropTypes.func
};

export default ThemeSelect;
