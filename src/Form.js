import React from 'react';
import Features from './Features'

export default function Form(props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {Object.keys(props.allFeatures).map((feature, idx) => {
      const featureHash = feature + '-' + idx
      return <Features
        updateFeature = {props.updateFeature}
        selected = {props.selected}
        idx={featureHash}
        key={featureHash}
        feature = {props.allFeatures[feature]}
        featureName = {feature}
      />})}
    </form>
  )
}
