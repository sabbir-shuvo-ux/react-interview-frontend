//check is email valid or not
export function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// check if an input field in any special characters
export function hasSpecialChar(username) {
    //allow only underscore, dash and space
    const regex = /[^a-zA-Z0-9 ]/g;

    return regex.test(username);
}
