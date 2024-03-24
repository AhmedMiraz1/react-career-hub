import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import JobDetails from "../JobDetails/JobDetails";
import JobCart from "../JobCart/JobCart";

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
    if (jobs.length > 0) {
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
      <h1 className="text-2xl text-center my-20">
        Applied Jobs:{appliedJobs.length}
      </h1>
      <div className="flex justify-end">
        <details className="dropdown mb-20">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
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
      {/* <div>
        {appliedJobs.map((jobCart, idx) => (
          <JobDetails key={idx}
          jobCart={jobCart}
          ></JobDetails>
        ))}
      </div> */}
    </div>
  );
};

export default AppliedJobs;
