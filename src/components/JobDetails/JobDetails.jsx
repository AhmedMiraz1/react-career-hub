import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";
import { AiOutlineDollar } from "react-icons/ai";
import { TbRadio } from "react-icons/tb";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handelApplyJob = () => {
    saveJobApplication(idInt);
    toast(" you added successfully ");
  };
  return (
    <div>
      <div className="mb-32">
        <h2 className="text-4xl font-extrabold text[#1A1919] text-center my-28"> Job Details</h2>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
          <div className=" grid lg:col-span-3">
            <h1 className="font-extrabold text-[#1A1919]">
              Job Description:{" "}
              <span className="font-normal">{job.job_description}</span>
            </h1>
            <p className="font-extrabold text-[#1A1919] my-6">
              Job Responsibility:
              <span className="font-normal">{job.job_responsibility}</span>
            </p>
            <p className="font-extrabold text-[#1A1919]">
              Educational Requirements:
            </p>
            <p className="mb-6">{job.educational_requirements}</p>
            <p className="font-extrabold text-[#1A1919]">Experiences:</p>
            <p>{job.experiences}</p>
          </div>
          <div>
            <div className="bg-[#7E90FE1A] p-8 rounded-2xl">
              <h2 className="text-2xl  font-extrabold text-[#1A1919]">
                Job Details
              </h2>
              <hr className="my-6" />
              <div className="flex gap-2 items-center">
                <p className="w-6  text-[#7E90FE]">
                  <AiOutlineDollar />
                </p>
                <p className="text-[#474747] font-extrabold text-xl">
                  Salary : <span className="text[#757575]">{job.salary}</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-6  text-[#7E90FE]">
                  <TbRadio />
                </p>
                <p className="text-[#474747] font-extrabold text-xl mt-4 mb-7">
                  Job Title:
                  <span className="text[#757575]">{job.job_title}</span>
                </p>
              </div>
              <h2 className="text-[#1A1919] text-xl font-extrabold">
                Contact Information
              </h2>
              <hr className="my-6" />
              <div className="flex gap-2 items-center">
                <p className="w-6  text-[#7E90FE]">
                  <CiPhone />
                </p>
                <p className="text-xl font-bold text-[#474747]">
                  Phone :{" "}
                  <span className="text-[#757575)]">
                    {job.contact_information.phone}
                  </span>
                </p>
              </div>
              <div className=" flex items-center gap-2">
                <p className="w-6  text-[#7E90FE]">
                  <MdOutlineMarkEmailUnread />
                </p>
                <p className="text-xl font-bold text-[#474747] my-4">
                  Email :{" "}
                  <span className="text-[#757575)]">
                    {job.contact_information.email}
                  </span>
                </p>
              </div>
              <div className=" flex items-center gap-2">
                <p className="w-6  text-[#7E90FE]">
                  <IoLocationOutline />
                </p>
                <p className="text-xl font-bold text-[#474747]">
                  Address :{" "}
                  <span className="text-[#757575)]">
                    {job.contact_information.address}
                  </span>
                </p>
              </div>
            </div>
            <button
              onClick={handelApplyJob}
              className="btn btn-primary w-full mt-6 text-[#FFFFFF] font-extrabold text-xl"
            >
              Apply Now{" "}
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
