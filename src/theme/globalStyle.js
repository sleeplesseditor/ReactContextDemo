import { injectGlobal } from 'styled-components';

export const themes = {
  theme1: {
    primary: '#ff0198',
    secondary: '#01c1d6',
    danger: '#e50000',
    fontHeader: 'Old Standard TT, sans, sans-serif',
    fontBody: 'Nunito, sans-serif'
  },

  theme2: {
    primary: '#6e27c5',
    secondary: '#ffb617',
    danger: '#ff1919',
    fontHeader: 'Enriqueta, sans-serif',
    fontBody: 'Exo 2, sans, sans-serif'
  },

  theme3: {
    primary: '#f16623',
    secondary: '#2e2e86',
    danger: '#cc0000',
    fontHeader: 'Kaushan Script, sans, sans-serif',
    fontBody: 'Headland One, sans-serif'
  }
};

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT:400,700|Nunito:400,700|Enriqueta:400,700|Exo+2:400,700|Kaushan+Script:400,700|Headland+One:400,700');

  body {
    padding: 0;
    margin: 0;
  }
`;
