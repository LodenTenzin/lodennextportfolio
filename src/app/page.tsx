import { Newsreader, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid grid-cols-10 gap-4 xs:mt-20 md:mt-40 2xl:mt-40 min-w-200 font-">
      <div className="col-start-1 col-end-3 md:w-2xs 2xl:w-xs h-[170px] bg-white border-1 border-[#EAEAEA] rounded-lg p-1.5">
        <div className="flex flex-col items-center border-1 border-dashed border-[#EAEAEA] rounded-lg p-2">
          <h2 className={`text-2xl text-[#4f4f4f] inline whitespace-nowrap py-1`}>
            TENZIN LODEN
          </h2>
          <div className="my-2">
            <h3 className="text-xl text-[#2663b3] ml-8 relative z-10">Developer</h3>
            <hr className="border-0.5 border-[#e1e1e1] w-56 relative bottom-3"></hr>
            <h3 className="text-xl text-[#2663b3]  ml-8 relative z-10">Designer</h3>
            <hr className="border-0.5 border-[#e1e1e1] w-56 relative bottom-3"></hr>
          </div>
          <div className="flex flex-row justify-end w-full my-1">
            <img src='/Group 481.svg' className="mr-2" />
            <h4 className="font-ibm text-xs text-[#454545] mr-2">NJ/NY</h4>
          </div>
        </div>
      </div>
      <div className="col-span-1 col-start-3 justify-items-end">
        <h4 className="font-ibm text-[10px] text-[#939393]">ABOUT</h4>
      </div>
      <div id="about" className="col-start-4 col-end-6">
        <p className={`${inter.className} text-sm leading-5.5`}>
          transforming mine and other’s ideas into reality by designing concepts and bringing them to life. Here sharing my work, projects, and ideas. All in all, after years spent putting all this together, I hope it contributed a little toward the progression of design and curiosity of our human species.
        </p>
      </div>
      <div id="work" className="col-span-1 col-start-6 justify-items-end">
        <h4 className="font-ibm text-[10px] text-[#939393]">WORK EXPERIENCE</h4>
      </div>
      <div className="col-span-1 col-start-7 ">
        <div className="flex flex-col">
          <h6 className="inline whitespace-nowrap font-sans text-sm text-[#454545] mb-13">2024 - Now</h6>

          <h6 className="inline whitespace-nowrap font-sans text-sm text-[#454545] mb-13">2018 - 2021</h6>
          <h6 className="inline whitespace-nowrap font-sans text-sm text-[#454545]">2017 - Now</h6>
        </div>
      </div>
      <div className="col-start-8 col-end-11">
        <div className="flex flex-row space-x-10 pb-4">
          <div className="flex flex-col">
            <h5 className="font-sans font-medium text-sm pb-1">Domain Media, LLC</h5>
            <p className="font-sans text-xs text-[#454545]">Created branding and site layout of e-commerce site Online Business Books utiziling loveable and next.js.</p>
          </div>
        </div>
        <div className="flex flex-row space-x-10 pb-4">
          <div className="flex flex-col">
            <h5 className="font-sans font-medium text-sm text-[#0045A0] pb-1">Verisk Analytics, Inc.</h5>
            <p className="font-sans text-xs text-[#454545]">Designed and developed custom web and mobile applications. Led multiple enterprise mobile application development for payroll and company news.</p>
          </div>
        </div>
        <div className="flex flex-row space-x-10">
          <div className="flex flex-col">
            <h5 className="font-sans font-medium text-sm pb-1 text-[#6CC393]">Seeds of Tibet, Non-profit</h5>
            <p className="font-sans text-xs text-[#454545]">Volunteer musical instrument teacher and technical operations lead.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
