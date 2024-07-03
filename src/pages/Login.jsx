import { Form, Link, useActionData } from "react-router-dom";
import { FormInput } from "../components";
import { useEffect } from "react";
import { useRegister } from "../hooks/useRegistr";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return {
    email,
    password,
  };
};

function LogIn() {
  const userData = useActionData();
  const { isPeinding, registerWithGoogle } = useRegister();

  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);
  return (
    <div className="auth-container">
      <div className="auth-left">1</div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col gap-5 w-96 bg-base-100 shadow-xl p-10 rounded-lg"
        >
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <FormInput
            label="Email"
            type="email"
            name="email"
            placeholder="Your email"
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            placeholder="Your password"
          />
          <div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>

          <div className="w-full">
            {isPeinding && (
              <button type="button" className="btn btn-secondary btn-block">
                Loading ...
              </button>
            )}
            {!isPeinding && (
              <button
                onClick={registerWithGoogle}
                type="button"
                className="btn btn-secondary btn-block"
              >
                Google
              </button>
            )}
          </div>
          <div>
            <p className="text-center text-slate-400">
              If you don't have account,{" "}
              <Link className="link link-primary" to="/registr">
                Registr
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LogIn;
