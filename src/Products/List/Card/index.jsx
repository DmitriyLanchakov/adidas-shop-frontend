import React from 'react';
import { Wrapper, MainLink, Image, LabelWrapper } from './styled';
import Label from './../../../components/Label';

export default ({ sale, img, price }) => (
  <Wrapper>
    <Image src={img} alt="shoe" />
    <MainLink sale={sale} to="/item">{price}</MainLink>
    {sale && <LabelWrapper><Label /></LabelWrapper>}
  </Wrapper>
);
