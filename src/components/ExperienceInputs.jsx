export function ExperienceInput( { type, onExperienceAdd, onExperienceInfoChange, experienceInputs }) {
    return (
        <div id={ type === "educational" ? "educational-experience-input" : "professional-experience-input"}>
           <label htmlFor={type === "educational" ? "schoolName" : "companyName"}>{type === "educational" ? "School Name:" : "Company Name:"}</label>
           <input value={type === "educational" ? experienceInputs.educational.schoolName : experienceInputs.professional.companyName } type="text" name={type === "educational" ? "schoolName" : "companyName"} id={type === "educational" ? "schoolName" : "companyName"} onChange={onExperienceInfoChange} />
           <label htmlFor={type === "educational" ? "studyTitle" : "jobName"}>{type === "educational" ? "Study:" : "Job:"}</label>
           <input value={type === "educational" ? experienceInputs.educational.studyTitle : experienceInputs.professional.jobName } type="text" name={type === "educational" ? "studyTitle" : "jobName"} id={type === "educational" ? "studyTitle" : "jobName"} onChange={onExperienceInfoChange} />
           <label htmlFor={type === "educational" ? "studyStartDate" : "jobStartDate"}>Start Date:</label>
           <input value={type === "educational" ? experienceInputs.educational.studyStartDate : experienceInputs.professional.jobStartDate } type="date" name={type === "educational" ? "studyStartDate" : "jobStartDate"} id={type === "educational" ? "studyStartDate" : "jobStartDate"} onChange={onExperienceInfoChange} />
           <label htmlFor={type === "educational" ? "studyEndDate" : "jobEndDate"}>End Date:</label>
           <input value={type === "educational" ? experienceInputs.educational.studyEndDate : experienceInputs.professional.jobEndDate } type="date" name={type === "educational" ? "studyEndDate" : "jobEndDate"} id={type === "educational" ? "studyEndDate" : "jobEndDate"} onChange={onExperienceInfoChange} />
           <input className="add-btn" type="button" value="Add" onClick={onExperienceAdd} />  
        </div>
    )
}