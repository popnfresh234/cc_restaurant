import React, { useState } from "react"
import styled from "styled-components"
import { useFormik } from "formik"
import { navigate } from "gatsby"

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = "Required"
  } else if (values.firstName.length > 30) {
    errors.firstName = "Must be 30 characters or less"
  }

  if (!values.lastName) {
    errors.lastName = "Required"
  } else if (values.lastName.length > 30) {
    errors.lastName = "Must be 30 characters or less"
  }

  // Check for exitsing EMAIL and DATE
  if (!values.email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  if (!values.phone) {
    errors.phone = "Required"
  } else if (
    !/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(values.phone)
  ) {
    errors.phone = "Invalid phone number"
  }

  return errors
}

const FormWrapper = styled.div`
  border: 1px solid black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const FormRow = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
`

const FormLabel = styled.label`
  margin: 0 1rem 0 0;
  flex: 1;
`

const FormInput = styled.input`
  flex: 2;
  max-width: 50%;
  margin: 0 1rem 0 0;
`
const ErrorWrapper = styled.div`
  flex: 1;
  color: red;
`

const SubmitButton = styled.button`
  max-width: 8rem;
`
const EmailForm = ({ date }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validate,
    onSubmit: values => {
      const formData = new FormData()
      Object.keys(values).forEach(key => {
        formData.append(key, values[key])
      })
      formData.append("date", date)
      fetch(process.env.GOOGLE_SCRIPT_URL, { method: "POST", body: formData })
        .then(response => console.log("it worked!", response))
        .catch(error => {
          console.log("Oh no..", error.message)
        })
        navigate('/redirect')
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrapper>
        <FormRow>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <FormInput
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <ErrorWrapper>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </ErrorWrapper>
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <FormInput
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          <ErrorWrapper>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </ErrorWrapper>
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <FormInput
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <ErrorWrapper>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </ErrorWrapper>
        </FormRow>
        <FormRow>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <FormInput
            id="phone"
            name="phone"
            type="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          <ErrorWrapper>
            {formik.touched.phone && formik.errors.phone ? (
              <div>{formik.errors.phone}</div>
            ) : null}
          </ErrorWrapper>
        </FormRow>
        <FormRow>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormRow>
      </FormWrapper>
    </form>
  )
}
export default EmailForm
