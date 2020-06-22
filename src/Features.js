import React from 'react'
import Options from './OptionsInput';
import STORE from './STORE';

export default function Features(props) {
  return (
    <fieldset className="feature" key={props.idx}>
      <legend className="feature__name">
        <h3>{STORE}</h3>
      </legend>
      {options}
    </fieldset>
  );
}
