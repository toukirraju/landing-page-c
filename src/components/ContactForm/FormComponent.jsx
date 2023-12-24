import { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import PhoneInput, {
  formatPhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Loader from "../Loader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .test("is-valid-phone-number", "Invalid Phone number", isValidPhoneNumber)
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
});

const FormComponent = () => {
  // name, email, phone, businessname, description
  const [phoneNumber, setPhoneNumber] = useState();
  const [aggree, setAggree] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  useEffect(() => {
    if (phoneNumber) {
      formValue["phoneNumber"] = phoneNumber;

      if (phoneNumber && isValidPhoneNumber(phoneNumber)) {
        setError("");
      } else {
        setError("Invalid phone number");
      }
    }
  }, [phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (formValue.phoneNumber && isValidPhoneNumber(formValue.phoneNumber)) {
      setError("");
      const submitedData = {
        name: formValue.firstName + " " + formValue.lastName,
        email: formValue.email,
        phone: formValue.phoneNumber,
        businessname: formValue.company,
        description: formValue.message,
      };
      fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitedData),
      })
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            setFormValue({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              company: "",
              message: "",
            });
            setPhoneNumber("");
            setAggree(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError("Something went wrong");
          console.log(err);
        });
    } else {
      setLoading(false);
      setError("Invalid phone number");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {error && (
        <div className="bg-red-50 w-full rounded-md px-4 py-2 text-[#d92c20dc] text-sm font-medium">
          {error}
        </div>
      )}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          company: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, setFieldValue, setFieldError, values }) => (
          <Form className="pb-3.5 flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <CustomeLabel
                  name={"First Name"}
                  astric={true}
                  error={errors.firstName && touched.firstName}
                />
                <Field
                  name="firstName"
                  placeholder="Enter your Frist Name "
                  className={` ${
                    errors.firstName && touched.firstName
                      ? "border-[3px] border-[#ff5555]  placeholder:font-medium placeholder:text-[#ff5555]"
                      : "border-[2px] border-[#E6E6E6] placeholder:placeholder-[#999]"
                  }  rounded-lg block text-gray-700/80   w-full   focus:outline-none  py-2.5 px-4`}
                />
                {errors.firstName && touched.firstName ? (
                  <div className="font-medium text-[#ff5555]">
                    {errors.firstName}
                  </div>
                ) : null}
              </div>
              <div>
                <CustomeLabel
                  name={"Last Name"}
                  astric={true}
                  error={errors.lastName && touched.lastName}
                />
                <Field
                  name="lastName"
                  placeholder="Enter your Last Name "
                  className={` ${
                    errors.lastName && touched.lastName
                      ? "border-[3px] border-[#ff5555]  placeholder:font-medium placeholder:text-[#ff5555]"
                      : "border-[2px] border-[#E6E6E6] placeholder:placeholder-[#999]"
                  }  rounded-lg block text-gray-700/80   w-full   focus:outline-none  py-2.5 px-4`}
                />

                {errors.lastName && touched.lastName ? (
                  <div className="font-medium text-[#ff5555]">
                    {errors.lastName}
                  </div>
                ) : null}
              </div>
              <div>
                <CustomeLabel
                  name={"Email"}
                  astric={true}
                  error={errors.email && touched.email}
                />
                <Field
                  name="email"
                  placeholder="Enter your Email "
                  className={` ${
                    errors.email && touched.email
                      ? "border-[3px] border-[#ff5555]  placeholder:font-medium placeholder:text-[#ff5555]"
                      : "border-[2px] border-[#E6E6E6] placeholder:placeholder-[#999]"
                  }  rounded-lg block text-gray-700/80   w-full   focus:outline-none  py-2.5 px-4`}
                />
                {errors.email && touched.email ? (
                  <div className="font-medium text-[#ff5555]">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <CustomeLabel name={"Phone Number"} />
                {/* <Field
                  name="lastName"
                  placeholder="Enter your Phone Number "
                  className="border border-[#E6E6E6]  rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none  py-2.5 px-4"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
                <ErrorMessage name="lastName" /> */}
                <div className="">
                  <div
                    className={` ${
                      errors.phoneNumber && touched.phoneNumber
                        ? "border-[3px] border-[#ff5555]  placeholder:font-medium placeholder:text-[#ff5555]"
                        : "border-[2px] border-[#E6E6E6] placeholder:placeholder-[#999]"
                    }  rounded-lg block text-gray-700/80   w-full   focus:outline-none  py-2.5 px-4`}
                    // className=" relative border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full outline-none  focus:outline-none py-2.5 px-4"
                  >
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="BD"
                      value={values["phoneNumber"]}
                      onChange={(number) =>
                        setFieldValue("phoneNumber", number)
                      }
                      onBlur={() => {
                        {
                          values["phoneNumber"] &&
                          isValidPhoneNumber(values["phoneNumber"])
                            ? null
                            : setFieldError(
                                "phoneNumber",
                                "Invalid Phone number"
                              );
                        }
                      }}
                      onFocus={() => {
                        {
                          values["phoneNumber"] &&
                          isValidPhoneNumber(values["phoneNumber"])
                            ? null
                            : setFieldError(
                                "phoneNumber",
                                "Invalid Phone number"
                              );
                        }
                      }}
                      placeholder="Enter phone number"
                    />
                  </div>
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className="font-medium text-[#ff5555]">
                      {errors.phoneNumber}
                    </div>
                  ) : null}
                  {/* {values["phoneNumber"] === "" ||
                  values["phoneNumber"] === undefined ? (
                    ""
                  ) : isValidPhoneNumber(values["phoneNumber"]) ? null : (
                    <div className="font-medium text-[#ff5555]">
                      Invalid Phone number
                    </div>
                  )} */}
                </div>
              </div>
            </div>
            <div>
              <CustomeLabel name={"Company"} />
              <Field
                name="company"
                placeholder="Enter your Company "
                className="border border-[#E6E6E6]  rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none  py-2.5 px-4"
              />
              {errors.company && touched.company ? (
                <div>{errors.company}</div>
              ) : null}
              <ErrorMessage name="company" />
            </div>

            <div>
              <CustomeLabel
                name={"Message"}
                astric={true}
                error={errors.email && touched.email}
              />
              <Field
                name="message"
                placeholder="Enter your Message "
                className={` ${
                  errors.email && touched.email
                    ? "border-[3px] border-[#ff5555]  placeholder:font-medium placeholder:text-[#ff5555]"
                    : "border-[2px] border-[#E6E6E6] placeholder:placeholder-[#999]"
                }  rounded-lg block text-gray-700/80   w-full   focus:outline-none  py-2.5 px-4`}
              />
              {errors.message && touched.message ? (
                <div className="font-medium text-[#ff5555]">
                  {errors.message}
                </div>
              ) : null}
            </div>
            <div className="form-control flex items-center gap-2">
              <input
                id="aggree"
                type="checkbox"
                className="cursor-pointer "
                value={aggree}
                onChange={() => setAggree(!aggree)}
                required

                // checked={aggree}
              />
              <label htmlFor="aggree">
                <p className="  m-0 p-0 font-medium cursor-pointer ">
                  <span className="text-[#1A1A1A] text-sm lg:text-[16px] ">
                    I’d like to receive more information about company, I
                    understand and agree to the
                  </span>
                </p>
              </label>
              <span className="text-[#2AA7DF] text-sm lg:text-[14px] underline cursor-pointer ">
                {" "}
                Privacy Policy
              </span>
            </div>
            <button
              type="submit"
              disabled={
                loading || error || !aggree || Object.keys(errors).length > 0
              }
              className="w-full px-5 py-2.5 bg-[#2AA7DF] text-white rounded-lg font-medium mt-2.5 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-4"
            >
              {loading && <Loader size="sm" variant="info" />}

              <span>Send Message</span>
            </button>
          </Form>
        )}
      </Formik>

      {/* <form className="pb-3.5 flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <CustomeLabel name={"First Name"} />
            <input
              className="border border-[#E6E6E6]  rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none  py-2.5 px-4"
              placeholder="Enter your Frist Name "
              type="text"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <CustomeLabel name={"Last Name"} />
            <input
              className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
              placeholder="Enter your Last Name "
              type="text"
              name="lastName"
              value={formValue.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <CustomeLabel name={"Email"} />
            <input
              className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
              placeholder="your@company.com"
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relatived">
            <CustomeLabel name={"Phone Number"} />
          </div>
        </div>
        <div>
          <label className="flex pb-2 text-sm lg:text-[16px] text-[#1A1A1A] capitalize font-normal ">
            Company
          </label>
          <input
            className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
            placeholder="Enter your company name"
            type="text"
            name="company"
            value={formValue.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <CustomeLabel name={"Message"} />
          <textarea
            className="border border-[#E6E6E6] rounded-lg block text-gray-700/80 placeholder:placeholder-[#999] placeholder-xs  w-full   focus:outline-none py-2.5 px-4"
            placeholder="Tell us what we can help you with"
            type="text"
            rows={4}
            name="message"
            value={formValue.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control flex items-center gap-2">
          <input
            id="aggree"
            type="checkbox"
            className="cursor-pointer "
            value={aggree}
            onChange={() => setAggree(!aggree)}
            required

            // checked={aggree}
          />
          <label htmlFor="aggree">
            <p className="  m-0 p-0 font-medium cursor-pointer ">
              <span className="text-[#1A1A1A] text-sm lg:text-[16px] ">
                I’d like to receive more information about company, I understand
                and agree to the
              </span>
            </p>
          </label>
          <span className="text-[#2AA7DF] text-sm lg:text-[14px] underline cursor-pointer ">
            {" "}
            Privacy Policy
          </span>
        </div>
        <button
          disabled={loading || error || !aggree}
          className="w-full px-5 py-2.5 bg-[#2AA7DF] text-white rounded-lg font-medium mt-2.5 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-4"
        >
          {loading && <Loader size="sm" variant="info" />}

          <span>Send Message</span>
        </button>
      </form> */}
    </div>
  );
};

export default FormComponent;

export const CustomeLabel = ({ name, astric = false, error }) => {
  return (
    <label
      className={`${
        error ? "text-[#d92c20dc]" : "text-[#1A1A1A]"
      } flex  pb-2 lg:text-[16px] text-sm  capitalize font-normal`}
    >
      {name}

      {astric && (
        <span className="text-[#d92c20dc] text-[8px] px-1 py-1">
          <FaStarOfLife />
        </span>
      )}
    </label>
  );
};
