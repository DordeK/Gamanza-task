import axios from 'utils/api'
// import {SchoolType, CountryType, MapCountryType} from 'utils/types'

import { parseResponseData } from 'utils/helpers/parseResponseData'

export const getData = async () => {
    const response = (await axios.get('http://universities.hipolabs.com/search')).data
    return parseResponseData(response)
}