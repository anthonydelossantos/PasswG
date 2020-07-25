
exports.randomPass =()=>{
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=\|/{}[]:?;.,0123456789';
    var password = "";
    for (var i = 0, n = charset.length; i < 8; i++) {
        password += charset.charAt(Math.floor(Math.random() * Math.random() * n));

    }
   return password;
}

