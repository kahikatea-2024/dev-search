import { beforeEach, afterEach, describe, it, expect } from 'vitest'
import mockdate from 'mockdate'
import { getDaysDifference } from '../utilities/utilities'

const mockdateInit = '2024-09-18T06:30:00Z' // 18/09/2024  0 days

const validTestDates: { date: string; expected: string }[] = [
  { date: '2024-02-22T13:13:08Z', expected: '208 days ago' },
  { date: '2024-08-21T07:30:00Z', expected: '27 days ago' },
  { date: '2024-08-21T06:30:00Z', expected: '28 days ago' },
  { date: '2024-09-10T16:30:00Z', expected: '7 days ago' },
  { date: '2024-09-16T23:30:00Z', expected: '1 days ago' },
  { date: '2024-09-17T03:30:00Z', expected: '1 days ago' },
  { date: '2024-09-18T06:30:00Z', expected: '0 days ago' },
  { date: '2023-09-18T06:30:00Z', expected: '366 days ago' },
]

const invalidTestDates: { date: string; expected: string }[] = [
  { date: '', expected: 'date is invalid' },
  { date: 'null', expected: 'date is invalid' },
  { date: 'undefined', expected: 'date is invalid' },
  { date: '2024-09-18T13:13:08', expected: 'date is invalid' },
  { date: '2024-09-23T16:30:00Z', expected: 'date is in the future' },
  { date: '2024-09-19T23:30:00Z', expected: 'date is in the future' },
]

describe('getDaysDifference', () => {
  beforeEach(() => {
    mockdate.set(mockdateInit)
  })
  afterEach(() => {
    mockdate.reset()
  })

  validTestDates.forEach(({ date, expected }) => {
    it(`should calculate the correct difference for ${date}`, () => {
      const actual = getDaysDifference(date)
      expect(actual).toBe(expected)
    })
  })

  invalidTestDates.forEach(({ date, expected }) => {
    it(`should calculate the correct difference for ${date}`, () => {
      const actual = getDaysDifference(date)
      expect(actual).toBe(expected)
    })
  })
})
