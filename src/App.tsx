import Typography from '@material-ui/core/Typography'
// import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import { ThemeProvider, createTheme } from '@material-ui/core/styles'

import { green, orange } from '@material-ui/core/colors'

// import TabsComponent from './components/TabsComponent'
// import CollapsibleTable from './components/CollapsibleTable'
// import Cards from './components/Cards'
// import Footer from './components/Footer'
import Header from './components/Header'
import ButtonGroupComponent from './components/ButtonGroup'
import CheckboxExample from './components/CheckboxComponent'
import ButtonStyled from './components/ButtonStyled'

import './App.css'

function App() {
  const theme = createTheme({
    //   palette: {
    //     primary: {
    //       main: green[400]
    //     },
    //     secondary: {
    //       main: orange[400]
    //     }
    //   },

    typography: {
      h2: {
        fontSize: 36,
        marginBottom: 15
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth='xs'>
        <div className='App'>
          <header className='App-header'>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            {/* <CollapsibleTable />
            <TabsComponent /> */}

            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>

            <Typography variant='subtitle1'>Learn how to use MUI</Typography>

            <ButtonStyled />

            <Grid container spacing={2} justifyContent='center'>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>

              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>

              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>

            <TextField
              variant='filled'
              color='secondary'
              // type='date'
              // type='time'
              type='email'
              // label='Time'
              label='Email'
              placeholder='test@testing.com'
            />

            <CheckboxExample />

            <ButtonGroupComponent />
          </header>
        </div>
      </Container>
    </ThemeProvider>

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
