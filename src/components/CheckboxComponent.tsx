import { useState } from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true)

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          // color='primary'
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
          checkedIcon={<SaveIcon />}
          icon={<DeleteIcon />}
        />
      }
      label='Testing Checkbox'
    />
  )
}

export default CheckboxExample
