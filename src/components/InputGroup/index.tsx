import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

interface IInputGroupProps {
  placeholder: string;
  ariaLabel: string;
  addonValue?: string;
  title: string;
}

const MyInputGroup: React.FC<IInputGroupProps> = (props) => {
  return (
    <>
      <Form.Label htmlFor="basic-url">{props.title}</Form.Label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder={props.placeholder}
          type="text"
          aria-label={props.ariaLabel}
          aria-describedby="basic-addon2"
        />
        {props.addonValue ? (
          <InputGroup.Text id="basic-addon2">
            {props.addonValue}
          </InputGroup.Text>
        ) : null}
      </InputGroup>
    </>
  );
};

export default MyInputGroup;
