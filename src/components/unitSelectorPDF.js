export function unitSelectorPDF(parameterType) {

    switch (parameterType) {
        case "MP 2,5":
            return 'micro g/m³'
        case "MP 10":
            return 'micro g/m³N'
        case "Di&oacute;xido de azufre":
            return 'micro g/m³N'
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

export default unitSelectorPDF;