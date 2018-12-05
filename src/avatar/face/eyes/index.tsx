import * as React from 'react';
import { EyesOption, Selector } from '../../../options';
import Close from './Close';
import Cry from './Cry';
import Default from './Default';
import Dizzy from './Dizzy';
import Side from './Side';
import Squint from './Squint';
import Surprised from './Surprised';


export default class Eyes extends React.Component {
  render() {
    return (
      <Selector defaultOption={Default} option={EyesOption}>
        <Close />
        <Cry />
        <Default />
        <Dizzy />
        <Side />
        <Squint />
        <Surprised />
      </Selector>
    )
  }
}
