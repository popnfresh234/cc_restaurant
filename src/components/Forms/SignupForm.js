import React from "react"
import { useFormik } from "formik"
import styled from "styled-components"
import { navigate } from "gatsby"

const validate = values => {
  const errors = {}
  if (!values.MERGE0) {
    errors.MERGE0 = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.MERGE0)) {
    errors.MERGE0 = "Invalid email address"
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

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      MERGE0: "",
    },
    validate,
    onSubmit: values => {
      const formData = new FormData()
      Object.keys(values).forEach(key => {
        formData.append(key, values[key])
      })
      formData.append("u", "b8dd774a886dd827573535e1e")
      formData.append("id", "550863bfac")
      //https://capheights.us1.list-manage.com/subscribe/post
      fetch("https://capheights.us1.list-manage.com/subscribe/post", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
      navigate("/redirect", { state: { action: "signing up" } })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormWrapper>
        <FormRow>
          <FormLabel htmlFor="MERGE0">Email Address</FormLabel>
          <FormInput
            id="MERGE0"
            name="MERGE0"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.MERGE0}
          />
          <ErrorWrapper>
            {formik.touched.MERGE0 && formik.errors.MERGE0 ? (
              <div>{formik.errors.MERGE0}</div>
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

export default SignupForm
