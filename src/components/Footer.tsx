import Typography from '@material-ui/core/Typography'

import useStyles from '../styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>

      <Typography variant='subtitle1' align='center' color='textSecondary'>
        Something to give the footer a purpose!
      </Typography>
    </footer>
  )
}

export default Footer
