import Button from '@material-ui/core/Button'
import useStyles from '../styles'

const ButtonStyled = () => {
  const classes = useStyles()

  return (
    <Button className={classes.root} fullWidth>
      Button Styled
    </Button>
  )
}

export default ButtonStyled
