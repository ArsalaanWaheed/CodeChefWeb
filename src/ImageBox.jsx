import React from 'react'

export const ImageBox = ({ title, members }) => {
    return (
      <div className="w-screen  flex flex-col items-center">
        <h1 className="text-white w-[80vw]  text-center">{title}</h1>
        <div className= " flex snap-x md:justify-center p-5 gap-2 overflow-x-auto snap-mandatory hide-scrollbar sm:ml-10 w-full">
          {members.map((member) => (
            <div
              key={member}
              className="snap-center border-2 bg-gradient-to-b from-black to-green-600 rounded-[2em] border-green-300 flex-shrink-0 scroll-smooth text-black h-[30vh] w-[80vw] sm:w-[30vw]   flex items-center justify-center"
            >
              <h2 className="p-4 text-white">{member}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export const HorizontalScroll = () => {
    return (
      <div className="w-full overflow-x-auto p-5  gap-2  flex snap-x snap-mandatory hide-scrollbar">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="snap-center flex-shrink-0 w-[80vw] h-[30vh] border-2 border-ra border-green-300 flex items-center justify-center text-white text-2xl font-bold"
          >
            Div {num}
          </div>
        ))}
      </div>
    );
  };