import React from 'react';


const Partners = () => {
  return (
    <div
      id="partners"
      className="w-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-gray-300"
    >
      {/*container */}
      <div>
        <div>
          <h2 className="text-4xl mb-4 font-bold inline border-b-4 border-pink-500 sm:text-7xl">Partners</h2>
          <p className="my-8">
            We are eternally grateful for the continued support of our partner
            all over the world. The wonderful support ypu give us brings hope to
            many, and it allows us to share the joy of football with the world.
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://addbrand.eu/" target="_blank" rel="noreferrer">
              <img className="w-60 mx-auto" src='Addbrand.png' alt="addbrand" />
              <p className="pb-4 font-semibold">ADDBRAND</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src='bubs_logo.png' alt="addbrand" />
            <p className="pb-4 font-semibold">BUBS GODIS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-60 mx-auto" src='Addbrand.png' alt="addbrand" />
            <p className="pb-4 font-semibold">Addbrand</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-40 mx-auto" src='luzzsport.jpg' alt="addbrand" />
            <p className="pb-4 font-semibold">LUZZ SPORTS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-60 mx-auto" src='Addbrand.png' alt="addbrand" />
            <p className="pb-4 font-semibold">Addbrand</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-60 mx-auto" src='Addbrand.png' alt="addbrand" />
            <p className="pb-4 font-semibold">Addbrand</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-60 mx-auto" src='Addbrand.png' alt="addbrand" />
            <p className="pb-4 font-semibold">Addbrand</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-60 mx-auto" src='Addbrand.png' alt="addbrand" />
            <p className="pb-4 font-semibold">Addbrand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
