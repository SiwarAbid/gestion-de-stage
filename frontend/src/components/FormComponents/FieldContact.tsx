import React from "react";
// import "../../assets/MultiStepForm.css";
import { Form, Input } from "antd";

interface FieldContactProps {
  // Définir le type de chaque propriété ici
  step: number;
  nextStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
  };
}

const FieldContact = (props: FieldContactProps) => {
  return (
    <fieldset style={{ display: props.step === 1 ? "block" : "none" }}>
      <h2 className="fs-title">Contact</h2>
      <h3 className="fs-subtitle">Renforcez vos chances !</h3>
      <Form.Item
        validateStatus={
          props.errors.name === undefined || props.errors.name === true
            ? "error"
            : ""
        }
        help={
            props.errors.name === true
            ? "Veuillez entrer votre nom complet"
            : ""
        }
      >
        <Input
          type="text"
          name="name"
          placeholder="Nom Complet"
          onChange={props.handleChange}
        />
      </Form.Item>
      <Form.Item
        validateStatus={
          props.errors.email === undefined || props.errors.email === true
            ? "error"
            : ""
        }
        help={
          props.errors.email === true
            ? "Veuillez entrer votre email"
            : ""
        }
      >
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={props.handleChange}
        />
      </Form.Item>
      <Form.Item
        validateStatus={
          props.errors.phone === undefined || props.errors.phone === true
            ? "error"
            : ""
        }
        help={
          props.errors.phone === true
            ? "Veuillez entrer votre numero de telephone"
            : ""
        }
      >
        <Input
          type="number"
          name="phone"
          placeholder="Téléphone"
          onChange={props.handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="button"
          name="next"
          disabled={Object.values(props.errors).length === 0? true :Object.values(props.errors).some((error) => error )}
          className="next action-button"
          value="Suivant"
          onClick={props.nextStep}
        />
      </Form.Item>
    </fieldset>
  );
 
};
export default FieldContact;
