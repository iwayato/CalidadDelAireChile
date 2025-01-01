export function unitSelector(parameterType) {

    switch (parameterType) {
        case "MP 2,5":
            return 'μg/m³'
        case "MP 10":
            return 'μg/m³N'
        case "Di&oacute;xido de azufre":
            return 'μg/m³N'
        case "Di&oacute;xido de nitr&oacute;geno":
            return 'ppbv'
        case "Mon&oacute;xido de carbono":
            return 'ppmv'
        case "Ozono":
            return 'ppbv'
        default:
            return ' '
    }
}

export default unitSelector;