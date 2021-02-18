import React from "react";
import Job from "./Job";
import myJobs from "../data/jobs"

export default function Experience() {
    return (
        <section
            id="Experience"
            aria-label="Thomas' professional experience"
            className="experience-section"
        >
            <h1>Experience</h1>
            <div className="jobs-container">
                {myJobs.map((job, index) =>
                    <Job
                        key={index}
                        companyName={job.companyName}
                        url={job.url}
                        logo={job.logo}
                        location={job.location}
                        title={job.title}
                        subtitle={job.subtitle}
                        startDate={job.startDate}
                        endDate={job.endDate}
                        accomplishments={job.accomplishments}
                    />
                )}
            </div>
        </section>
    )
}
