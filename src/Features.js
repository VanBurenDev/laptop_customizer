import React from 'react'
import Options from './Options'
import slugify from 'slugify'

export default function Features(props) {
  
  return (
    <fieldset className="feature" key={props.idx}>
      <legend className="feature__name">
        <h3>{props.featureName}</h3>
      </legend>
      {props.feature.map(item => {
        const itemHash = slugify(JSON.stringify(item))
        return (
          <Options 
            key={itemHash}
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
