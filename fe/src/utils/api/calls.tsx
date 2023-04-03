import axios from 'utils/api'

export type SchoolType ={
    id?: number,
    domains: Array<string>,
    name:string,
    stateProvince: string,
    web_pages:Array<string>,
}

export type CountryType = {
    id:number,
    countryCode: string,
    countryName: string,
    flag:string,
    schools: Array<SchoolType>
}

type MapCountryType = {
    [shortCode: string]: CountryType,
}

export const getData = async () => {
    const map: MapCountryType = {}
    const response = (await axios.get('http://universities.hipolabs.com/search')).data
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
    });
    return Object.values(map)
}