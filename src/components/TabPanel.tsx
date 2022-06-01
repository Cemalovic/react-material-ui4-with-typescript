import { Box, Typography } from '@material-ui/core'
import { TabPanelProps } from '../modules/TabPanelProps'

const TabPanel = (props: TabPanelProps) => {
  const { children, index, value, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default TabPanel
