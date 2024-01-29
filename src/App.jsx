import Menu from './components/Menu'
import mockMenuData from './mocks/menu.json'
import './App.scss'

function App() {
  return (
    <div className="app-container">
      <Menu menuData={mockMenuData} />
    </div>
  )
}

export default App
