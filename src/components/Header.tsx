import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'
import MenuIcon from '@material-ui/icons/Menu'

import useStyles from '../styles'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position='relative' color='secondary'>
      <Toolbar>
        {/* <PhotoCameraIcon className={classes.icon} /> */}
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Typography variant='h6'>MUI Theming</Typography>

        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
