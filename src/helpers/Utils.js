
export function login(userName, password) {
    localStorage.setItem('user', userName);
    localStorage.setItem('password', password);
}

export async function logout() {
    // localStorage.setItem('user', null);
    // localStorage.setItem('password', null);

    localStorage.removeItem('user');
    localStorage.removeItem('password');
}

export function getUser() {
    return localStorage.getItem('user');
}

export function getPassword() {
    return localStorage.getItem('password');
}