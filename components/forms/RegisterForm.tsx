import React from "react";
import { Input } from "../formik";
import { Formik, Form } from "formik";
import { TextTitle, SpanText } from "../atoms/Container";
import { PrimaryButton } from "../atoms/Buttons";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <TextTitle style={{ marginBottom: "3.2rem" }}>Акканут құру</TextTitle>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (value) => {
          console.log(value.email, value.password);
        }}
      >
        {() => {
          return (
            <Form>
              <div>
                <Input name="password" placeholder="Аты-жөніңіз" />
              </div>
              <div>
                <Input name="email" placeholder="Почтаңыз..." />
              </div>

              <div>
                <Input name="password" placeholder="Парольіңіз..." />
              </div>

              <div>
                <Input name="password" placeholder="Телефон нөміріңіз..." />
              </div>

              <div>
                <Input name="password" placeholder="Банк счетыңыз..." />
              </div>

              <div>
                <Input name="password" placeholder="Реферал ссылкаңыз..." />
              </div>

              <Link href={'/'}><SpanText>Егер акканут бар болған жағдайда</SpanText></Link>

              <div style={{ textAlign: "center", marginTop: "5.4rem" }}>
                <PrimaryButton>Құру</PrimaryButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterForm;
