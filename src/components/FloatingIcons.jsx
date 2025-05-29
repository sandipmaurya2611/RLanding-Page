import React from 'react'

function FloatingIcons() {
  return (

     <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          <a href="tel:+91 7249400874" className="bg-green-600 p-5 rounded-full shadow-lg">
            <FiPhoneCall className="text-white text-xl" />
          </a>
          <a href="https://wa.me/7249400874" target="_blank" rel="noopener noreferrer" className="bg-purple-600 p-5 rounded-full shadow-lg">
            <BsWhatsapp className="text-white text-xl" />
          </a>
        </div>     
    
  )
}

export default FloatingIcons
