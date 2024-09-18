import { beforeEach, afterEach, describe, it, expect } from 'vitest'
import mockdate from 'mockdate'
import { getDaysDifference } from '../utilities/utilities'

const mockdateInit = '2024-09-18T06:30:00Z' // 18/09/2024  0 days

const validTestDates: { date: string; expected: number }[] = [
  { date: '2024-08-21T07:30:00Z', expected: 27 },
  { date: '2024-08-21T06:30:00Z', expected: 28 },
  { date: '2024-09-10T16:30:00Z', expected: 7 },
  { date: '2024-09-16T23:30:00Z', expected: 1 },
  { date: '2024-09-17T03:30:00Z', expected: 1 },
  { date: '2024-09-18T06:30:00Z', expected: 0 },
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
})
