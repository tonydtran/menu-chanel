import { useState } from 'react'
import MenuList from './MenuList'
import { findById } from '../../helpers'
import './index.scss'

function Menu({ menuData }) {
  const [navHistory, setNavHistory] = useState([1])
  const [nextTransition, setNextTransition] = useState('initial')

  const handleNavigate = ({ direction, id }) => {
    if (direction === 'next') {
      setNavHistory([...navHistory, id])
      setNextTransition('next')
    } else {
      setNavHistory(navHistory.slice(0, -1))
      setNextTransition('back')
    }
  }

  const displayItems = findById(
    menuData,
    navHistory[navHistory.length - 1]
  )

  return (
    <div className="menu-container">
      <MenuList
        items={displayItems}
        handleNavigate={handleNavigate}
        nextTransition={nextTransition}
      />
    </div>
  )
}

export default Menu
