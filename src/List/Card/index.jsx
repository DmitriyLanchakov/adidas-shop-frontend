import React from 'react';
import { Wrapper, MainLink, Image, Label } from './styled';

export default ({ sale, img, price }) => (
  <Wrapper>
    <Image src={img} alt="shoe" />
    <MainLink sale={sale} to="/item">{price}</MainLink>
    {sale && <Label>Sale</Label>}
  </Wrapper>
);
