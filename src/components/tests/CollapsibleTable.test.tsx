import { render, screen } from '@testing-library/react'
import CollapsibleTable from '../CollapsibleTable'

test('should have table', () => {
  render(<CollapsibleTable />)

  const table = screen.getByRole('table')
  const tableRows = screen.getAllByRole('row')
  expect(table).toBeInTheDocument()
  expect(tableRows).toHaveLength(9)
})
