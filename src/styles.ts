import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(45deg, #fe6b8b, #fe8e53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white'
    // padding: '5px 30px'
  },

  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },

  icon: {
    marginRight: '20px'
  },

  buttons: {
    marginTop: '40px'
  },

  cardGrid: {
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column'
  },

  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },

  card: {
    height: '100%'
  },

  cardContent: {
    flexGrow: 1
  },

  footer: {
    background: theme.palette.background.paper,
    padding: '50px 0'
  }
}))

export default useStyles
