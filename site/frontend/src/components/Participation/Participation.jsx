import React from "react";

const Participation = () => {

  return (
    <>
      <div className="flex bg-sky-400 px-[10%] py-10 select-none w-full">
        <form className="w-full flex justify-center flex-col md:flex-row" onSubmit={() => { }}>
          <input type="text" placeholder="First Name" className="pl-4 mx-4 py-4 mb-4 md:py-0 md:mb-0 border rounded-md border-gray-300 shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
          <input type="text" placeholder="Last Name" className="pl-4 mx-4 py-4 mb-4 md:py-0 md:mb-0 border rounded-md border-gray-300 shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
          <input type="text" placeholder="Participation" className="pl-4 mx-4 py-4 mb-4 md:py-0 md:mb-0 border rounded-md border-gray-300 shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
          <input type="submit" className="px-10 py-3 mx-4 bg-transparent border-2 border-white text-white uppercase font-bold rounded-sm cursor-pointer hover:bg-white hover:text-sky-700 duration-150 ease-in-out" value={"Send"} />
        </form>
      </div>
      <div>

      </div>
    </>
  )

}

export default Participation;
