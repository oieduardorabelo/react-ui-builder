import SectionsStore from './SectionsStore'

describe('SectionsStore', () => {
  it('retursn Section 1 correctly', () => {
    const actual = SectionsStore.get('section1')
    expect(actual).toMatchSnapshot()
  })

  it('retursn Section 2 correctly', () => {
    const actual = SectionsStore.get('section2')
    expect(actual).toMatchSnapshot()
  })

  it('retursn Section 3 correctly', () => {
    const actual = SectionsStore.get('section3')
    expect(actual).toMatchSnapshot()
  })

  it('retursn correct error', () => {
    try {
      SectionsStore.get('section4')
    } catch (err) {
      expect(err).toMatchSnapshot()
    }
  })
})
