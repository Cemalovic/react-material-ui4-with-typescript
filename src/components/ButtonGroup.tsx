import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

const ButtonGroupComponent = () => {
  return (
    <ButtonGroup variant='contained' color='primary'>
      <Button startIcon={<SaveIcon />} onClick={() => alert('hello')}>
        Save
      </Button>
      <Button endIcon={<DeleteIcon />}>Discard</Button>
    </ButtonGroup>
  )
}

export default ButtonGroupComponent
