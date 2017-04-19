import React from 'react';
import '../styles/Thumbnail';

const Thumbnail = ({ image, name, singer, size }) => (
  <div className="media">
    <div className="media-left">
      <img src={image} alt="avatar" className={`media-object avatar-${size}`} />
    </div>
    <div className="media-body">
      <h5 className="media-header">{name}</h5>
      <h6 className="media-header">{singer}</h6>
    </div>
  </div>
);

export default Thumbnail;