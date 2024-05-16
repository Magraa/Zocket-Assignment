import CTA from './CTA';
import ImgUpload from './ImgUpload';
import CustomBgColor from './CustomBgColor';
import CustomAddContent from './CustomAddContent';
// import './EditBoxComp.css'

function EditBoxComponent() {
  return (
    <div className='flex flex-col sm:w-1/2 w-screen bg-white text-gray-800 p-6 rounded-lg shadow-lg'>
      <h1 className='text-center text-lg sm:text-2xl font-bold mt-14 text-red-600'>Ad Customization</h1>
      <h2 className='text-center text-sm sm:text-lg mt-2 text-red-400'>Customize your ad and get the templates accordingly</h2>
      
      <div className='sm:ml-20 ml-10 mt-14 p-4 bg-red-100 rounded-md shadow-md sm:w-5/6 w-11/12'>
        <ImgUpload />
      </div>
      
      <div className="flex items-center mt-5 mb-4 mx-16">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="text-center text-sm sm:text-lg text-gray-500 mx-2">Edit Your Content</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      
      <div className='sm:ml-20 ml-10 mt-10 p-4 bg-blue-100 rounded-md shadow-md sm:w-5/6 w-11/12'>
        <CustomAddContent />
      </div>
      
      <div className='sm:ml-20 ml-10 mt-10 p-4 bg-green-100 rounded-md shadow-md sm:w-5/6 w-11/12'>
        <CTA />
      </div>
      
      <div className='sm:ml-20 ml-10 mt-10 p-4 bg-yellow-100 rounded-md shadow-md sm:w-5/6 w-11/12'>
        <CustomBgColor />
      </div>
    </div>
  );
}

export default EditBoxComponent;
