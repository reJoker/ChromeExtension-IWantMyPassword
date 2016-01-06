var inputFields = document.getElementsByTagName('input');

Array.prototype.forEach.call(inputFields, function (d, i) {
    if (/\bcracked\b/.test(d.className)) {
        d.className = d.className.replace(/\bcracked\b/, '').trimRight();
        d.type = 'password';
    } else if (d.type === 'password') {
        d.className = d.className + ' cracked';
        d.type = 'text';
    }
})
