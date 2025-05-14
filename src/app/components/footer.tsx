import React from "react";

const endNote: React.FC = () => {
  return (
    <div className="grid grid-cols-10 gap-4 font-ibm text-[10px] bg-[#F8F8F8] text-[#939393] w-full fixed bottom-0 mb-20 md:pr-32 2xl:pr-72">
      <div className="col-start-1 col-end-3 whitespace-nowrap">
        <span>
          © {new Date().getFullYear()} Tenzin Loden. All rights reserved.
        </span>
        </div>
        <div className="col-span-2 col-start-8">
        <a href="mailto:example@example.com" className="hover:underline">tenzintibetloden@gmail.com</a>
        </div>
        <div className="col-span-1 col-start-10 justify-items-end">
        <h6 className="font-ibm whitespace-nowrap">Built with NEXT.JS</h6>
        </div>
    </div>
  );
};

export default endNote;