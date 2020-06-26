import React from 'react'
import Total from './Total'
import Summary from './Summary'

export default function Section(props) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx
        const selectedOption = props.selected[feature]
        return <Summary
          key={featureHash}
          idx = {featureHash}
          featureName = {feature}
          selectedOption ={selectedOption}
          />
      })}
      
      <Total
        selected = {props.selected}
      />
    </section>
  )
}
