/* global describe it */
const expect = require('chai').expect
const models = require('../app/models/index')
models.sequelize.sync()

describe('openingHour model', function () {
  const timings = {
    Monday: '7am to 12am',
    Tuesday: '8am to 11am',
    Wednesday: '8am to 11am',
    Thursday: '8am to 11am',
    Friday: '8am to 11am',
    Saturday: '8am to 11am',
    Sunday: '8am to 11am'
  }
  const newTimings = {
    Monday: {
      openingHour: '7am',
      closingHour: '12am'
    },
    Tuesday: {
      openingHour: '8am',
      closingHour: '11am'
    },
    Wednesday: {
      openingHour: '8am',
      closingHour: '11am'
    },
    Thursday: {
      openingHour: '8am',
      closingHour: '11am'
    },
    Friday: {
      openingHour: '8am',
      closingHour: '11am'
    },
    Saturday: {
      openingHour: '8am',
      closingHour: '11am'
    },
    Sunday: {
      openingHour: '8am',
      closingHour: '11am'
    }
  }
  it('parseTime function should return an array of objects of start and end time', (done) => {
    const timing = models.OpeningHour.parseTime(timings)
    expect(timing).to.deep.eql(newTimings)
    done()
  })
})
