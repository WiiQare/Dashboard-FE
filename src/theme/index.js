import { createTheme, PaletteOptions } from '@mui/material';
import { frFR } from '@mui/material/locale';

// const rootElement = document.getElementById("__next");

export const themeUI = createTheme(
  {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1920,
      },
    },
    components: {
      /* MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      }, */
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            '&&:hover': {
              backgroundColor: '#1888ff',
            },
            '&&:hover *': {
              textDecoration: 'none',
            },
            '&&': {
              backgroundColor: theme.palette.primary.main,
            },
          }),
          sizeSmall: {
            padding: '6px 16px',
          },
          sizeMedium: {
            padding: '8px 20px',
          },
          sizeLarge: {
            padding: '11px 24px',
          },
          textSizeSmall: {
            padding: '7px 12px',
          },
          textSizeMedium: {
            padding: '9px 16px',
          },
          textSizeLarge: {
            padding: '12px 16px',
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '32px 24px',
            '&:last-child': {
              paddingBottom: '32px',
            },
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: 'h6',
          },
          subheaderTypographyProps: {
            variant: 'body2',
          },
        },
        styleOverrides: {
          root: {
            padding: '32px 24px',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            fontFamily: '"Montserrat", sans-serif',
          },
          html: {
            height: '100%',
            width: '100%',
          },
          body: {
            height: '100%',
            width: '100%',
          },
          '#__next': {
            height: '100%',
            width: '100%',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: '0.875rem',
            lineHeight: 1.8,
            color: '#66728e',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(55, 65, 81, 0.15)',
            },
            '&&:hover .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0.1,
              borderColor: '#66728e',
            },
            '&&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
              borderColor: theme.palette.primary.main,
            },
            '&& .MuiIconButton-root': {
              color: '#66728e',
            },
            '&& input': {
              ...theme.unstable_sx({
                py: 2.3,
              }),
            },
            '&& input:focus': {
              outline: 'none',
              border: 0,
              boxShadow: 'none',
            },
          }),

          /*   notchedOutline: {
            borderColor: "#f0f4fd",
            borderWidth: 1,
          }, */
        },
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            '& .MuiStepLabel-label': {
              fontSize: '0.7rem',
            },
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            '.MuiTableCell-root': {
              color: '#374151',
            },

            '& .MuiTableCell-root': {
              borderBottom: '1px solid #E5E7EB',
              fontSize: '13px',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: 0.5,
            },
            '& .MuiTableCell-paddingCheckbox': {
              paddingTop: 4,
              paddingBottom: 4,
            },
          },
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            '.MuiTableCell-root': {
              color: '#374151',
            },

            '& .MuiTableCell-root': {
              borderBottom: '1px solid #E5E7EB',
              whiteSpace: 'nowrap',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: 0.5,
            },
            '& .MuiTableCell-paddingCheckbox': {
              paddingTop: 4,
              paddingBottom: 4,
            },
          },
        },
      },
    },
  },
  frFR,
);
