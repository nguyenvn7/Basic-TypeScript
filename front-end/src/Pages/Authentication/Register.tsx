import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { RegisterAPI } from '../../Api/Authentication.api';
import useDarkMode from '../../Hooks/useDarkMode';
import useFormValidation from '../../Hooks/useFormValidation';
import { Input, User } from '../../Models';
import { validateEmail } from '../../Utils/validateEmail';
import Bottom from './Bottom';
import Header from './Header';

const inputArray: Input[] = [
  {
    type: 'text',
    placeholder: 'Enter email or user name',
    key: 'account',
  },
  {
    type: 'text',
    placeholder: 'Create User Name',
    key: 'userName',
  },
  {
    type: 'text',
    placeholder: 'Contact Number',
    key: 'phoneNumber',
  },
  {
    type: 'password',
    placeholder: 'Password',
    key: 'password',
  },
];

function Register(): JSX.Element {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { data, handleChange, handleBlur, errors, handleCheckSubmit } = useFormValidation<User>({
    validations: {
      userName: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
      account: {
        custom: {
          isValid: (value: string) => validateEmail(value),
          message: 'The account is invalid',
        },
      },
      phoneNumber: {
        custom: {
          isValid: (value) => value?.length === 10,
          message: 'Your phone number has at least 10 digits',
        },
      },
      password: {
        required: {
          value: true,
          message: 'This field is required',
        },
        custom: {
          isValid: (value) => value?.length > 6,
          message: 'The password needs has at least 6 characters',
        },
      },
    },
    initial: {
      userName: '',
      password: '',
      account: '',
      phoneNumber: '',
    },
  });

  const handleSubmit = () => {
    if (handleCheckSubmit() !== false) {
      RegisterAPI(data).then((res) => console.log(res?.status));
    }
  };

  return (
    <section className="pt-4 h-full overflow-hidden text-dark">
      <section className="font-Poppins mt-4 mb-14 mx-4 md:mx-8 xl:mx-44 lg:flex lg:h-screen ">
        <div className="flex justify-between gap-4">
          <div className="font-semibold text-lg ">Your Logo</div>
          <div>
            <BsFillSunFill
              className="text-2xl cursor-pointer"
              color="#e9c46a"
              onClick={toggleDarkMode}
            />
          </div>
        </div>
        <section className="lg:flex lg:flex-row lg:items-center mt-10 gap-10 flex-1 ">
          <Header type="Register" path="/Login" />
          <div className="flex-1">
            <div className="mb-11">
              <div className="text-3xl font-medium mb-7">Sign Up</div>
              <div className="flex flex-col gap-9 mb-4">
                {inputArray.map(
                  (value): JSX.Element => (
                    <div className="flex flex-col gap-2" key={value.key}>
                      <input
                        {...value}
                        onChange={handleChange(value.key as keyof User)}
                        onBlur={handleBlur(value.key as keyof User)}
                        className="input-form"
                      />
                      {errors[value.key as keyof User] && (
                        <p className="text-sm text-red-500">{errors[value.key as keyof User]}</p>
                      )}
                    </div>
                  )
                )}
              </div>
              <div className="text-sm text-gray-500 text-right">Forgor password ?</div>
            </div>
            <button
              className={`btn-form ${
                (Object.keys(errors).length > 0 && 'cursor-not-allowed opacity-50') ||
                'cursor-pointer'
              }`}
              onClick={handleSubmit}
            >
              Register
            </button>
            <Bottom />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Register;
