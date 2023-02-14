export function parameterTextConverter(parameterText) {

    switch (parameterText) {
        case "MP 2,5":
            return "MP 2,5"
        case "MP 10":
            return "MP 10"
        case "Di&oacute;xido de azufre":
            return "Dióxido de Azufre"
        case "Di&oacute;xido de nitr&oacute;geno":
            return "Dióxido de Nitrógeno"
        case "Mon&oacute;xido de carbono":
            return "Monóxido de Carbono"
        case "Ozono":
            return "Ozono"
        default:
            return ' '
    }

}

export default parameterTextConverter;