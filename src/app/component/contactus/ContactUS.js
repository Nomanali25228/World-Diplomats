import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactUS = () => {
  const items = [
    {
      icon: <MdEmail size={22} />,
      title: "Email",
      value: "support@neotericsummit.com",
    },
    {
      icon: <MdLocationOn size={22} />,
      title: "Location",
      value: (
        <>
          1309 Coffeen Avenue STE 1200 <br /> Sheridan, Wyoming 82801
        </>
      ),
    },
    {
      icon: <MdPhone size={22} />,
      title: "Phone",
      value: "+1 (484) 263-4682",
    },
    {
      icon: <FaWhatsapp size={22} />,
      title: "Whatsapp",
      value: "+1 (484) 263-4682",
    },
    {
      icon: <FaFacebook size={22} />,
      title: "Facebook",
      value: "facebook.com/neotericsummit",
    },
    {
      icon: <FaInstagram size={22} />,
      title: "Instagram",
      value: "instagram.com/neotericsummit",
    },
  ];

  return (

    <div className="mb-14">
        <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50]" data-aos="fade-up">
          Contact US 
        </h2>
        <p className="text-gray-500 text-lg mt-2">WE ARE HERE TO HELP</p>

        {/* PREMIUM DIVIDER */}
         <div className="flex items-center justify-center gap-2 mt-3">
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
  <span className="w-3 h-3 bg-blue-500 rounded-full dot-animate"></span>
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
</div>
      </div>


    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 p-6">
      


      {/* LEFT — Google Map */}
      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11557.776668611428!2d-106.9800057!3d44.7970346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x533635e2f8123e8d%3A0x40bc8a9e82673c06!2s1309%20Coffeen%20Ave%20STE%201200%2C%20Sheridan%2C%20WY%2082801!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="350"
          className="rounded-xl"
          loading="lazy"
        ></iframe>
      </div>

      {/* RIGHT — Contact List */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4 border-l-2 border-gray-300 pl-4">
            <div className="text-gray-700">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default ContactUS;
