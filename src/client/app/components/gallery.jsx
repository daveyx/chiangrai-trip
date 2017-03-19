import ImageGallery from 'react-image-gallery';
import React from 'react';

export default class Gallery extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_01.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_01.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_02.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_02.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_10.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_10.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_20.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_20.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_30.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_30.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_40.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_40.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_50.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_50.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_70.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_70.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_80.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_80.jpg',
      },
      {
        original: 'http://daveyx.ga/chiangrai-trip/img/day1/day1_1_90.jpg',
        thumbnail: 'http://daveyx.ga/chiangrai-trip/img/day1/thumbs/day1_1_90.jpg',
      }
    ]

    return (
      <ImageGallery
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
    );
  }
}
