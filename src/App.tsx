// import TabsComponent from './components/TabsComponent'
// import CollapsibleTable from './components/CollapsibleTable'
// import logo from './logo.svg'
// import './App.css'

import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import Cards from './components/Cards'
import useStyles from './styles'

function App() {
  const classes = useStyles()

  return (
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={logo} className='App-logo' alt='logo' />
    //     <CollapsibleTable />
    //     <TabsComponent />
    //   </header>
    // </div>

    <>
      <CssBaseline />

      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant='h6'>Photo album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Cards />
      </main>

      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>

        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Something to give the footer a purpose!
        </Typography>
      </footer>
    </>
  )
}

export default App
