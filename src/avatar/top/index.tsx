import * as React from 'react';
import { Selector, TopOption } from '../../options';
import Hat from './Hat';
import Hijab from './Hijab';
import LongHairBigHair from './LongHairBigHair';
import LongHairBob from './LongHairBob';
import LongHairBun from './LongHairBun';
import LongHairCurly from './LongHairCurly';
import LongHairCurvy from './LongHairCurvy';
import LongHairDreads from './LongHairDreads';
import LongHairFro from './LongHairFro';
import LongHairFroBand from './LongHairFroBand';
import LongHairMiaWallace from './LongHairMiaWallace';
import LongHairNotTooLong from './LongHairNotTooLong';
import LongHairShavedSides from './LongHairShavedSides';
import LongHairStraight from './LongHairStraight';
import LongHairStraight2 from './LongHairStraight2';
import LongHairStraightStrand from './LongHairStraightStrand';
import NoHair from './NoHair';
import ShortHairDreads01 from './ShortHairDreads01';
import ShortHairDreads02 from './ShortHairDreads02';
import ShortHairFrizzle from './ShortHairFrizzle';
import ShortHairShaggyMullet from './ShortHairShaggyMullet';
import ShortHairShortCurly from './ShortHairShortCurly';
import ShortHairShortFlat from './ShortHairShortFlat';
import ShortHairShortRound from './ShortHairShortRound';
import ShortHairShortWaved from './ShortHairShortWaved';
import ShortHairSides from './ShortHairSides';
import ShortHairTheCaesar from './ShortHairTheCaesar';
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart';
import Turban from './Turban';


export default class Top extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Selector defaultOption={LongHairStraight} option={TopOption}>
        <NoHair>{children}</NoHair>
        <Hat>{children}</Hat>
        <Hijab>{children}</Hijab>
        <Turban>{children}</Turban>
        <LongHairBigHair>{children}</LongHairBigHair>
        <LongHairBob>{children}</LongHairBob>
        <LongHairBun>{children}</LongHairBun>
        <LongHairCurly>{children}</LongHairCurly>
        <LongHairCurvy>{children}</LongHairCurvy>
        <LongHairDreads>{children}</LongHairDreads>
        <LongHairFro>{children}</LongHairFro>
        <LongHairFroBand>{children}</LongHairFroBand>
        <LongHairNotTooLong>{children}</LongHairNotTooLong>
        <LongHairShavedSides>{children}</LongHairShavedSides>
        <LongHairMiaWallace>{children}</LongHairMiaWallace>
        <LongHairStraight>{children}</LongHairStraight>
        <LongHairStraight2>{children}</LongHairStraight2>
        <LongHairStraightStrand>{children}</LongHairStraightStrand>
        <ShortHairDreads01>{children}</ShortHairDreads01>
        <ShortHairDreads02>{children}</ShortHairDreads02>
        <ShortHairFrizzle>{children}</ShortHairFrizzle>
        <ShortHairShaggyMullet>{children}</ShortHairShaggyMullet>
        <ShortHairShortCurly>{children}</ShortHairShortCurly>
        <ShortHairShortFlat>{children}</ShortHairShortFlat>
        <ShortHairShortRound>{children}</ShortHairShortRound>
        <ShortHairShortWaved>{children}</ShortHairShortWaved>
        <ShortHairSides>{children}</ShortHairSides>
        <ShortHairTheCaesar>{children}</ShortHairTheCaesar>
        <ShortHairTheCaesarSidePart>{children}</ShortHairTheCaesarSidePart>
      </Selector>
    )
  }
}
