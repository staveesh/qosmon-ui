function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getNrandomColors(n){
    let colors = []
    for(let i = 0; i < n; i++){
        colors.push(getRandomColor());
    }
    return colors;
}

export { getNrandomColors };