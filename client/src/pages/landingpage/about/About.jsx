import {
  about3hero,
  abouthero,
  data_driven,
  end_to_end,
  fash_forward,
  reliable_user,
  user_friendly,
} from "../../../assets/images";

export const About = () => {
  return (
    <div>
      <div className="h-96 w-full">
        <img
          className="relative w-full h-full mix-blend-overlay object-cover bg-[#35155D] blur-[1.5px]"
          src={abouthero}
          alt="hero background"
        />
        <div className="absolute top-0  w-3/4 p-2 m-auto max-md:h-auto max-md:w-auto max-md:m-auto max-md:p-auto ">
          <p className="text-white text-6xl font-bold text-center mt-48 ml-20 font-palanquin max-md:m-auto max-md:text-3xl max-md:mt-48 md: ">
            Take Your Apparel Brand to the Next Level with Fash-Craft
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-5 mb-4">
        <div className=" my-8 m-auto text-4xl text-[#35155D] font-semibold">
          <p className="font-palanquin">About Fash-Craft</p>
        </div>
        <div className="w-3/4 m-auto text-justify text-lg">
          <p className="font-palanquin">
            <span className="text-4xl font-semibold">W</span>elcome to
            Fash-Craft Fashion ERP, where precision and efficiency converge to
            empower your fashion business with comprehensive enterprise
            management. Fash-Craft ERP is more than just software; It is a
            dedicated solution designed to streamline and optimize every aspect
            of your fashion enterprise.
          </p>
        </div>
      </div>

      <div className="w-3/4 m-auto flex  flex-col gap-5 max-md:mb-10 ">
        <p className="m-auto text-3xl text-[#35155D] font-semibold font-palanquin my-6">
          Crafting Enterprise Efficiency
        </p>
        <div className="m-auto text-justify text-lg">
          <p className="font-palanquin">
            At Fash-Craft, we believe in the power of precision and the value of
            efficiency. Our ERP system is meticulously crafted to cater
            specifically to the intricate and ever-evolving needs of the fashion
            industry. We understand that in fashion, timing and accuracy are
            paramount.
          </p>
        </div>
      </div>

      <div className="w-3/4 flex justify-center items-center h-96 m-auto max-md:flex-col max-md:h-auto max-md:mb-8 ">
        <div className="w-96 max-md:w-auto max-md:mb-10">
          <p className="text-3xl text-[#35155D] font-semibold font-palanquin max-md:mb-10">
            Our Journey
          </p>
          <div className="m-auto text-justify text-lg">
            <p className="font-palanquin ">
              Founded in 2023, Fash-Craft Fashion ERP emerged as a solution
              driven by a team of passionate developers, fashion experts, and
              technology enthusiasts. Our journey began with a vision to
              transform fashion businesses into highly efficient and agile
              enterprises.
            </p>
          </div>
        </div>
        <div className="w-1/2 ml-auto max-md:w-auto max-md:m-auto">
          <img src={about3hero} className="w-96 h-64 rounded-3xl" />
        </div>
      </div>

      <div>
        <div className="bg-[#35155D] max-md:pb-0.5">
          <div className="w-3/4  m-auto max-md:mb-8">
            <p className="m-auto text-3xl text-white font-semibold font-palanquin mt-10 py-3 text-center">
              Why Choose Fash-Craft Fashion ERP
            </p>
          </div>

          <div className="w-3/4 flex justify-center items-center h-96 m-auto max-md:h-auto max-md:mb-10 max-md:flex-col-reverse">
            <div className="w-1/2 max-md:w-auto ">
              <img
                src={data_driven}
                className="w-96 h-64 rounded-3xl object-cover"
              />
            </div>
            <div className="w-96 mr-auto max-md:w-auto max-md:mb-10">
              <p className="text-3xl text-white font-semibold font-palanquin ">
                End-to-End Solution:
              </p>
              <div className="m-auto text-justify text-lg">
                <p className="font-palanquin text-white ">
                  Fash-Craft offers a comprehensive suite of ERP modules
                  tailored to the fashion industry. From design and production
                  management to inventory control and sales analysis, our ERP
                  system covers it all.
                </p>
              </div>
            </div>
            {/* <div className="text-white content-start">
              |
            </div> */}
          </div>

          <div className="w-3/4 flex justify-center items-center h-96 m-auto max-md:flex-col max-md:h-auto max-md:mb-10">
            <div className="w-96 max-md:w-auto max-md:mb-10">
              <p className="text-3xl text-white font-semibold font-palanquin ">
                Fashion-Forward Features:
              </p>
              <div className="m-auto text-justify text-lg">
                <p className="font-palanquin text-white">
                  Our ERP is built by fashion experts for fashion enterprises.
                  It includes tools for design and trend management, production
                  planning, and supply chain optimization.
                </p>
              </div>
            </div>
            <div className="w-1/2 ml-auto max-md:w-auto max-md:m-auto ">
              <img src={fash_forward} className="w-96 h-64 rounded-3xl" />
            </div>
          </div>

          <div className="w-3/4 flex justify-center items-center h-96 m-auto max-md:flex-col-reverse max-md:h-auto max-md:mb-10">
            <div className="w-1/2 max-md:w-auto">
              <img
                src={end_to_end}
                className="w-96 h-64 rounded-3xl object-cover"
              />
            </div>
            <div className="w-96 mr-auto max-md:w-auto max-md:mb-10">
              <p className="text-3xl text-white font-semibold font-palanquin ">
                Data-Driven Decision-Making:
              </p>
              <div className="m-auto text-justify text-lg">
                <p className="font-palanquin text-white ">
                  Harness the power of real-time data analytics to make informed
                  decisions, adapt to market trends, and stay competitive in the
                  dynamic world of fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 flex justify-center items-center h-96 m-auto max-md:flex-col max-md:h-auto max-md:mb-10">
          <div className="w-96 max-md:w-auto max-md:mb-10">
            <p className="text-3xl text-[#35155D] font-semibold font-palanquin ">
              User-Friendly Interface:
            </p>
            <div className="m-auto text-justify text-lg">
              <p className="font-palanquin text-[#35155D]">
                We prioritize ease of use. Fash-Craft Fashion ERP is designed
                with an intuitive interface, making it accessible to users
                across your organization.
              </p>
            </div>
          </div>
          <div className="w-1/2 ml-auto max-md:w-auto max-md:m-auto">
            <img src={user_friendly} className="w-96 h-64 rounded-3xl" />
          </div>
        </div>

        <div className="w-3/4 flex justify-center items-center h-96 m-auto max-md:flex-col-reverse max-md:h-auto max-md:mb-10">
          <div className="w-1/2 max-md:w-auto max-md:m-auto">
            <img
              src={reliable_user}
              className="w-96 h-64 rounded-3xl object-cover"
            />
          </div>
          <div className="w-96 mr-auto max-md:w-auto max-md:mb-10">
            <p className="text-3xl text-[#35155D] font-semibold font-palanquin ">
              Reliability and Scalability:
            </p>
            <div className="m-auto text-justify text-lg">
              <p className="font-palanquin text-[#35155D] ">
                Trust in the reliability of our ERP system, knowing it can scale
                with your growing fashion enterprise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
