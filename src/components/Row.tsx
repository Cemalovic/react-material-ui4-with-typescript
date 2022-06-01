import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Collapse from '@material-ui/core/Collapse'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

export function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    history: [
      { date: '2022-11-11', customerId: '11122233', amount: 8 },
      { date: '2022-06-05', customerId: 'Axios', amount: 4 }
    ]
  }
}

const Row = (props: { row: ReturnType<typeof createData> }) => {
  const { row } = props
  const [open, setOpen] = useState(false)
  const classes = useRowStyles()

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>

        <TableCell align='right'>{row.calories}</TableCell>

        <TableCell align='right'>{row.fat}</TableCell>

        <TableCell align='right'>{row.carbs}</TableCell>

        <TableCell align='right'>{row.protein}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Histerija
              </Typography>

              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>

                      <TableCell>{historyRow.customerId}</TableCell>

                      <TableCell align='right'>{historyRow.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Row
