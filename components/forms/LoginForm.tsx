import React from "react";
import { Input } from "../formik";
import { Formik, Form } from "formik";
import { TextTitle, SpanText } from "../atoms/Container";
import { PrimaryButton } from "../atoms/Buttons";
import Link from "next/link";

import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Міндетті түрде почтаңызды жазыңыз"),
  password: Yup.string().required("Міндетті түрде парольіңізді жазыңыз"),
});

const LoginForm = () => {
  return (
    <>
      <TextTitle style={{ marginBottom: "3.2rem" }}>
        Қош келдіңіз біздің тур агенттік сайт платформамызға !
      </TextTitle>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (value) => {
          console.log(value.email, value.password);
        }}
      >
        {() => {
          return (
            <Form>
              <div>
                <Input name="email" placeholder="Почтаңыз..." />
              </div>

              <div>
                <Input name="password" placeholder="Парольіңіз..." />
              </div>

              <Link href={'/signup'}><SpanText>Акканутты создать ету</SpanText></Link>

              <div style={{ textAlign: "center", marginTop: "5.4rem" }}>
                <PrimaryButton>Кіру</PrimaryButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
