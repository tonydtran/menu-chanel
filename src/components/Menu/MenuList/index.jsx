import { useState, useEffect } from 'react'
import MenuListItem, { MenuListBackButton } from './MenuListItem'
import './index.scss'
import { animationSpeed } from './index.scss?export'

const TRANSITIONS = {
  initial: 'menu-list-container',
  next: 'menu-list-container menu-list-container--next',
  back: 'menu-list-container menu-list-container--back',
}

function MenuList({ items, handleNavigate, nextTransition }) {
  const [transition, setTransition] = useState(TRANSITIONS.initial)

  useEffect(() => {
    setTransition(TRANSITIONS[nextTransition])
    const timer = setTimeout(() => {
      setTransition(TRANSITIONS.initial)
      clearTimeout(timer)
    }, animationSpeed)
  }, [items, nextTransition])

  const handleBack = () => {
    handleNavigate({ direction: 'back' })
  }

  const handleNext = id => {
    handleNavigate({ direction: 'next', id })
  }

  return (
    <div className={transition}>
      {items.level > 0 && <MenuListBackButton handleBack={handleBack} />}
      {items.subItems.map(item => (
        <MenuListItem
          key={`item-${item.id}`}
          item={item}
          handleNext={handleNext}
        />
      ))}
    </div>
  )
}

export default MenuList
