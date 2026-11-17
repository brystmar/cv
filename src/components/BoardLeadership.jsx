import React from "react";
import Job from "./Job";
import myBoardRoles from "../data/boards";

// Board and volunteer roles, rendered with the same layout as Experience
export default function BoardLeadership() {
    return (
        <section
            id="BoardLeadership"
            aria-label="Thomas' board leadership roles"
            className="experience-section board-section"
        >
            <h1>Board Leadership</h1>
            <div className="jobs-container">
                {myBoardRoles.map((role, index) =>
                    <Job
                        key={index}
                        companyName={role.companyName}
                        companyUrl={role.companyUrl}
                        logo={role.logo}
                        location={role.location}
                        title={role.title}
                        subtitle={role.subtitle}
                        startDate={role.startDate}
                        endDate={role.endDate}
                        accomplishments={role.accomplishments}
                    />
                )}
            </div>
        </section>
    )
}
