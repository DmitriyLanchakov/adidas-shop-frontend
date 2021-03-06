import React from 'react';
import { Wrapper, MainLink, Image, LabelWrapper } from './styled';
import Label from './../../../components/Label';

export default ({ sale, img, price, to }) => (
  <Wrapper>
    <Image src={img} alt="shoe" />
    <MainLink sale={sale} to={to}>{price}</MainLink>
    {sale && <LabelWrapper><Label /></LabelWrapper>}
  </Wrapper>
);
