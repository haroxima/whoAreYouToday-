const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let password = '';

function generate(length) {
    for(let i =0; i < length; i++) {
        const randomIndex = chars[Math.floor(Math.random() * chars.length)];
        password +=chars.charAt(randomIndex);
    }

    return password;
    // password = newPass;
}
const randomPass = generate(4);
console.log(randomPass);