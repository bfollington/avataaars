import * as React from 'react';
import { MouthOption, Selector } from '../../../options';
import Concerned from './Concerned';
import Disbelief from './Disbelief';
import Grimace from './Grimace';
import Sad from './Sad';
import ScreamOpen from './ScreamOpen';
import Serious from './Serious';


export default class Mouth extends React.Component {
  render() {
    return (
      <Selector defaultOption={Concerned} option={MouthOption}>
        <Concerned />
        <Disbelief />
        <Grimace />
        <Sad />
        <ScreamOpen />
        <Serious />
      </Selector>
    )
  }
}
