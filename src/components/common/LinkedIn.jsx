import React from 'react';

function LinkedInLink() {
  const linkedInUrl = 'https://www.linkedin.com/in/sgl-tech-7a59712ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2F8wJha%2FNQu6ShmutLjVizQ%3D%3D'; // Replace with your LinkedIn profile URL

  return (
    <>
    <div>
      <p>Connect with me on LinkedIn:</p>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>
    </div>
    {/* <button onClick={LinkedInLink}>
      Contact via WhatsApp
    </button> */}
    </>
  );
}

export default LinkedInLink;
