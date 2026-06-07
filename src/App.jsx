import { useState } from "react";
import Inputs from "./components/Inputs";
import GeneratedCV from "./components/CV";
import "./styles/App.css";

function App() {
	const [cvInfo, setCvInfo] = useState({
		personal: {
			firstName: {
				name: "First Name",
				value: ""
			},
			lastName: {
				name: "Last Name",
				value: ""
			},
			nationality: {
				name: "Nationality",
				value: ""
			},
			email: {
				name: "Email",
				value: ""
			},
			phone: {
				name: "Phone",
				value: ""
			},
		},
		educationalExperience: [],
		professionalExperience: [],
	});
	const [experienceInputs, setExperienceInputs] = useState({
		educational: {
			schoolName: "",
			studyTitle: "",
			studyStartDate: "",
			studyEndDate: ""
		},
		professional: {
			companyName: "",
			jobName: "",
			jobStartDate: "",
			jobEndDate: ""
		}
	})
	const [isShown, setIsShown] = useState(false);

	function handleInfoChange(e) {
		setCvInfo(prev => (
			{...prev, personal: {...prev.personal, [e.target.name]: {...prev.personal[e.target.name], value: e.target.value}}}
		));
	}

	function handleExperienceInfoChange(e) {
		if (e.target.parentElement.id === "educational-experience-input") {
			setExperienceInputs(prev => ({
				...prev,
				educational: {
					...prev.educational,
					[e.target.id]: e.target.value
				}
			}))
		}
		else {
			setExperienceInputs(prev => ({
				...prev,
				professional: {
					...prev.professional,
					[e.target.id]: e.target.value
				}
			}));
		}
  	}

	function handleExperienceAdd(e) {
		if (e.target.parentElement.id === "educational-experience-input") {
			// Check if all educational experience inputs are filled before adding to inputs
			if (Object.values(experienceInputs.educational).some(value => value === "")) {
				return;
			}
			// Add an id to the experience object before adding to inputs
			const educationalExperience = { ...experienceInputs.educational, id: Date.now() };
			setCvInfo(prev => ({
				...prev, educationalExperience: [...prev.educationalExperience, educationalExperience]
			}));
			// Clear experienceInputs after adding to inputs
			setExperienceInputs(prev => ({
				...prev,
				educational: { schoolName: "", studyTitle: "", studyStartDate: "", studyEndDate: ""}
			}))
		}
		else {
			// Check if all professional experience inputs are filled before adding to inputs
			if (Object.values(experienceInputs.professional).some(value => value === "")) {
				return;
			}
			// Add an id to the experience object before adding to inputs
			const professionalExperience = { ...experienceInputs.professional, id: Date.now() };
			setCvInfo(prev => ({
				...prev, professionalExperience: [...prev.professionalExperience, professionalExperience]
			}));
			// Clear experienceInputs after adding to inputs
			setExperienceInputs(prev => ({
				...prev,
				professional: { companyName: "", jobName: "", jobStartDate: "", jobEndDate: "" }
			}))
		}
	}

	function handleExperienceRemove(e) {
		const experienceId = parseInt(e.target.value);
		if (e.target.dataset.type === "educational") {
			setCvInfo(prev => ({
				...prev, educationalExperience: prev.educationalExperience.filter(item => item.id !== experienceId)
			}));
		}
		else {
			setCvInfo(prev => ({
				...prev, professionalExperience: prev.professionalExperience.filter(item => item.id !== experienceId)
			}));
		}
	}

	return (
		<>
			{!isShown ? (
				<>
					<Inputs
						handleInfoChange={handleInfoChange}
						handleExperienceInfoChange={handleExperienceInfoChange}
						experienceInputs={experienceInputs}
						handleExperienceAdd={handleExperienceAdd}
						personalInputs={cvInfo.personal}
					/>
					<button
						id="submit-btn"
						onClick={() => {
							setIsShown(true);
						}}>
						Generate CV
					</button>
				</>
			) : (
				<>
					<button
						id="edit-btn"
						onClick={() => {
							setIsShown(false);
						}}>
						Edit CV
					</button>
					<GeneratedCV cvInfo={cvInfo} handleExperienceRemove={handleExperienceRemove} />
				</>
			)}
		</>
	);
}

export default App;
