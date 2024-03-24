import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import JobCart from "../JobCart/JobCart";
import { RiArrowDropDownLine } from "react-icons/ri";


const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handelJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length> 0) {
      // const jobsApplied =jobs.filter(job => storedJobIds.includes(job.id))
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, []);

  return (
    <div>
      <h1 className="text-xl lg:text-5xl text-center my-10 lg:my-20 font-extrabold">
        Applied Jobs : {appliedJobs.length}
      </h1>
      <div className="flex justify-end">
        <details className="dropdown mb-20">
          <summary className="m-1 btn">Filter By  <span className="text-3xl"><RiArrowDropDownLine /></span></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
            <li onClick={() => handelJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handelJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handelJobsFilter("onsite")}>
              <a>onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {
        displayJobs.map(jobCart => <JobCart key={jobCart.id} jobCart={jobCart}></JobCart>  )
        
        }
      </div>

    </div>
  );
};

export default AppliedJobs;
