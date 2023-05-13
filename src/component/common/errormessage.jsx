import {
    validateEmail,
    validatePassword,
    validateNickName,
    validatePasswordConfirm,
} from './effectiveness'

const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      setErrorMessage('이메일이 유효하지 않습니다. 올바르게 입력해주세요. (10-30자)');
      return;
    }
  
    if (!validateNickName(nickName)) {
      setErrorMessage('유효한 닉네임을 입력해주세요. (2-10자, 영어, 숫자, _, ., -만 사용 가능)');
      return;
    }
  
    if (!validatePassword(password)) {
      setErrorMessage('유효한 비밀번호를 입력해주세요. (8-20자, 특수문자 !@#$%^&*만 사용 가능)');
      return;
    }
  
    if (!validatePasswordConfirm(password, passwordConfirm)) {
      setErrorMessage('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
}