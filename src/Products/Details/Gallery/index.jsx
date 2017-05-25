import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const BigImage = styled.img`
  display: block;
  width: 70%;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-left: 80px;
`;

const images = [
  require('./../../../assets/img/1bitmap.jpg'),
  require('./../../../assets/img/2bitmap.jpg'),
  require('./../../../assets/img/3bitmap.jpg'),
  require('./../../../assets/img/4bitmap.jpg'),
];

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 3 };
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage(activeIndex) {
    this.setState({ activeIndex });
  }

  render() {
    return (
      <div>
        <div>
          <BigImage src={images[this.state.activeIndex]} alt="shoe" />
        </div>
        <Container>
          {images.map((image, index) => (
            <Image
              img={image}
              index={index}
              isActive={this.state.activeIndex === index}
              handleChangeImage={this.handleChangeImage}
              activeIndex={this.state.activeIndex}
              alt="shoe"
            />
          ))}
        </Container>
      </div>
    );
  }
}
