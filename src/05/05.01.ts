import {GovernmentBuildingType, HouseType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
}

export  const createMessages = (houses: Array<HouseType>) => {
    let callbackFn = ( (h: HouseType) => `Hello guys from ${h.address.street.title}`)
    return houses.map(callbackFn)
}