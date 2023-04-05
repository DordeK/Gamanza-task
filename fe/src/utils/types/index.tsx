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

export type MapCountryType = {
    [shortCode: string]: CountryType,
}