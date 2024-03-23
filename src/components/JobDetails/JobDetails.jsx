import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  
  const handelApplyJob = ()=>{
    saveJobApplication(idInt)
    toast(' you added successfully ')
  }
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
        <div className="border grid lg:col-span-3">
          <h2 className="text-4xl"> Details Coming here</h2>
          <h1>Job Details of : {job.job_title}</h1>
          <p>{job.company_name}</p>
        </div>
        <div className="border  ">
          <h2 className="text-2xl ">side things</h2>
          <button onClick={handelApplyJob} className="btn btn-primary w-full">Apply Now </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
