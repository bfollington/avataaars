import * as React from 'react';
import { AccessoriesOption, Selector } from '../../../options';
import Blank from './Blank';
import Prescription01 from './Prescription01';
import Prescription02 from './Prescription02';
import Round from './Round';


export default class Accessories extends React.Component {
  render() {
    return (
      <Selector defaultOption={Blank} option={AccessoriesOption}>
        <Blank />
        <Prescription01 />
        <Prescription02 />
        <Round />
      </Selector>
    )
  }
}
