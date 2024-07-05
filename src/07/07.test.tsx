import {ManTypeDes} from './07';

let man: ManTypeDes;

beforeEach (() => {
    man = {
        name: 'Elizabeth',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Narodnaya'
            }
        }
    }
})

test ('Object', () => {

    const {age, lessons} = man;
    const {title} = man.address.street

    // const age = man.age;
    // const lessons = man.lessons;


    expect (age).toBe (32)
    expect (lessons.length).toBe (3)
    expect (title).toBe ('Narodnaya')

})

test ('Arr', () => {
    const l1 = man.lessons[0];
    const l2 = man.lessons[1];

    // const [ls1, ls2] = man.lessons;
    const [ , , ls3] = man.lessons
    const [ls1, ...restLessons] = man.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    // expect(ls2.title).toBe('2')
    expect(ls3.title).toBe('3')

    expect(restLessons[0].title).toBe('2')
    expect(restLessons.length).toBe(2)
})

