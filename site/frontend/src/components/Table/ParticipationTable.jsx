import React, { useEffect, useState } from "react";
import UserServices from "../../services/UserServices";
const ParticipationTable = () => {
  const [participationData, setParticipationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await UserServices.getUsers();
      const data = await result.json();
      setParticipationData(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <table className="w-1/2 border-collapse border border-gray-300">
        <tr>
          <th></th>
          <th className="border border-gray-300 text-gray-500 text-start px-2 py-2">First Name</th>
          <th className="border border-gray-300 text-gray-500 text-start px-2">Last Name</th>
          <th className="border border-gray-300 text-gray-500 text-center">Participation</th>
        </tr>
        {participationData.map((data, index) => {
          return (
            <tr key={index} className="border border-gray-300 text-start">
              <td className="border border-gray-300 text-gray-500 text-center">{index + 1}</td>
              <td className="border border-gray-300 text-gray-500 px-2 py-1">{data.firstName}</td>
              <td className="border border-gray-300 text-gray-500 px-2">{data.lastName}</td>
              <td className="border border-gray-300 text-gray-500 text-center">{data.participation}%</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default ParticipationTable;