import { ChangeEvent, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './TabPanel'

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

const TabsComponent = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel index={0} value={value}>
        Item One
      </TabPanel>

      <TabPanel index={1} value={value}>
        Item Two
      </TabPanel>

      <TabPanel index={2} value={value}>
        Item Three
      </TabPanel>
    </div>
  )
}

export default TabsComponent
