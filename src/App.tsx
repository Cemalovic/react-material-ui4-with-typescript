import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import InputAdornment from '@material-ui/core/InputAdornment'

import SearchIcon from '@material-ui/icons/Search'

import { ThemeProvider, createTheme } from '@material-ui/core/styles'

import { green, orange } from '@material-ui/core/colors'

import TabsComponent from './components/TabsComponent'
import CollapsibleTable from './components/CollapsibleTable'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Header from './components/Header'
import ButtonGroupComponent from './components/ButtonGroup'
import CheckboxExample from './components/CheckboxComponent'
import ButtonStyled from './components/ButtonStyled'
import SubComponent1 from './components/SubComponent1'
import SubComponent2 from './components/SubComponent2'

import { IFormInputs } from './modules/IFormInputs'

import './App.css'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[400]
      },
      secondary: {
        main: orange[400]
      }
    },

    typography: {
      h2: {
        fontSize: 36,
        marginBottom: 15
      }
    },

    shape: {
      borderRadius: 0
    },

    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
          padding: 20
        },
        fullWidth: {
          maxWidth: '300px'
        }
      },
      MuiFilledInput: {
        root: {
          backgroundColor: 'green'
        }
      },
      MuiInputLabel: {
        root: {
          backgroundColor: 'yellow'
        }
      }
      // MuiTextField: {
      // root: {
      //   backgroundColor: 'red'
      // }
      // }
    },

    props: {
      MuiButton: {
        disableRipple: true
      },
      MuiCheckbox: {
        disableRipple: true
      },
      MuiTextField: {
        // variant: 'outlined',
        variant: 'filled',
        InputLabelProps: {
          shrink: true
        }
      },
      MuiPaper: {
        elevation: 12
      }
    }
  })

  const methods = useForm<IFormInputs>()

  const {
    handleSubmit,
    watch,
    formState: { errors }
  } = methods

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log('form data is', data)
  }

  console.log('errors object', errors)
  console.log('watching email variable', watch('email'))

  return (
    <>
      <br />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <SubComponent1 />
          <br />
          <br />
          <SubComponent2 />
          <br />
          <br />
          <input type='submit' />
        </form>
      </FormProvider>
    </>

    // <ThemeProvider theme={theme}>
    //   <Header />
    //   <Container maxWidth='xs'>
    //     <div className='App'>
    //       <header className='App-header'>
    //         {/* <img src={logo} className='App-logo' alt='logo' /> */}
    //         {/* <CollapsibleTable />
    //         <TabsComponent /> */}

    //         <Typography variant='h2' component='div'>
    //           Welcome to MUI
    //         </Typography>

    //         <Typography variant='subtitle1'>Learn how to use MUI</Typography>

    //         <ButtonStyled />

    //         <Grid container spacing={2} justifyContent='center'>
    //           <Grid item xs={3} sm={6}>
    //             <Paper style={{ height: 75, width: '100%' }} />
    //           </Grid>

    //           <Grid item xs={3} sm={6}>
    //             <Paper style={{ height: 75, width: '100%' }} />
    //           </Grid>

    //           <Grid item xs={3} lg={12}>
    //             <Paper style={{ height: 75, width: '100%' }} />
    //           </Grid>
    //         </Grid>

    //         <TextField
    //           color='secondary'
    //           // type='date'
    //           // type='time'
    //           type='email'
    //           // label='Time'
    //           label='Email'
    //           placeholder='test@testing.com'
    //           InputProps={{
    //             endAdornment: (
    //               <InputAdornment position='end'>
    //                 <SearchIcon />
    //               </InputAdornment>
    //             )
    //           }}
    //         />

    //         <CheckboxExample />

    //         <ButtonGroupComponent />
    //       </header>
    //     </div>
    //   </Container>
    // </ThemeProvider>

    // <>
    //   <CssBaseline />

    //   <Header />

    //   <main>
    //     <Cards />
    //   </main>

    //   <Footer />
    // </>
  )
}

export default App
