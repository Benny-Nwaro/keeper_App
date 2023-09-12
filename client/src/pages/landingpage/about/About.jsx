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
      <div className="h-96 w-full relative">
        <img
          className="w-full h-full absolute mix-blend-overlay object-cover bg-[#35155D]"
          // src="https://t3.ftcdn.net/jpg/05/07/61/62/240_F_507616218_CbQmHTlF5jcOrcgoBYskucyd1XZzElnQ.jpg"
          // src="https://static.vecteezy.com/system/resources/thumbnails/001/313/515/small/blue-textured-background-with-sewing-tools-free-photo.jpg"
          src={abouthero}
          alt="hero background"
        />
        <div className="w-3/4 p-2 m-auto">
          <p className="text-white text-6xl font-bold text-center mt-48 ml-20 font-palanquin">
            Take Your Apparel Brand to the Next Level with Fash-Craft
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-5 mb-4">
        <div className=" my-8 m-auto text-4xl purple-color font-semibold">
          <p className="font-palanquin">About Fash-Craft</p>
        </div>
        <div className="w-3/4 m-auto text-justify text-lg">
          <p className="font-palanquin ">
            <span className="text-4xl font-semibold">W</span>elcome to
            Fash-Craft Fashion ERP, where precision and efficiency converge to
            empower your fashion business with comprehensive enterprise
            management. Fash-Craft ERP is more than just software; It is a
            dedicated solution designed to streamline and optimize every aspect
            of your fashion enterprise.
          </p>
        </div>
      </div>

      <div className="w-3/4 m-auto flex flex-col gap-5 ">
        <p className="m-auto text-3xl text-[#35155D] font-semibold font-palanquin my-6">
          Crafting Enterprise Efficiency
        </p>
        <div className="m-auto text-justify text-lg">
          <p className="font-palanquin ">
            At Fash-Craft, we believe in the power of precision and the value of
            efficiency. Our ERP system is meticulously crafted to cater
            specifically to the intricate and ever-evolving needs of the fashion
            industry. We understand that in fashion, timing and accuracy are
            paramount.
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center h-96 mx-10 ">
          <div className="flex-[2] mx-10 ">
            <p className="m-auto text-3xl text-[#35155D] font-semibold font-palanquin">
              Our Journey
            </p>
            <div className="m-auto text-justify text-lg ">
              <p className=" w-[500px] font-palanquin">
                Founded in 2023, Fash-Craft Fashion ERP emerged as a solution
                driven by a team of passionate developers, fashion experts, and
                technology enthusiasts. Our journey began with a vision to
                transform fashion businesses into highly efficient and agile
                enterprises.
              </p>
            </div>
          </div>
          <img src={about3hero} className="flex-[1.2] w-[1px] rounded-3xl" />
        </div>

        <div className="bg-[#35155D]">
          <div className="w-[700px] m-auto">
            <p className="m-auto text-3xl text-white font-semibold font-palanquin mt-10 py-3 text-center">
              Why Choose Fash-Craft Fashion ERP
            </p>
          </div>

          <div className="flex justify-around h-96 py-8  ">
            <img src={data_driven} className="w-1/3 rounded-3xl object-cover" />

            <div className=" ml-16 mt-8">
              <p className="m-auto text-3xl text-white font-medium font-palanquin mb-6">
                End-to-End Solution:
              </p>
              <div className="m-auto text-justify">
                <p className=" w-[500px] font-palanquin text-white text-lg ">
                  Fash-Craft offers a comprehensive suite of ERP modules
                  tailored to the fashion industry. From design and production
                  management to inventory control and sales analysis, our ERP
                  system covers it all.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-96 mx-10 ">
            <div className="flex-[2] mx-10 ">
              <p className="m-auto text-3xl text-white font-semibold font-palanquin">
                Fashion-Forward Features:
              </p>
              <div className="m-auto text-justify text-lg ">
                <p className=" w-[500px] font-palanquin text-white ">
                  Our ERP is built by fashion experts for fashion enterprises.
                  It includes tools for design and trend management, production
                  planning, and supply chain optimization.
                </p>
              </div>
            </div>
            <img
              src={fash_forward}
              className="flex-[1.2] w-[1px] rounded-3xl"
            />
          </div>

          <div className="flex justify-around h-96 py-8">
          <img src={end_to_end} className="w-1/3 rounded-3xl" />

            <div className=" ml-16 mt-8">
              <p className="m-auto text-3xl text-white font-medium font-palanquin mb-6">
                Data-Driven Decision-Making:
              </p>
              <div className="m-auto text-justify">
                <p className=" w-[500px] font-palanquin text-white text-lg ">
                  Harness the power of real-time data analytics to make informed
                  decisions, adapt to market trends, and stay competitive in the
                  dynamic world of fashion.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center h-96 mx-10 ">
            <div className="flex-[2] mx-10 ">
              <p className="m-auto text-3xl text-white font-semibold font-palanquin">
                User-Friendly Interface:
              </p>
              <div className="m-auto text-justify text-lg ">
                <p className=" w-[500px] font-palanquin text-white ">
                  We prioritize ease of use. Fash-Craft Fashion ERP is designed
                  with an intuitive interface, making it accessible to users
                  across your organization.
                </p>
              </div>
            </div>
            <img
              src={user_friendly}
              className="flex-[1.2] w-[1px] rounded-3xl"
            />
          </div>

          <div className="flex justify-around h-96 py-8">
            <img src={reliable_user} className="w-1/3 rounded-3xl object-cover" />
            <div className=" ml-16 mt-8">
              <p className="m-auto text-3xl text-white font-medium font-palanquin mb-6">
                Reliability and Scalability:
              </p>
              <div className="m-auto text-justify">
                <p className=" w-[500px] font-palanquin text-white text-lg ">
                  Trust in the reliability of our ERP system, knowing it can
                  scale with your growing fashion enterprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
