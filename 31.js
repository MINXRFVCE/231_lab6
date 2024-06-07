function initials(n){
    const names = n.trim().split(' ');
    let initials = '';

    for (let i = 0; i < names.length - 1; i++) {
        initials += names[i].charAt(0).toUpperCase() + '.';
    }

    const lastName = names[names.length - 1];
    initials += lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return initials;
}