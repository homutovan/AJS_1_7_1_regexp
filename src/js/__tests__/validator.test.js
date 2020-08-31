import Validator from '../validator';

const rightTestCase = [
  {
    testInput: 'Magterion',
    testName: 'only letters',
  },
  {
    testInput: 'M111a1g1t1e1r1i1o111n',
    testName: 'letters + digits',
  },
  {
    testInput: 'M1__11a1g1--t1e1r_-1i1o111n',
    testName: 'letters + digits + allowed symbol',
  },
];

const unRightTestCase = [
  {
    testInput: 'Daemon Magterion',
    testName: 'two words',
  },
  {
    testInput: 'M@gterion',
    testName: 'unallowed symbol',
  },
  {
    testInput: 'Ma1234gterion',
    testName: 'many digits',
  },
  {
    testInput: '1Magterion',
    testName: 'digits at the beginning',
  },
  {
    testInput: 'Magterion1',
    testName: 'digits at the ending',
  },
  {
    testInput: '_Magterion',
    testName: 'symbol at the beginning',
  },
  {
    testInput: 'Magterion_',
    testName: 'symbol at the ending',
  },
  {
    testInput: '-Magterion',
    testName: 'symbol at the beginning',
  },
  {
    testInput: 'Magterion-',
    testName: 'symbol at the ending',
  },
];

describe('Check validateUsername', () => {
  test.each(rightTestCase)(('Right test case №%# : %p'),
    ({ testInput }) => expect(Validator.validateUsername(testInput)).toBeTruthy());

  test.each(unRightTestCase)(('Unright test case №%# : %p'),
    ({ testInput }) => expect(Validator.validateUsername(testInput)).toBeFalsy());
});
