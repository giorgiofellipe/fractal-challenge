import { createMuiTheme } from "@material-ui/core";

export const reactFractalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#17376e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#689f38',
      contrastText: '#fff',
    },
    // error: will use the default color
  },
});

export const angularFractalTheme = {
  '50': 'e3e7ee',
  '100': 'b9c3d4',
  '200': '8b9bb7',
  '300': '5d739a',
  '400': '3a5584',
  '500': '17376e',
  '600': '143166',
  '700': '112a5b',
  '800': '0d2351',
  '900': '07163f',
  'A100': '7691ff',
  'A200': '4369ff',
  'A400': '1040ff',
  'A700': '0031f6',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': [
    '50',
    '100',
    '200',
    'A100'
  ],
  'contrastLightColors': [
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A200',
    'A400',
    'A700'
  ]
};

export const angularFractalAccentTheme = {
  '50': 'edf3e7',
  '100': 'd2e2c3',
  '200': 'b4cf9c',
  '300': '95bc74',
  '400': '7fad56',
  '500': '689f38',
  '600': '609732',
  '700': '558d2b',
  '800': '4b8324',
  '900': '3a7217',
  'A100': 'c8ffab',
  'A200': 'a6ff78',
  'A400': '85ff45',
  'A700': '74ff2b',
  'contrastDefaultColor': 'light',
  'contrastDarkColors': [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    'A100',
    'A200',
    'A400',
    'A700'
  ],
  'contrastLightColors': [
    '600',
    '700',
    '800',
    '900'
  ]
};