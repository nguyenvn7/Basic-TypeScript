import logo from '../../Assets/Images/social-media-influencer.png';

function Login() {
  return (
    <section className="Login container sm:px-6 xl:p-24  flex h-screen">
      <section
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur illum facere libero
        dolore enim blanditiis mollitia velit ad ea, consequatur dolores aliquid, eum id.
        Reprehenderit numquam molestias tempora provident dicta.
      </section>
      <section>
        <div>Sign In</div>
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
        <button>Login</button>
      </section>
    </section>
  );
}

export default Login;
