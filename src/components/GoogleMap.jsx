import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[500px] mt-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4951747374325!2d78.05001307540246!3d30.33687407477769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390928dd82494539%3A0x560bf2bedb5ee33a!2sSARC%20TECHNOLOGY-%7C%7C%20Best%20digital%20marketing%20company%20in%20Uttarakhand%20%7C%7C%20Best%20digital%20marketing%20company%20in%20Dehradun%20%7C%7C!5e0!3m2!1sen!2sin!4v1754545312049!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
