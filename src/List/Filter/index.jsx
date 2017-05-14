import React from 'react';
import { Wrapper, Icon, Button, Label, FilterSize, FilterSex } from './styled';

export default () => (
  <Wrapper>
    <Icon />
    <FilterSex>
      <Button isActive first type="button">
        Man
      </Button>
      <Button type="button">Woman</Button>
    </FilterSex>
    <FilterSize>
      <Label>Size</Label>
      <Button type="button">36</Button>
      <Button type="button">37</Button>
      <Button type="button">38</Button>
      <Button type="button">39</Button>
      <Button type="button">40</Button>
      <Button isActive type="button">
        41
      </Button>
      <Button type="button">42</Button>
    </FilterSize>
  </Wrapper>
);
