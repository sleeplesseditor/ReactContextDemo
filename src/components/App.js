import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import logo from '../logo.svg';
import { StyledHyperLink as SHL, Button } from '../components/Shared';
import ThemeSelect from './ThemeSelect';
import { SiteThemeContext } from '../contexts/SiteThemeContext';

const AppWrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  height: 12rem;
  padding: 1rem;
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.primary};
`;

const AppTitle = styled.h1`
  font-family: ${({ theme }) => theme.fontHeader};
`;

const rotate360 = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 5s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1s linear;
  }
`;

const AppIntro = styled.p`
  color: ${({ theme }) => theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
  font-family: ${({ theme }) => theme.fontBody};
`;

const Underline = styled.span`
  border-bottom: 4px solid ${({ theme }) => theme.secondary};
`;

const StyledHyperLink = SHL.extend`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontBody};
  color: ${({ theme }) => theme.fontDark};
`;

const App = () => {
  return (
    <SiteThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <AppWrapper>
            <AppHeader>
              <AppLogo src={logo} alt="logo" />
              <AppTitle>Welcome to React</AppTitle>
            </AppHeader>
            <AppIntro>
              Bootstrapped with{' '}
              <Underline>
                <code>
                  <StyledHyperLink
                    href={`https://github.com/facebook/create-react-app`}
                    target="_blank"
                    rel="noopener"
                  >
                    create-react-app
                  </StyledHyperLink>
                </code>
              </Underline>.
            </AppIntro>
            <AppIntro>
              Components styled with{' '}
              <Underline>
                <code>
                  <StyledHyperLink
                    href={`https://www.styled-components.com`}
                    target="_blank"
                    rel="noopener"
                  >
                    styled-components
                  </StyledHyperLink>
                </code>
              </Underline>{' '}
              <span role="img" aria-label="nail polish">
                💅
              </span>
            </AppIntro>
            <AppIntro>
              Fonts picked with{' '}
              <Underline>
                <code>
                  <StyledHyperLink
                    href={`https://fontjoy.com/`}
                    target="_blank"
                    rel="noopener"
                  >
                    fontjoy.com
                  </StyledHyperLink>
                </code>
              </Underline>
            </AppIntro>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
            <Button danger>Danger Button</Button>
            <ThemeSelect />
          </AppWrapper>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  );
};

export default App;
