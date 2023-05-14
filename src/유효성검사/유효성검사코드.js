export function validateEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return emailRegex.test(email) && email.length >= 10 && email.length <= 30
}

export function validatePassword(password) {
    const passwordRegex = /^[!@#$%^&*a-zA-Z0-9]{8,20}$/
    return passwordRegex.test(password)
}

export function validateNickName(nickName) {
    const nickNameRegex = /^[a-zA-Z0-9_.-]{2,10}$/
    return nickNameRegex.test(nickName);
}

export function validatePasswordConfirm(password, passwordConfirm) {
    return password === passwordConfirm
}