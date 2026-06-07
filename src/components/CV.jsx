export default function GeneratedCV({ cvInfo, handleExperienceRemove }) {
    return (
        <div id="cv-output">
            <div className="cv-general-info">
                {Object.values(cvInfo.personal).some(value => value.value !== "") && <h2>Personal Information:</h2>}
                <div className="info-container">
                    {Object.keys(cvInfo.personal).map((key) => (
                        cvInfo.personal[key].value && (
                            <p className="info-item" key={key}>
                                <span className="info-title">{cvInfo.personal[key].name}: </span>
                                <span className="info-value">{cvInfo.personal[key].value}</span>
                            </p>
                        )
                    ))}
                </div>
            </div>
            {cvInfo.educationalExperience.length > 0 && (
                <>
                    <hr />
                    <div id="cv-educational-experience">
                        <h2>Educational Experience:</h2>
                        <ul className="experience-list">{cvInfo.educationalExperience.map(item => (
                            <li key={item.id}>
                                <div class="experience-info">
                                    <h3>School: </h3>
                                    <p> {item.schoolName}</p>
                                    <h3>Study: </h3>
                                    <p> {item.studyTitle}</p>
                                    <h3>Duration: </h3>
                                    <p> {item.studyStartDate} - {item.studyEndDate}</p>
                                </div>
                                <button onClick={handleExperienceRemove} data-type="educational" class="remove-btn" value={item.id}>Remove</button>
                            </li>
                        ))}</ul>
                    </div>
                </>
            )}
            {cvInfo.professionalExperience.length > 0 && (
                <>
                    <hr />
                    <div id="cv-professional-experience">
                        <h2>Professional Experience:</h2>
                        <ul className="experience-list">{cvInfo.professionalExperience.map(item => (
                            <li key={item.id}>
                                <div class="experience-info">
                                    <h3>Company: </h3>
                                    <p> {item.companyName}</p>
                                    <h3>Job: </h3>
                                    <p> {item.jobName}</p>
                                    <h3>Duration: </h3>
                                    <p> {item.jobStartDate} - {item.jobEndDate}</p>
                                </div>
                                <button onClick={handleExperienceRemove} data-type="professional" class="remove-btn" value={item.id}>Remove</button>
                            </li>
                        ))}</ul>
                    </div>
                </>
            )}
            </div>
    )
}