import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function WhatsAppContact() {
  const phoneNumber = '7760038837'; // Replace with your WhatsApp phone number
  const customWelcomeMessage = 'Dear Shri Ganapathi Label Tech. I hope this message finds you well. I am writing to enquire about your product. Please let me know if there is a brochure or Product List available. Looking forward to your response. THANK YOU'; // Custom welcome message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customWelcomeMessage)}`;
    window.open(url, '_blank');
  };

  return (<div style={{ 
}}>
  
<button onClick={handleClick}>
<div style={{color:'green'}}>
<WhatsAppIcon/>

  </div>
      Contact via WhatsApp 


    </button>
  </div>
    
  );
}

export default WhatsAppContact;
