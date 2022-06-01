import TabsComponent from './components/TabsComponent'
import logo from './logo.svg'
import './App.css'
import CollapsibleTable from './components/CollapsibleTable'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <CollapsibleTable />
        <TabsComponent />
      </header>
    </div>
  )
}

export default App
