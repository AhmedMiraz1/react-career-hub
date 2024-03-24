import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import PropTypes from 'prop-types';

const JobCart = ({ jobCart }) => {
  const { logo, job_title, company_name,remote_or_onsite,job_type,salary, location} = jobCart;

  console.log(jobCart);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center border my-7 p-8 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <div className="bg-[#F4F4F4]  px-11 py-12 lg:py-24 rounded-xl">
            <img src={logo} alt="" />
          </div>
          <div>
            <h2 className=" text-2xl lg:text-6 font-medium lg:font-extrabold text-[#474747]">{job_title}</h2>
            <h4 className=" text-xl  font-medium lg:font-bold text-[#757575] my-4">{company_name}</h4>
            <div className="flex flex-col lg:flex-row gap-4 " >
                <button className="text-[#7E90FE] border-[1px] border-[#7E90FE] font-medium lg:font-extrabold rounded-lg p-2">{remote_or_onsite}</button>
                <button className="text-[#7E90FE] border-[1px] border-[#7E90FE] font-medium  lg:font-extrabold rounded-lg p-2">{job_type}</button>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 my-4 text-xl font-semibold text-[#757575]">
            <p className="flex items-center gap-2"> <span><IoLocationOutline /></span>{location}</p>
            <p className="flex items-center gap-2"> <span><HiOutlineCurrencyDollar /></span>{salary}</p>
        </div>
          </div>
        </div>
        <div>
          <button className="btn bg-[#7E90FE] text-[#FFFFFF] text-xl font-medium lg:font-extrabold">View Details</button>
        </div>
      </div>
    </div>
  );
};

JobCart.propTypes ={
    jobCart:PropTypes.object.isRequired
}

export default JobCart;
