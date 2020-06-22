import React from 'react'
import slugify from 'slugify'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default function Options(props) {
  const itemHash = slugify(JSON.stringify(props.item))
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(props.featureName)}
        checked={props.item.name === props.selected[props.featureName].name}
        onChange={e => props.updateFeature(props.featureName, props.item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}
