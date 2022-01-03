import faker from 'faker'
import { RequiredFieldError } from '@/validation/errors'
import { RequiredFieldValidation } from '@/validation/required-field/required-field-validation'

describe('RequireddFielddValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy is field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
