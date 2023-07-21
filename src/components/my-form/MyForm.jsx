import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(20, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const MyForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="name"
            type="text"
            style={{
              border: errors.name && touched.name ? "solid red" : "solid",
            }}
          />
          {errors.name && touched.name && <p>{errors.name}</p>}
          <Field
            name="email"
            type="text"
            style={{
              border: errors.email && touched.email ? "solid red" : "solid",
            }}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}

          <button>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
