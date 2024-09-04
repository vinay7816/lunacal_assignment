import React, { useState } from 'react';
import questionIcon from '../../assets/question_mark.png';
import menuIcon from '../../assets/menu_icon.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import testimg from '../../assets/test_img.jpeg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Gallery = () => {
  // State to store the list of image URLs
  const [images, setImages] = useState([testimg, testimg, testimg]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleNext = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex justify-center ">
      {/* Side Bar Icons */}
      <div className="flex flex-col  items-center px-2">
        <span className="text-white">
          <img src={questionIcon} alt="question" style={{ width: '24px', height: '24px' }} />
        </span>
        <span className="text-white mt-24">
          <img src={menuIcon} alt="menu" style={{ width: '24px', height: '24px' }} />
        </span>
      </div>

      {/* Inner Content */}
      <div className="flex flex-col justify-center items-center mx-auto" style={{ width: '90%' }}>
        <div className="flex justify-between items-center w-full" style={{ width: '100%',paddingRight:"2.5rem" }}>
        <button
  className="text-center text-xs lg:text-lg lg:rounded-2xl rounded-lg px-2 lg:px-6 mx-1 lg:mx-2 text-white transition-transform transform hover:scale-105 active:scale-95 duration-300 ease-in-out"
  style={{
    backgroundColor: '#171717',
    fontWeight: "600",
    width: '145px',   
    height: '54px',   
    boxShadow: "inset 0px 4px 10px 2px rgba(0,0,0,0.25)",
  }}
>
  Gallery
</button>


          <div className="flex items-center justify-center space-x-5" style={{ minWidth: '250px' }}>
            <label
              className="flex items-center justify-center lg:text-md text-xs px-2 lg:px-3 text-white font-semibold cursor-pointer transition-transform transform hover:scale-90 duration-500 ease-in-out"
              style={{
                backgroundColor: '#363C43',
                
                boxShadow: '0 4px 4px 2px rgba(0, 0, 0, 0.25),-0px -4px 4px 0px rgba(225,255,255,0.25),inset 0px 3px 3px 0px rgba(255,255,255,0.25)',
                borderRadius: '9999px',
                border:"none",
                paddingTop:"9px",
                paddingBottom:"9px",
                fontWeight:"500"
                
              }}
            >
              + ADD IMAGE
              <input 
                type="file" 
                multiple 
                accept="image/*" 
                onChange={handleAddImage} 
                style={{ display: 'none' }} 
              />
            </label>

            {/* Navigation Buttons */}
            <div className="flex space-x-4 lg:space-x-8">
              <button
                className="text-center py-2 transition-transform transform hover:scale-90 duration-500 ease-in-out"
                style={{
                  height: '46px',
                  width: '46px',
                  backgroundColor: '#161718',
                  color: 'white',
                  borderRadius: '50%',
                  boxShadow: '-5px -3px 30px -10px rgba(150, 190, 231, 1),4px 5px 30px 5px rgba(16, 18, 19, 1)',
                }}
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ArrowBackIcon />
              </button>
              <button
                className="text-center py-2 transition-transform transform hover:scale-90 duration-500 ease-in-out"
                style={{
                  height: '46px',
                  width: '46px',
                  backgroundColor: '#161718',
                  borderRadius: '50%',
                  color: 'white',
                  boxShadow: '-5px -3px 30px -10px rgba(150, 190, 231, 1),4px 5px 30px 5px rgba(16, 18, 19, 1)'
                }}
                onClick={handleNext}
                disabled={currentIndex + 3 >= images.length}
              >
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area for Images */}
        <div className="mt-4 text-white  rounded-x" style={{paddingRight:"2.5rem"}}>
          <div className="flex justify-center overflow-hidden space-x-4" style={{ width: '100%', minHeight: '200px' }}>
            {visibleImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`img${index + 1}`}
                className="rounded-2xl overflow-hidden"
                style={{ height: '179px', width: '190px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;