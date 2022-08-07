import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMedia() {
  return (
    <div className="socialIcons">
      <SocialIcon url="https://www.pinterest.com/" network="pinterest" style={{ height: 50, width: 50 }} />
      <SocialIcon url="https://www.facebook.com/" network="facebook" style={{ height: 50, width: 50 }} />
      <SocialIcon url="https://www.twitter.com/" network="twitter" style={{ height: 50, width: 50 }} />
    </div>

  );
}

export default SocialMedia;
