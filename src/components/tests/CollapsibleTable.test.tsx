import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CollapsibleTable from '../CollapsibleTable'

test('should have table, rows and find another table on button click', async () => {
  render(<CollapsibleTable />)

  const collapsibleTable = screen.getByRole('table', {
    name: /collapsible table/
  })
  const tableRows = screen.getAllByRole('row')
  expect(collapsibleTable).toBeInTheDocument()
  expect(tableRows).toHaveLength(9)

  const buttonArrow = screen.getAllByRole('button', { name: /expand row/ })
  expect(buttonArrow).toHaveLength(4)

  userEvent.click(buttonArrow[0])
  const accordianTable = await screen.findByRole('table', { name: /purchases/ })
  expect(accordianTable).toBeInTheDocument()
})
