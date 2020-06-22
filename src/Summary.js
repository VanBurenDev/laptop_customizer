import React from 'react'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default function Summary(props) {
  return (
    <div className="summary__option" key={props.idx}>
      <div className="summary__option__label">{props.featureName} </div>
      <div className="summary__option__value">{props.selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.selectedOption.cost)}
      </div>
    </div>
  )
}
