import React, { useState } from 'react';
import questionIcon from '../../assets/question_mark.png';
import menuIcon from '../../assets/menu_icon.png';

const Details = () => {
  const [selectedTab, setSelectedTab] = useState('about'); // State to track the selected tab

  // Content for each tab
  const content = {
    about: (
      <>
        <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
        <p className="mt-2">
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years. My wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years. My wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years. My wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...

        </p>
      </>
    ),
    experiences: (
      <>
        <p>I have over 10 years of experience in sales, specializing in CRM solutions and customer relationships.</p>
        <p className="mt-2">
          At Salesforce, I've helped over 50 businesses streamline their operations and improve their customer engagement.
        </p>
      </>
    ),
    recommended: (
      <>
        <p>I highly recommend checking out our latest Salesforce CRM features that could help boost your team's productivity.</p>
        <p className="mt-2">
          Don't miss out on our upcoming webinar where we'll be discussing these new features in detail.
        </p>
      </>
    ),
  };

  return (
    <div className="flex justify-center ">
      {/* Side Bar Icons */}
      <div className="flex flex-col items-center px-2">
        <span className="text-white">
          <img src={questionIcon} alt="question" style={{ width: '24px', height: '24px' }} />
        </span>
        <span className="text-white mt-24">
          <img src={menuIcon} alt="menu" style={{ width: '24px', height: '24px' }} />
        </span>
      </div>

   
      <div className="flex flex-col justify-center items-center mx-auto" style={{ width: "90%", paddingRight: "2.5rem" }}>
       
        <div 
  className="flex justify-between items-center  overflow-hidden w-full max-w-4xl mb-4 px-2 sm:px-4"
  style={{ 
    height: "62px", 
    color:"#A3ADB2",
    borderRadius: "23px", 
    backgroundColor: "#171717", 
    boxShadow: "inset 0px 4.96px 12.4px 2.48px rgba(0,0,0,0.25)" 
  }}
>
  <button
    className={`flex-grow text-center py-3 lg:px-3     text-xs lg:text-lg  hover:bg-gray-700 transition-colors ${selectedTab === 'about' ? 'bg-gray-700' : ''}`}
    style={{ borderRadius: "16px" }}
    onClick={() => setSelectedTab('about')}
  >
    About Me
  </button>
  <button
    className={`flex-grow text-center py-3  mx-2 text-xs lg:text-lg  hover:bg-gray-700 transition-colors ${selectedTab === 'experiences' ? 'bg-gray-700' : ''}`}
    style={{ borderRadius: "16px" }}
    onClick={() => setSelectedTab('experiences')}
  >
    Experiences
  </button>
  <button
    className={`flex-grow text-center py-3  text-xs lg:text-lg hover:bg-gray-700 transition-colors ${selectedTab === 'recommended' ? 'bg-gray-700' : ''}`}
    style={{ borderRadius: "16px" }}
    onClick={() => setSelectedTab('recommended')}
  >
    Recommended
  </button>
</div>


        {/* Content Area */}
        <div className=" p-4 rounded-xl overflow-auto h-48 max-w-4xl" style={{color:"#969696"}}>
          {content[selectedTab]}
        </div>
      </div>
    </div>
  );
};

export default Details;
