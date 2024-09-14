import YandexMap from '@/components/map/map';
import { Phone, Email } from '@mui/icons-material';

function Contact() {
  return (
    <div className="m-auto p-4  dark:bg-gray-900">
      <div className='w-[80%] m-auto'>
        <div className="w-[100%] flex justify-between flex-col md:flex-row dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="w-full px-3 md:w-1/3 p-6 bg-gray-100 dark:bg-gray-700 rounded-l-lg">
            <div className="mb-8">
              <div className="flex items-center text-red-600 dark:text-red-400 mb-4">
                <Phone fontSize="large" />
                <h3 className="ml-2 text-lg font-semibold text-gray-800 dark:text-red-400">Call To Us</h3>
              </div>
              <p className=" dark:text-gray-300">We are available 24/7, 7 days a week.</p>
              <p className="mt-2 font-semibold text-gray-800 dark:text-white">Phone: +992 123456789</p>
            </div>
            <hr className="my-6 border-gray-400 dark:border-gray-600" />
            <div>
              <div className="flex items-center text-red-600 dark:text-red-400 mb-4">
                <Email fontSize="large" />
                <h3 className="ml-2 text-lg font-semibold text-gray-800 dark:text-red-400">Write To Us</h3>
              </div>
              <p className=" dark:text-gray-300">Fill out our form and we will contact you within 24 hours.</p>
              <p className="mt-2 font-semibold text-gray-800 dark:text-white">Emails: customer@exclusive.com</p>
              <p className="mt-1 font-semibold text-gray-800 dark:text-white">support@exclusive.com</p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-r-lg">
            <form className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="border border-gray-400 dark:border-gray-600 rounded-md p-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="border border-gray-400 dark:border-gray-600 rounded-md p-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="border border-gray-400 dark:border-gray-600 rounded-md p-2 w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                className="border border-gray-400 dark:border-gray-600 rounded-md p-2 w-full h-32 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              />
              <button 
                type="submit" 
                className="bg-red-600 dark:bg-red-600 text-white rounded-md py-2 px-6 w-full md:w-auto self-end"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className='py-[50px]'>
          <YandexMap />
        </div>
      </div>
    </div>
  );
}

export default Contact;
