import React from 'react';

function GoogleMap() {
  return (
    <div>
      <h1>My Map Location</h1>
      <iframe
        title="Google Maps Location"
        width="600"
        height="300"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/place/PUNYAKOTI+CYBER+CENTER/@13.0000375,77.504356,15z/data=!4m6!3m5!1s0x3bae3d1638cfbcb5:0x15a4f00b51a8a124!8m2!3d13.0000375!4d77.504356!16s%2Fg%2F11j4mscjk3?entry=ttu"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
