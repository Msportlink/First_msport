import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-gray-300"
    >
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold inline border-b-4 border-pink-500 sm:text-7xl">
          About Us
        </h2>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        officia blanditiis deserunt neque vero dicta vel est consequatur
        quibusdam beatae distinctio quia, placeat, labore quis iste,
        reprehenderit tempore qui excepturi iure? Officia nisi numquam labore
        nam deserunt veritatis expedita vitae blanditiis ullam, quisquam
        molestiae qui minima! Soluta quidem quasi ad.
      </p>
      <div>
        <div>
          <div className="my-8 mx-auto">
            <div className="max-w-[800px]">
              <img src="msportgirls.webp" alt="girls" />
            </div>
            <h3 className="text-3xl font-semibold my-8">Our Girls Teams</h3>
            <p>
              Our girls teams are in three age ranges, the U12, U15 and U17.
              Each team has weekly trainings that are over seen by our trusted
              coaching crew.
            </p>
          </div>
          <div className="my-8 ">
            <div className="max-w-[800px]">
              <img src="msportboys.jpg" alt="boys" />
            </div>
            <h3 className="text-3xl font-semibold my-8">Our Boys Teams</h3>
            <p>
              Our boyss teams are in three age ranges, the U12, U15 and U17.
              Each team has weekly trainings that are over seen by our trusted
              coaching crew. to be continued ..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
