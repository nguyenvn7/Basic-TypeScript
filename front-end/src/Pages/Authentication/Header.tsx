import { Link } from 'react-router-dom';
import image from '../../Assets/Images/Saly-14.png';

function Header({ type, path }: { type: string; path: string }) {
  return (
    <>
      <section className="mb-12 lg:m-0 lg:-translate-y-32 flex-1 relative ">
        <div className="mb-8">
          <div className="text-2xl lg:text-5xl lg:mb-6 font-semibold">Sign in up </div>
          <div className="text-xl lg:text-4xl font-medium">Lorem Ipsum is simply</div>
        </div>
        <div className="text-sm text-base">
          If you already have an account register You can <pre />
          <Link to={path} className="text-violet-800 font-semibold ">
            {type} here !
          </Link>
        </div>
        <div className="absolute right-0 hidden lg:block">
          <img src={image} alt="Saly" />
        </div>
      </section>
    </>
  );
}

export default Header;
