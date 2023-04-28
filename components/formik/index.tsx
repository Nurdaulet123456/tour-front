import { FieldHookConfig, useField, Field } from "formik";
import styled from "@emotion/styled";

type FieldProps = FieldHookConfig<string> & { label?: string; error?: boolean };

const InputStyled = styled(Field)`
  display: block;
  width: 100%;
  border: none;
  padding-block: 1.2rem;
  padding-left: 1.5rem;
  background: #F4F4F4;
  box-shadow: 0px -12px 12px #FFFFFF, 4px 9px 9px #D4D4D4;
  border-radius: 41px;

  margin-bottom: 2rem;

  color: black;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #c0c4cc;
  }
`;

export const ErrorMsg = styled.span`
  font-size: 12px;
  display: block;
  color: red;
  margin-bottom: 2.2rem;
  transition: all 500ms;
`;

export const InputFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const Input: React.FC<FieldProps> = ({ ...props }) => {
  const [field, meta] = useField(props);
  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div>
      <InputFlex>
        <InputStyled type="text" {...props} {...field} />
      </InputFlex>
      {hasError && <ErrorMsg>{meta.error}</ErrorMsg>}
    </div>
  );
};
