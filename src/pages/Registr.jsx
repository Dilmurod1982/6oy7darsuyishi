import { Form, Link, useActionData } from "react-router-dom";
import { FormInput } from "../components";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");
  return {
    displayName,
    photoURL,
    email,
    password,
  };
};

import { useRegister } from "../hooks/useRegistr";

function Registr() {
  const userData = useActionData();
  const { registerWithGoogle, isPending, registerEmailAndPassword } =
    useRegister();

  useEffect(() => {
    if (userData) {
      registerEmailAndPassword(
        userData.email,
        userData.password,
        userData.displayName,
        userData.photoURL
      );
    }
  }, [userData]);

  return (
    <div className="auth-container">
      <div className="auth-left">1</div>
      <div className="auth-right">
        <Form
          method="post"
          className="flex flex-col gap-2 w-96 bg-base-100 shadow-xl p-10 rounded-lg"
        >
          <h1 className="text-3xl font-semibold text-center">Registr</h1>
          <FormInput
            label="displayName"
            type="text"
            name="displayName"
            placeholder="Your name"
          />
          <FormInput
            label="photoURL"
            type="url"
            name="photoURL"
            placeholder="Your photo URL"
          />
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
          <div className="mt-6">
            {isPending && (
              <button type="button" className="btn btn-primary btn-block">
                Loading ...
              </button>
            )}
            {!isPending && (
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            )}
          </div>

          <div className="w-full">
            {isPending && (
              <button type="button" className="btn btn-secondary btn-block">
                Loading ...
              </button>
            )}
            {!isPending && (
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
              If you have account,{" "}
              <Link className="link link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registr;
