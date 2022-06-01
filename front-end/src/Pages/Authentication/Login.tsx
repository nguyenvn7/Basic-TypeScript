import { FormEvent, useEffect } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { loginAPI, RefreshToken } from '../../Api/Authentication.api';
import useDarkMode from '../../Hooks/useDarkMode';
import useFormValidation from '../../Hooks/useFormValidation';
import { User } from '../../Models';
import { config } from '../../Utils/toast.config';
import Bottom from './Bottom';
import Header from './Header';

function Login(): JSX.Element {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { data, handleChange, handleBlur, errors, handleCheckEmpty } = useFormValidation<User>({
    validations: {
      account: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
      password: {
        required: {
          value: true,
          message: 'This field is required',
        },
      },
    },
    initial: {
      account: '',
      password: '',
    },
  });
  const { state } = useLocation() as { state: { success?: boolean } };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (handleCheckEmpty() !== false) {
      loginAPI(data)
        .then((res) => res?.json())
        .then((res) => {
          switch (res?.message) {
            case 'Bad Request':
              toast.error('The user name or password is incorrect', config);
              break;
            case 'Expired':
              RefreshToken();
              break;
          }
        });
    }
  };

  useEffect(() => {
    if (state?.success) {
      toast.success('Successful registration', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      window.history.replaceState(null, '');
    }
  }, []);

  return (
    <section className=" pt-4 h-full overflow-hidden text-dark">
      <section className="font-Poppins pb-12 mx-4 md:mx-8 xl:mx-44 lg:flex lg:h-screen ">
        <div className="flex justify-between gap-4">
          <div className="font-semibold text-lg">Your Logo</div>
          <div>
            <BsFillSunFill
              className="text-2xl cursor-pointer"
              onClick={toggleDarkMode}
              color="#e9c46a"
            />
          </div>
        </div>

        <section className="lg:flex lg:flex-row lg:items-center mt-10 gap-10 flex-1 ">
          <Header type="Register" path="/Register" />
          <form className="flex-1" onSubmit={handleSubmit}>
            <div className="mb-11">
              <div className="text-3xl font-medium mb-7">Sign In</div>
              <div className="flex flex-col gap-9 mb-4">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="Enter email or user name"
                    onChange={handleChange('account')}
                    onBlur={handleBlur('account')}
                    className="input-form"
                  />
                  {errors.account && <p className="text-sm text-red-500">{errors.account}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="password"
                    placeholder="password"
                    onChange={handleChange('password')}
                    onBlur={handleBlur('password')}
                    className="input-form"
                  />
                  {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                </div>
              </div>
              <div className="text-sm text-gray-500 text-right">Forgor password ?</div>
            </div>
            <button
              className={`btn-form ${
                (Object.keys(errors).length > 0 && 'cursor-not-allowed opacity-50') ||
                'cursor-pointer'
              }`}
            >
              Login
            </button>
            <Bottom />
          </form>
        </section>
      </section>
      <ToastContainer pauseOnFocusLoss={false} />
    </section>
  );
}

export default Login;
