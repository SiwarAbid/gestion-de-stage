import React from "react";
// import "../../assets/MultiStepForm.css";

const FieldSkill = ({
  nextStep,
  prevStep,
  step,
  handleChange,
  handleSubmit,
}) => {
  return (
    <fieldset
      style={{ display: step === 5 ? "block" : "none" }}
      onSubmit={handleSubmit}
    >
      <h2 className="fs-title">Compétences</h2>
      <h3 className="fs-subtitle">Quoi d'autre ?</h3>
      <textarea
        name="skill"
        id="skill"
        cols={30}
        rows={10}
        placeholder="Skills"
        onChange={handleChange}
      ></textarea>
      <h3 className="fs-subtitle">Vos pièces à joindre :</h3>
      <input
        type="file"
        name="file.cv"
        data-caption="cv"
        onChange={handleChange}
      />
      <input type="file" name="file.demande" onChange={handleChange} />
      <input type="file" name="file.motv" onChange={handleChange} />
      <input type="file" name="file.insc" onChange={handleChange} />
      <input type="file" name="file.cin" onChange={handleChange} />

      <input
        type="button"
        name="previous"
        className="previous action-button"
        value="Précédent"
        onClick={prevStep}
      />
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Suivant"
        onClick={nextStep}
      />
    </fieldset>
  );
};

export default FieldSkill;
