import React from "react";
// import "../../assets/MultiStepForm.css";

const Button = () => {
  return (
    <>
      <input
        type="button"
        name="envoyer"
        id="blue"
        className="envoyer action-button"
      />
      <label htmlFor="blue" style={{ "--color": "blue" } as React.CSSProperties}>
        Envoyer
      </label>
    </>
  );
};

const FieldDone = ({ prevStep, step }) => {
  return (
    <fieldset style={{ display: step === 6 ? "block" : "none" }}>
      <h2 className="fs-title">Merci !</h2>
      <h3 className="fs-subtitle">Demander maintenant && Bon courage </h3>
      <input
        type="button"
        name="previous"
        className="previous action-button"
        value="Précédent"
        onClick={prevStep}
      />
      <Button />
    </fieldset>
  );
};

export default FieldDone;
