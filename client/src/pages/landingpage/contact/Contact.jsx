import { contact_me } from "../../../assets/images";

export const Contact = () => {
  return (
    <div>
      <div>
        <div className="h-72 w-full relative">
          <img
            className="w-full h-full absolute mix-blend-overlay object-cover bg-[#35155D] blur-[1.5px]  "
            src={contact_me}
            alt="hero background"
          />
        </div>
        <div className=" flex mb-4 max-md:flex-col">
          <div className=" flex flex-col w-3/4 mb-4">
            <div className="my-8 mx-32 text-4xl text-[#35155D] font-semibold">
              <p className="font-palanquin">Hey! Let’s Talk</p>
            </div>
            <div className="w-3/4 m-auto text-justify text-lg">
              <p className="font-palanquin mb-3">
                Fash-Craft is the complete business management software for
                fashion brands to manage all aspects of your business including
                marketing, sales, invoices, ordering, inventory, shipping, and
                production.
              </p>
              <p className="font-palanquin mb-3">
                It helps you gain control over and streamline operations, more
                accurately forecast revenues and manage costs. It leaves you
                free to be creative, focus your energy on designing and growing
                your business.
              </p>
              <p className="font-palanquin mb-3">
                Contact Frash-Craft by filling out the form below.
              </p>
            </div>
          </div>
          <div className="w-1/4 m-auto text-justify text-lg mt-24 pt-2 max-md:m-auto max-md:w-auto max-md:p-auto">
            <p className="font-palanquin mb-3">FCT, Abuja</p>
            <p className="font-palanquin mb-3">Phone: 0-000-000-0000</p>
            <p className="font-palanquin mb-3">Email: info@frashcraft.com</p>
            <p className="font-palanquin mb-3">Web: www.frashcraft.com</p>
          </div>
        </div>
      </div>

      <div className="w-3/4 m-auto rounded bg-coral-red mb-12 py-5">
        <form className="w-7/12 flex flex-col m-auto  max-md:w-full">
          <p className="m-auto text-4xl text-white font-semibold mb-5">
            Contact Us
          </p>
          <div className="flex flex-col">
            <input
              className="border border-white h-10 font-palanquin mb-5 rounded-sm hover:border-2 text-white pl-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-white h-10 font-palanquin mb-5 rounded-sm hover:border-2 text-white pl-2"
              type="text"
              placeholder="Email"
            />
            <input
              className="border h-10 font-palanquin mb-5 rounded-sm border-white hover:border-2 text-white pl-2"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="border h-28 font-palanquin mb-5 rounded-sm border-white hover:border-2 text-white pl-2"
              type="text"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="justify-center self-center ">
            
            <button
              type="submit"
              className="bg-white text-[#512B81] font-palanquin px-10 py-2 rounded hover:bg-[#512B81] hover:text-white hover:px-[38px] hover:py-[6px] hover:border-2 hover:border-white "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};
