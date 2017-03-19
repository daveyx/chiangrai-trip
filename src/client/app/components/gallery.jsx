import ImageGallery from 'react-image-gallery';
import React from 'react';

export default class Gallery extends React.Component {
  constructor(props) {
    super();
  }

  handleImageLoad(event) {
  }

  render() {
    return (
      <ImageGallery
        items={this.props.images}
        slideInterval={800}
        onImageLoad={this.handleImageLoad} />
    );
  }
}
