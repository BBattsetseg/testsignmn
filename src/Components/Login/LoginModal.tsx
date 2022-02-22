import { InputEmail, InputPassport } from '../Input/Input';
import Modal, { modalPropType } from '../Modal/Modal';
import FocusLock from 'react-focus-lock';
import { LoginUl } from './LoginModal.style';
import { Button } from '../Button/Button';

export const LoginModal = (props: modalPropType) => {
  const { isShown, toggle } = props;
  const LoginM = () => {
    return (
      <LoginUl onClick={() => console.log('inside daragdlaa')}>
        <FocusLock>
          <p style={{ color: '#333', fontSize: '34px', textAlign: 'center' }}>Нэвтрэх</p>
          <InputEmail name={''} label={''} />
          <InputPassport name={''} label={''} />
          <Button
            onClick={() => {
              alert('Өөрийн нууц үгээрээ нэвтэрч орно уу.'), toggle();
            }}
          >
            Нэвтрэх
          </Button>
        </FocusLock>
      </LoginUl>
    );
  };

  return <Modal isShown={isShown} hide={toggle} headerText="" modalContent={<LoginM />} />;
};