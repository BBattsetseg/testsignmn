import { FC, InputHTMLAttributes } from 'react';
import { InputEmailStyle, InputPassStyle, InputStyle } from './Input.styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  return <InputStyle type="text" id={name} {...rest} />;
};

const InputEmail: FC<InputProps> = ({ name, label, ...rest }) => {
  return <InputEmailStyle placeholder="Имэйл хаягаа оруулна уу." id={name} {...rest} required />;
};

const InputPhone: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputStyle type="text" placeholder="Утасны дугаар оруулна уу." id={name} {...rest} required />
  );
};

const InputPassport: FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputPassStyle
      type="password"
      placeholder="Нууц үгээ оруулна уу."
      id={name}
      {...rest}
      required
    />
  );
};

export { InputEmail, InputPhone, InputPassport, Input };
