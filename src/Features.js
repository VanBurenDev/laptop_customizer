import React from 'react'
import Options from './Options'

export default function Features(props) {
  return (
    <fieldset className="feature" key={props.idx}>
      <legend className="feature__name">
        <h3>{props.featureName}</h3>
      </legend>
      {props.feature.map(item => {
      return (
        <Options 
          updateFeature={props.updateFeature} 
          selected ={props.selected} 
          featureName={props.featureName} 
          item={item}
        />
      )
      })}
    </fieldset>
  );
}
