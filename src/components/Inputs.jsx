import { NameInput, NationalityInput, EmailInput, PhoneInput } from "./InfoInputs";
import {
	ExperienceInput
} from "./ExperienceInputs";

export default function Inputs({
	handleInfoChange,
	handleExperienceInfoChange,
	handleExperienceAdd,
	personalInputs,
	experienceInputs
}) {
	return (
		<div id="inputs">
			<NameInput onChange={handleInfoChange} personalInputs={personalInputs} />
			<NationalityInput onChange={handleInfoChange} personalInputs={personalInputs} />
			<EmailInput onChange={handleInfoChange} personalInputs={personalInputs} />
			<PhoneInput onChange={handleInfoChange} personalInputs={personalInputs} />
			<ExperienceInput type="educational" onExperienceInfoChange={handleExperienceInfoChange} experienceInputs={experienceInputs} onExperienceAdd={handleExperienceAdd} />
			<ExperienceInput type="professional" onExperienceInfoChange={handleExperienceInfoChange} experienceInputs={experienceInputs} onExperienceAdd={handleExperienceAdd} />
		</div>
	);
}
