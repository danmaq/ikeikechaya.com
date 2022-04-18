import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          {
            fontFamily: 'IkeIke Gothic',
            fontWeight: 100,
            src: 'local("Yu Gothic Medium")',
          },
          {
            fontFamily: 'IkeIke Gothic',
            fontWeight: 200,
            src: 'local("Yu Gothic Medium")',
          },
          {
            fontFamily: 'IkeIke Gothic',
            fontWeight: 300,
            src: 'local("Yu Gothic Medium")',
          },
          {
            fontFamily: 'IkeIke Gothic',
            fontWeight: 400,
            src: 'local("Yu Gothic Medium")',
          },
          {
            fontFamily: 'IkeIke Gothic',
            fontWeight: 'bold',
            src: 'local("Yu Gothic Medium")',
          },
        ],
      },
    },
  },
  palette: { background: { default: 'rgb(253, 253, 251)' } },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Hiragino Sans"',
      '"Noto Sans CJK JP"',
      '"IkeIke Gothic"',
      '"Yu Gothic"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Sans Emoji"',
    ].join(','),
  },
});
