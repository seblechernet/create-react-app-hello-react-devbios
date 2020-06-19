import devActions from '../reducers/devBios';
import Developer from '../models/Developer';

const fakeDevs = [
    new Developer("jason","monroe","java",2002)
];

test('add', () =>{
    const actualObject = devActions.addBioActionCreator(fakeDevs[0]);
    const expectedObject = { type: 'ADD_BIO', developer:fakeDevs[0]};

    expectedObject(actualObject).toStrictEqual(expectedObject);
})