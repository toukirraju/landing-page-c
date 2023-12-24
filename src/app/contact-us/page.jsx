"use client";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
export default function ContactUs() {
  return (
    <div className="">
      {/* <div className="z-50 sticky container mx-auto px-4  top-0  mt-4">
        <Navbar />
      </div> */}
      <section className="bg-[url('/assets/BG.svg')] bg-cover bg-center bg-no-repeat mt-12 ">
        <div className="container mx-auto px-4">
          {/* about header  */}
          <div className="flex justify-between flex-col md:flex-row md:gap-40 md:py-6">
            <div className="flex justify-center items-center md:lg:items-start text-center flex-col gap-2 flex-1">
              <h3 className="uppertitle text-left">Contact us</h3>
              <h2 className="title md:text-left">Talk to our expert</h2>
            </div>
            <div className="my-3 bg-gradient-to-r from-[#e6f3fd] to-transparent flex items-center gap-2 px-3 py-4 self-stretch  border-l-[var(--primary-blue)]  border-l-4 flex-1">
              <p className="text-xs md:text-base lg:text-xl font-normal leading-4 md:leading-5 lg:leading-7 text-[#333]">
                Talk to our expert encapsulates an invitation to consult with
                our smart and professional advisors. Harnessing their expertise,
                we offer tailored solutions, ensuring informed decisions and
                strategic approaches. Trust in our commitment to excellence as
                we guide you through complexities, providing insights that
                elevate your initiatives with precision and proficiency.
              </p>
            </div>
          </div>

          {/* contact form */}
          <div className="py-9">
            <ContactForm />
          </div>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
}
