import { createContact } from "../../../../features/contacts/thunks";
import { useAppDispatch } from "../../../../store";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  Form,
  Wrapper,
  InputField,
  FieldWrapper,
  SubmitButton,
  TextAreaField,
  FieldsContainer,
} from "./styles";

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

function ContactForm() {
  const dispatch = useAppDispatch();

  const [data, setData] = useState(defaultData);

  const [errors, setErrors] = useState(defaultData);

  const disabled =
    Object.values(errors).some((error) => error !== "") ||
    Object.values(data).some((value) => value === "");

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      firstName: e.target.value,
    });

    if (e.target.value === "") {
      setErrors({
        ...errors,
        firstName: "First name is required!",
      });
      return;
    }

    setErrors({
      ...errors,
      firstName: "",
    });
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      lastName: e.target.value,
    });

    if (e.target.value === "") {
      setErrors({
        ...errors,
        lastName: "Last name is required!",
      });
      return;
    }

    setErrors({
      ...errors,
      lastName: "",
    });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      email: e.target.value,
    });

    if (e.target.value === "") {
      setErrors({
        ...errors,
        email: "Email is required!",
      });
      return;
    }

    setErrors({
      ...errors,
      email: "",
    });
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      message: e.target.value,
    });

    if (e.target.value === "") {
      setErrors({
        ...errors,
        message: "Message is required!",
      });
      return;
    }

    setErrors({
      ...errors,
      message: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createContact(data));

    setData(defaultData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldsContainer>
        <InputField
          hiddenLabel
          size="small"
          variant="filled"
          placeholder="Enter your first name..."
          value={data.firstName}
          error={errors.firstName !== ""}
          helperText={errors.firstName}
          onChange={handleChangeFirstName}
        />
        <InputField
          hiddenLabel
          size="small"
          variant="filled"
          placeholder="Enter your last name..."
          value={data.lastName}
          error={errors.lastName !== ""}
          helperText={errors.lastName}
          onChange={handleChangeLastName}
        />
      </FieldsContainer>
      <FieldsContainer>
        <InputField
          hiddenLabel
          size="small"
          variant="filled"
          placeholder="Enter your email"
          value={data.email}
          error={errors.email !== ""}
          helperText={errors.email}
          onChange={handleChangeEmail}
        />
      </FieldsContainer>
      <FieldWrapper>
        <TextAreaField
          hiddenLabel
          multiline
          rows="8"
          size="small"
          variant="filled"
          placeholder="Enter your message here"
          value={data.message}
          error={errors.message !== ""}
          helperText={errors.message}
          onChange={handleChangeMessage}
        />
      </FieldWrapper>
      <Wrapper>
        <SubmitButton disabled={disabled} type="submit">
          Send message
        </SubmitButton>
      </Wrapper>
    </Form>
  );
}

export default ContactForm;
