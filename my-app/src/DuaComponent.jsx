import React from 'react';

const DuaComponent = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with light blue background */}
      <header className="bg-blue-100 text-gray-800 p-4 flex flex-col sm:flex-row items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-0 text-center sm:text-left">
          My Dua of the Day
        </h1>
        
        <div className="flex space-x-2 sm:space-x-4">
          {['home', 'duas', 'about'].map((tab) => (
            <a
              key={tab}
              href={`#${tab}`}
              className="px-4 py-2 rounded-lg font-medium capitalize transition-all bg-blue-200 text-gray-800 hover:bg-blue-300"
            >
              {tab}
            </a>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 bg-white">
  

        {/* Duas Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* First Dua */}
          <div className="text-center">
            <div className="bg-gray-50 p-8 rounded-xl mb-4 shadow-sm">
              <p className="text-4xl md:text-3xl leading-loose text-gray-800" style={{fontFamily: 'Amiri, serif'}}>
                اللهم إني أسألك العفو والعافية
              </p>
            </div>
            <p className="text-lg text-gray-600 font-medium">Sunan Abi Dawud 5074</p>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center justify-center">
            <div className="h-px bg-blue-100 w-3/4"></div>
          </div>

          {/* Second Dua */}
          <div className="text-center">
            <div className="bg-gray-50 p-8 rounded-xl mb-4 shadow-sm">
              <p className="text-4xl md:text-3xl leading-loose text-gray-800" style={{fontFamily: 'Amiri, serif'}}>
                رَّبِّ زِدْنِي عِلْمًا
              </p>
            </div>
            <p className="text-lg text-gray-600 font-medium">Quran 20:114</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">May these prayers bring peace to your day</p>
        </div>
      </main>
    </div>
  );
};

export default DuaComponent;