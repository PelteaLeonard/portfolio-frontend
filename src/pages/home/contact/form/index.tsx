import {
  Container,
  FieldWrapper,
  FieldsContainer,
  InputField,
  SubmitButton,
  TextAreaField,
  Wrapper,
} from "./styles";

function Form() {
  return (
    <Container>
      <FieldsContainer>
        <InputField
          hiddenLabel
          size="small"
          variant="filled"
          placeholder="Enter your first name..."
        />
        <InputField
          hiddenLabel
          size="small"
          variant="filled"
          placeholder="Enter your first name..."
        />
      </FieldsContainer>
      <FieldsContainer>
        <InputField
          hiddenLabel
          size="small"
          variant="filled"
          placeholder="Enter your email"
        />
        <InputField
          hiddenLabel
          size="small"
          variant="filled"
          placeholder="Enter your phone number"
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
        />
      </FieldWrapper>
      <Wrapper>
        <SubmitButton>Send message</SubmitButton>
      </Wrapper>
    </Container>
  );
}

export default Form;
