import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
  const {id, logo, job_title, company_name, remote_or_onsite, location,salary,job_type } = job;
  return (
    <div>
      <div className="border-[1px] rounded-2xl pl-10 py-10">
        <img src={logo} alt="" />
        <h1 className="my-6 text-[#474747] font-extrabold text-2xl">{job_title}</h1>
        <h3 className="text-[#757575] text-xl font-semibold">{company_name}</h3>
        <div className="flex gap-6 my-4">
            <button className="text-[#7E90FE] border-[1px] border-[#7E90FE] font-extrabold rounded-lg p-2">{remote_or_onsite}</button>
            <button className="text-[#7E90FE] border-[1px] border-[#7E90FE] font-extrabold rounded-lg p-2">{job_type}</button>
        </div>
        <div className="flex gap-6 my-4 text-xl font-semibold text-[#757575]">
            <p className="flex items-center gap-2"> <span><IoLocationOutline /></span>{location}</p>
            <p className="flex items-center gap-2"> <span><HiOutlineCurrencyDollar /></span>{salary}</p>
        </div>
        <Link to={`/job/${id}`}><button className="bg-[#7E90FE] text text-lg font-extrabold text-white px-4 py-3 rounded-xl">View Details</button></Link>
      </div>
    </div>
  );
};

export default Job;
