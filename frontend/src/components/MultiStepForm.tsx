import React, { ChangeEvent, useState } from "react";
import "../assets/MultiStepForm.css";
import ProgressBar from "./FormComponents/ProgressBar";
import FieldContact from "./FormComponents/FieldContact";
import FieldFormation from "./FormComponents/FieldFormation";
import FieldExperience from "./FormComponents/FieldExperience";
import FieldProjet from "./FormComponents/FieldProjet";
import FieldSkill from "./FormComponents/FieldSkill";
import FieldDone from "./FormComponents/FieldDone";
import userDataReducer, {
  initialState,
} from "../initialStates/userInitialState";

const MultiStepForm: React.FC = () => {
  const [userData, dispatch] = React.useReducer(userDataReducer, initialState);
  //const [errors, setErrors] = useState<Record<string, string | boolean>>({});
  console.log("userData: ", userData);

  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>("");
  const [divCount, setDivCount] = useState<number>(1);

  const nextStep = () => {
    if (step === 1) {
      // Valider les champs du composant FieldContact
    }
    //setErrors({}); // Réinitialiser l'erreur si tout est valide
    setStep(step + 1);
    if (step === 2) addFormation();
    else if (step === 3) addExperience();
    else if (step === 4) addProjet();
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);

    /****** handleChange() ******/
    const { name, value } = event.target;
   // setErrors({ ...errors, name: value.length <= 3 ? false : true });

    //Valider les données:

    // Gérer les propriétés imbriquées
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      dispatch({
        type: "MODIFIER_IMBRIQUE",
        parent: parent,
        child: child,
        value: value,
      });
    } else {
      dispatch({ type: "UPDATE_FIELD", field: name, value: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Vous pouvez valider les données ici avant de les enregistrer dans l'état userData
    nextStep();
  };





  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setValues({ ...userData, [name]: value });
    console.log("valuee", value);

    //setErrors({ ...errors, [name]: value ? false : true });
    //  console.log("e.target::", e.target);//<input type="text" name="name" placeholder="Nom Complet" required />
    //  console.log("e.target.value::", e.target.value);//Ben Abid Siwar

    //Valider les données:

    // Gérer les propriétés imbriquées
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      dispatch({
        type: "MODIFIER_IMBRIQUE",
        parent: parent,
        child: child,
        value: value,
      });
    } else {
      dispatch({ type: "UPDATE_FIELD", field: name, value: value });
    }
  };







  
  const addFormation = () => {
    console.log("formation::", userData.formation);
    const newItem = userData.formation;

    dispatch({
      type: "ADD_ITEM",
      section: "formations",
      value: newItem,
    });
  };

  const addExperience = () => {
    console.log("experience::", userData.experience);
    const newItem = userData.experience;
    dispatch({
      type: "ADD_ITEM",
      section: "experiences",
      value: newItem,
    });
  };

  const addProjet = () => {
    console.log("projet::", userData.projet);
    const newItem = userData.projet;

    dispatch({
      type: "ADD_ITEM",
      section: "projets",
      value: newItem,
    });
  };

  const supprimer = (button: HTMLButtonElement) => {
    console.log("button", button);
    const parentNode = button.parentNode;
    if (parentNode) {
      parentNode.removeChild(button);
    }
  };

  const ajouterDiv = () => {
    setDivCount(divCount + 1);
    console.log("step::", step);
    if (step == 2) addFormation();
    else if (step == 3) addExperience();
    else if (step == 4) addProjet();
  };

  const [focused, setFocused] = useState(false);
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <div id="msform">
      <ProgressBar step={step} />
      <FieldContact
        step={step}
        nextStep={nextStep}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        //errors={errors}
        handleFocus={handleFocus}
        focused={focused}
      />
      <FieldFormation
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        supprimer={supprimer}
        divCount={divCount}
        handleSubmit={handleSubmit}
        ajouterDiv={ajouterDiv}
        //errors={errors}
      />
      <FieldExperience
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleTypeChange={handleTypeChange}
        selectedType={selectedType}
        supprimer={supprimer}
        divCount={divCount}
        handleSubmit={handleSubmit}
        ajouterDiv={ajouterDiv}
        handleChange={handleChange}
      />
      <FieldProjet
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        supprimer={supprimer}
        divCount={divCount}
        handleSubmit={handleSubmit}
        ajouterDiv={ajouterDiv}
      />
      <FieldSkill
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <FieldDone step={step} prevStep={prevStep} />
    </div>
  );
};

export default MultiStepForm;
