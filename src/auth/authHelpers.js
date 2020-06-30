import cookie from 'js-cookie';

//cookie
export const setCookie = (key, value) => {
    if (window !== 'undefined') {
        cookie.set(key, value, {
            expires: 1
        });
    }
};
// remover del cookie
export const removeCookie = key => {
    if (window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        });
    }
};
// obtener de una cookie como un token almacenado
export const getCookie = key => {
    if (window !== 'undefined') {
        return cookie.get(key);
    }
};
//local storage
export const setLocalStorage = (key, value) => {
    if (window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};
// remover del local storage
export const removeLocalStorage = key => {
    if (window !== 'undefined') {
        localStorage.removeItem(key);
    }
};
// autenticar usuario pasando los datos por cookie y local storage durante el login
export const authenticate = (response, next) => {
    console.log('AUTHENTICATE HELPER ON SIGNIN RESPONSE', response);
    setCookie('token', response.data.token);
    setLocalStorage('user', response.data.user);
    next();
};
// acceder a los datos del usuario en el local storage
export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};

export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();
};