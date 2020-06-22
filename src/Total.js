import React from 'react'

export default function Total(props) {
  return (
      <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
    </div>
  )
}
