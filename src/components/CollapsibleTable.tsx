import Row, { createData } from './Row'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

const rows = [
  createData('Pera', 200, 45, 11, 5),
  createData('Djura', 800, 77, 69, 8),
  createData('Mika', 100, 98, 21, 4),
  createData('Zika', 600, 35, 14, 11)
]

const CollapsibleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat</TableCell>
            <TableCell align='right'>Carbs</TableCell>
            <TableCell align='right'>Protein</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CollapsibleTable
