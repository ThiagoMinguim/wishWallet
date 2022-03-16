import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Token is required')
    .min(2, 'min 2 characteres')
    .max(5, 'max 5 characteres or less')
    .uppercase(),

  balance: Yup.number()
    .required('balance is required')
    .typeError('balance must be a number')
    .positive('balance must be positive')
})
