import ToggleButton from "./ToggleButton";

const Introduction = () => {
  return (
    <div
      className="flex items-center justify-around border border-black h-[100vh]"
      id="intro-container"
    >
      <div className="flex justify-around w-[100%]">
        <ToggleButton />
        <div className="px-2 py-3 w-[17rem] text-left">
          <h1 className="text-4xl">
            Welcome to the <span className="font-bold">Frontend Quiz!</span>
          </h1>
          <p className="mt-10 italic">Pick a subject to get started.</p>
        </div>

        <div>
          <div className="btn flex items-center justify-start w-[24rem] px-2 py-3 rounded-2xl shadow-lg bg-white">
            <img
              src="../../assets/images/icon-html.svg"
              alt="HTML-logo"
              className="bg-red-200 rounded-md shadow-sm"
            />
            <div className="ml-7">
              <h1 className="font-bold">HTML</h1>
            </div>
          </div>

          <div className="btn flex items-center justify-start mt-8 px-2 py-3 rounded-2xl shadow-lg bg-white">
            <img
              src="../../assets/images/icon-css.svg"
              alt="CSS-logo"
              className="bg-green-200 rounded-md shadow-sm"
            />
            <div className="ml-7">
              <h1 className="font-bold">CSS</h1>
            </div>
          </div>

          <div className="btn flex items-center justify-start mt-8 px-2 py-3 rounded-2xl shadow-lg bg-white">
            <img
              src="../../assets/images/icon-js.svg"
              alt="js-logo"
              className="bg-blue-200 rounded-md shadow-sm"
            />
            <div className="ml-7">
              <h1 className="font-bold">Javascript</h1>
            </div>
          </div>

          <div className="btn flex items-center justify-start mt-8 px-2 py-3 rounded-2xl shadow-lg bg-white">
            <img
              src="../../assets/images/icon-accessibility.svg"
              alt="access-logo"
              className="rounded-md shadow-sm bg-purple-200"
            />
            <div className="ml-7">
              <h1 className="font-bold">Accessibility</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
