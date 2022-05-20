import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

function Bottom() {
  return (
    <>
      <div className="mt-14 mb-11 text-center text-gray-400">or continue with</div>
      <div className="flex justify-center align-middle gap-4 ">
        <BsFacebook className="text-blue-500 text-3xl" />
        <FcGoogle className="text-3xl" />
      </div>
    </>
  );
}

export default Bottom;
