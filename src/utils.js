export const findRegion = (num) => {
    switch (num) {
        case '14':
            return 'A'
            break
        case '15':
            return 'B'
            break
        case '16':
            return 'C'
            break
        case '17':
            return 'D'
            break
        default: 'A'
    }
}

export const credit = () => {
    const creditRate = [
        'A',
        'B'
    ]

    const rand = Math.floor((Math.random() * creditRate.length))
    return creditRate[rand]
}

export const searchType = (type) => {
    switch (type) {
        case 'LGS':
            return 'Industrial'
            break
        case 'MGS':
            return 'Commercial'
            break
        case 'Res':
            return 'Residential'
            break
        case 'SGS_TOU':
            return 'Small Bussiness'
            break
        default: 'Industrial'
    }
}

export const currencyFormat = (num) => {
    return parseFloat(num).toFixed(2).replace(/./g, (c, i, a) => {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
}

export const selectUnitFromType = (type) => {
    if (type == 'Res' || type == 'SGS_TOU') {
        return 'KW'
    } else {
        return 'MW'
    }
}

export const getImage = () => {
    const ImageList = [
        require("./images/bangkok.jpg"),
        require("./images/italy.jpg"),
        require("./images/london.jpg"),
        require("./images/newyork.jpg"),
        require("./images/newzealand.jpg"),
        require("./images/washington.jpg"),
        require("./images/china.jpg"),
    ]

    const rand = Math.floor((Math.random() * ImageList.length))
    return ImageList[rand]
}