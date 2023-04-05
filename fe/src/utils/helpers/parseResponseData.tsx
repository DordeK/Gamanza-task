import {MapCountryType, CountryType} from 'utils/types'

export const parseResponseData = (response: any) => {
    const map: MapCountryType = {}

    let counter = 0;
    response.forEach((element:any) => {
        const school = {
            domains: element.domains,
            name: element.name,
            stateProvince: element['state-province'],
            web_pages: element.web_pages
        }
        if(Object.keys(map).includes(element.alpha_two_code)){
            map[element.alpha_two_code].schools.push(school)
        }else{
            map[element.alpha_two_code] = {
                id: counter,
                countryCode: element.alpha_two_code,
                countryName: element.country,
                flag:`https://flagcdn.com/16x12/${element.alpha_two_code.toLocaleLowerCase()}.png`,
                schools:[
                    school
                ]
            }
            counter++;
        }
    })
    const countries: Array<CountryType> = Object.values(map)
    return countries
};