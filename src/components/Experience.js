import React from "react";
import Job from "./Job";
import myJobs from "../data/jobs"

function Experience() {
    const jobs = myJobs.map((job, index) =>
        <Job key={index}
             companyName={job.companyName}
             url={job.url}
             logo={job.logo}
             location={job.location}
             title={job.title}
             startDate={job.startDate}
             endDate={job.endDate}
             accomplishments={job.accomplishments}/>)

    return (
        <section
            id="Experience"
            aria-label="Thomas' professional experience"
            className="experience-container">

            <h1>Experience</h1>
            {jobs}

        </section>
    )
}

export default Experience;