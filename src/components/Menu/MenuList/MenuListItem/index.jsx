import ArrowNext from '../../../../assets/arrow-right.svg?react'
import ArrowBack from '../../../../assets/arrow-left.svg?react'

import './index.scss'

function MenuListItem({ item, handleNext }) {
  const hasSubItems = !!item.subItems.length

  const handleClick = () => {
    if (hasSubItems) {
      handleNext(item.id)
    }
  }

  return (
    <div className="menu-list-item-container" onClick={handleClick}>
      <div>{item.name}</div>
      {hasSubItems && (
        <div>
          <ArrowNext />
        </div>
      )}
    </div>
  )
}

export function MenuListBackButton({ handleBack }) {
  return (
    <div className="menu-list-item-container" onClick={handleBack}>
      <ArrowBack />
    </div>
  )
}

export default MenuListItem
