import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
        }
    )
}

export function makeStudentActive(st: StudentType)  {
    st.isActive = true
}

export function changeStudentLive(st: StudentType, cityName: string){
    return st.address.city.title === cityName
}

export const changeBudget = (governmentBuilding: GovernmentBuildingType, budget: number) => {
    governmentBuilding.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount -= staff
}

export const toHireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount += staff
}

export const createMessage = (city: CityType) => {
    //return "Hello " + city.title + " citinez."
    return `Hello ${city.title} citinez.`
}