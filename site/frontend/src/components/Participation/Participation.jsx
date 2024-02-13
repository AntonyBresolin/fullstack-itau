import React, { useState } from "react";
import UserServices from "../../services/UserServices";
import StatusNotification from "../Notification/StatusNotification";

const Participation = () => {
  const [statusNotification, setStatusNotification] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    if (dateIsValid(e.target.firstName.value, e.target.lastName.value, e.target.participation.value)) {
      const data = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        participation: e.target.participation.value
      }
      try {
        await UserServices.createUser(data);
        handleChangeNotification('success');
      } catch (error) {
        console.error(error);
        handleChangeNotification('error')
      }
    } else {
      console.log('Please fill in all fields');
      handleChangeNotification('warning');
    }
  }

  const dateIsValid = (firstName, lastName, participation) => {
    if (firstName === "" || lastName === "" || participation === "") {
      return false;
    }
    if (participation < 0 || participation > 100) {
      return false;
    }
    return true;
  }

  const handleChangeNotification = (status) => {
    setStatusNotification(status);
    setTimeout(() => {
      setStatusNotification('');
    }, 3000);
  }

  return (
    <>
      <div className="flex flex-col bg-sky-400 px-[10%] py-10 select-none w-full">
        <form className="w-full flex justify-center flex-col md:flex-row" onSubmit={onSubmit}>
          <input type="text" placeholder="First Name" className="pl-4 mx-4 py-4 mb-4 md:py-0 md:mb-0 border rounded-md border-gray-300 shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name="firstName"
            required
          />
          <input type="text" placeholder="Last Name" className="pl-4 mx-4 py-4 mb-4 md:py-0 md:mb-0 border rounded-md border-gray-300 shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name="lastName"
            required
          />
          <input type="number" placeholder="Participation" className="pl-4 mx-4 py-4 mb-4 md:py-0 md:mb-0 border rounded-md border-gray-300 shadow-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name="participation"
            required
          />
          <input type="submit" className="px-10 py-3 mx-4 bg-transparent border-2 border-white text-white uppercase font-bold rounded-sm cursor-pointer hover:bg-white hover:text-sky-700 duration-150 ease-in-out" value={"Send"} />
        </form>
        {statusNotification === 'success' && <StatusNotification title="Success" message="User created successfully" type="success" />}
        {statusNotification === 'error' && <StatusNotification title="Error" message="An error occurred while creating the user" type="error" />}
        {statusNotification === 'warning' && <StatusNotification title="Warning" message="Please fill in all fields" type="warning" />}
      </div>
      <div>

      </div>
    </>
  )

}

export default Participation;
