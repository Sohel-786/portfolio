function Home() {
  return (
    <section className="h-screen">
      <header className="flex justify-between items-center px-8 py-5">
        <div>
          <img src="" alt="logo" />
        </div>

        <div className=" flex justify-center items-center">
          <nav className="flex justify-center items-center list-none gap-8">
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
            <li></li>
          </nav>
        </div>
      </header>

      <section className="flex justify-center items-center h-5/6 ">
        <div className="w-7/12 px-24">
          <h1 className="text-5xl my-8 font-bold">Hi, I am Sohel Shaikh</h1>
          <p className="leading-7 tracking-wide text-lg font-medium font-sans">
            I enjoy developing websites and web applications. I am equipped with
            a variety of technologies and tools to help me build the best
            possible product.
          </p>

          <div>
            <nav className="flex justify-center items-center list-none">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </nav>
          </div>
        </div>
        <div className="w-5/12 flex justify-center items-center">
          <div
            className="w-7/12 h-4/6 rounded-full border-2 border-black"
            style={{
              backgroundImage : "url('https://avatars.githubusercontent.com/u/119344940?v=4')",
              backgroundSize : "cover",
              backgroundRepeat : "no-repeat"
            }}
          ></div>
        </div>
      </section>
    </section>
  );
}

export default Home;
