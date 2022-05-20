import { Input, User } from '../../Models';
import Bottom from './Bottom';
import Header from './Header';
import { BsFillSunFill } from 'react-icons/bs';
import useDarkMode from '../../Hooks/useDarkMode';
import useFormValidation from '../../Hooks/useFormValidation';

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
  const { data, handleChange, handleBlur } = useFormValidation<User>({
    validations: {
      userName: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: "You're not allowed to...",
        },
      },
      phoneNumber: {
        custom: {
          isValid: (value) => parseInt(value, 10) > 17,
          message: 'You have to be at least 18 years old.',
        },
      },
      password: {
        required: {
          value: true,
          message: 'This field is required',
        },
        custom: {
          isValid: (value) => value.length > 6,
          message: 'The password needs to be at...',
        },
      },
    },
  });

  return (
    <section className="pt-4 h-full overflow-hidden text-dark">
      <section className="font-Poppins mt-4 mb-12 mx-4 md:mx-8 xl:mx-44 lg:flex lg:h-screen ">
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
                    <input
                      {...value}
                      onChange={handleChange(value.key)}
                      onBlur={handleBlur()}
                      className="input-form"
                    />
                  )
                )}
              </div>
              <div className="text-sm text-gray-500 text-right">Forgor password ?</div>
            </div>
            <button className="text-white w-full bg-purple-300 shadow-lg shadow-purple-300/50 py-4 rounded-lg">
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
