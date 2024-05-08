import "./App.css";

function App() {
  return (
    <div className="Abdul Sadath">
      <nav className="flex gap-2 justify-between p-8 items-center">
        <div className="flex gap-2 items-center">
          <h1 className="rounded-full size-12 text-center font-bold text-2xl pc shadow-md shadow-slate-300 p-2 border">
            W
          </h1>
          <h1 className="text-4xl tracking-tighter pc">
            Hygge<strong>X</strong>
          </h1>
        </div>
        <div className="sm:hidden">
          <img
            src="https://www.svgrepo.com/show/532195/menu.svg"
            alt="Menu icon"
            className="size-10 "
          />
        </div>
        <div className="grow hidden sm:flex gap-8 items-center justify-end">
          <ul className="flex gap-8 font-semibold text-slate-500">
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
          <button
            type="button"
            className="rounded-full bgg text-white font-semibold py-2 px-8"
          >
            Login
          </button>
        </div>
      </nav>
      <ul className="px-8 py-6 flex gap-2 font-semibold text-slate-500">
        <li>
          <img
            src="https://www.svgrepo.com/show/491645/house.svg"
            alt="Home icon"
            className="size-6"
          />
        </li>
        <li className="font-bold pc">&gt;</li>
        <li>Flashcard</li>
        <li className="font-bold pc">&gt;</li>
        <li>Mathematics</li>
        <li className="font-bold pc">&gt;</li>
        <li className="font-bold pc">Relation and Function</li>
      </ul>
      <h1 className="text-3xl font-bold g px-8 py-4">
        Relations and Functions &#40; Mathematics &#41;
      </h1>
      <ul className="flex gap-12 p-4 font-semibold justify-center text-slate-500">
        <li className="font-bold pc p-1 border-b-2 border-[#08259b]">Sutdy</li>
        <li>Quiz</li>
        <li>Test</li>
        <li>Game</li>
        <li>Others</li>
      </ul>
      <div className="flex flex-col rounded-3xl p-6 bggcurve text-white aspect-video w-[500px] mx-auto">
        <div className="grow relative grid place-items-center">
          <div className="absolute top-0 left-0 w-full flex justify-between">
            <div className="p-1.5 bg-white rounded-full">
              <img
                src="https://www.svgrepo.com/show/510861/bulb.svg"
                alt="Home icon"
                className="size-6"
              />
            </div>
            <div className="p-1.5 bg-white rounded-full">
              <img
                src="https://www.svgrepo.com/show/491488/speaker-wave-2.svg"
                alt="Home icon"
                className="size-6"
              />
            </div>
          </div>
          <h1 className="text-3xl font-semibold tracking-widest">
            9+6+7x-2x-3
          </h1>
        </div>
      </div>
      <div className="p-6 flex gap-12 items-center justify-center">
        <img
          src="https://www.svgrepo.com/show/491531/arrow-cw.svg"
          alt="Home icon"
          className="size-6"
        />
        <button
          type="button"
          className="size-12 bgg rounded-full text-white font-semibold"
        >
          &lt;
        </button>
        <h5 className="font-bold">01/10</h5>
        <button
          type="button"
          className="size-12 bgg rounded-full text-white font-semibold"
        >
          &gt;
        </button>

        <img
          src="https://www.svgrepo.com/show/521682/full-screen.svg"
          alt="Home icon"
          className="size-6"
        />
      </div>
      <div className="my-8 flex justify-between px-8">
        <div className="flex items-center gap-2">
          <div className="">
            <h1 className="rounded-full size-12 text-center font-bold text-2xl pc shadow-md shadow-slate-300 p-2 border">
              W
            </h1>
          </div>
          <div className="flex flex-col">
            <h6 className="text-xs font-semibold">Powered by</h6>
            <h1 className="text-2xl tracking-tighter pc leading-6">
              Hygge<strong>X</strong>
            </h1>
          </div>
        </div>
        <div className="flex justify-between gap-2 items-center px-2 rounded-full border-2 border-[#08259b]">
          {/* <span className="text-white text-center font-bold rounded-full bg-[#08259b] text-2xl size-7">
            +
          </span> */}
          <img
            className="size-8"
            src="https://www.svgrepo.com/show/510786/add-plus-circle.svg"
            alt="Create"
          />
          <h4 className="font-semibold pc">Create Flashcard</h4>
        </div>
      </div>
      <div className="grid gap-4 p-8 w-3/4 font-semibold text-slate-800 text-sm">
        <h1 className="text-4xl font-bold g py-4">FAQ</h1>
        <div className="border flex p-2 rounded-md border-[#08259b]">
          <h5 className="truncate grow">
            Can education flashcards be used for groups?
          </h5>
          <img
            src="https://www.svgrepo.com/show/417749/arrow-bottom-1.svg"
            alt="arrow"
            className="size-6"
          />
        </div>
        <div className="border flex p-2 rounded-md border-[#08259b]">
          <h5 className="truncate grow">How do education flashcards work?</h5>
          <img
            src="https://www.svgrepo.com/show/417749/arrow-bottom-1.svg"
            alt="arrow"
            className="size-6"
          />
        </div>
        <div className="border flex p-2 rounded-md border-[#08259b]">
          <h5 className="truncate grow">
            Can education flashcards be used for test preparation?
          </h5>
          <img
            src="https://www.svgrepo.com/show/417749/arrow-bottom-1.svg"
            alt="arrow"
            className="size-6"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
