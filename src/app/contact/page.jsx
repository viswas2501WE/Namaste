import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-4/3 bg-white py-12 text-gray-600">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-normal mb-8 text-gray-800">Contact</h1>
        <form className='mt-[20%]'>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <input
                type="email"
                placeholder="Email *"
                className="w-full px-4 py-3 border border-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-3 border border-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Comment"
              rows="3"
              className="w-full px-4 py-3 border border-gray-400  focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-transparent resize-y"
            ></textarea>
          </div>

          <div className="border-1 border-[#93826E] w-fit">
      <button className="flex justify-self-center bg-[#93826E] text-white border-white border-1 px-8 py-3" >
        Send
      </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;