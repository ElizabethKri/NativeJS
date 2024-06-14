import {CityType} from "../02/02_02";
import {changeBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType

beforeEach (() => {
    city = {
        citizensNumber: 1000000,
        title: "New York",

        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            }
        ],
        governmentBuildings: [{
            type: "HOSPITAL", budget: 200000, staffCount: 200, address: {
                street: {title: "Central Str"}
            }
        },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 200, address: {
                    street: {title: "South Str"}
                }
            }
        ],

    }
})


test ('Budget should be changed for HOSPITAL', () => {
    expect (city.governmentBuildings[0].budget).toBe (200000)
    changeBudget (city.governmentBuildings[0], 100000)
    expect (city.governmentBuildings[0].budget).toBe (300000)
})

test ('Budget should be changed for FIRE-STATION', () => {
    expect (city.governmentBuildings[1].budget).toBe (500000)
    changeBudget (city.governmentBuildings[1], -100000)
    expect (city.governmentBuildings[1].budget).toBe (400000)
})

test ('House should be repaired', () => {
    repairHouse (city.houses[1])
    //toBeTruthy - правдиво или нет
    expect (city.houses[1].repaired).toBeTruthy ()
})

test ('staff should be increased', () => {
    toFireStaff (city.governmentBuildings[0], 20)
    expect (city.governmentBuildings[0].staffCount).toBe (180)
})

test ('staff should be hire', () => {
    toHireStaff (city.governmentBuildings[0], 20)
    expect (city.governmentBuildings[0].staffCount).toBe (220)
})

test (("Greeting message should be correct for city"), () => {
    const message = createMessage (city);

    expect (message).toBe ("Hello New York citinez.")
})