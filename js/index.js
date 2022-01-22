chooseColor = () => {
    switch (document.getElementById('color').value) {
        case 'yellow':
            document.getElementById('body').style.backgroundColor = 'yellow';
            break;
        case 'pink':
            document.getElementById('body').style.backgroundColor = 'pink';
            break;
        case 'blue':
            document.getElementById('body').style.backgroundColor = 'blue';
            break;
    }
}