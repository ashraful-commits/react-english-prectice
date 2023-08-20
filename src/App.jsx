import { useEffect, useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import englishLearningQuestions from "./components/interviewQuestions ";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillPlayCircle,
} from "react-icons/ai";
function App() {
  const [next, setNext] = useState(null);
  const [startLimt, setStartLimt] = useState(null);
  const [endLimt, setEndLimit] = useState(null);
  const [Level, setLevel] = useState("");
  const [score, setScore] = useState(0);
  const [bgColor, setBgColor] = useState([]);
  const [correctAns, setCorrectAns] = useState([]);
  const [InterviewQuestionType, setInterviewQuestionType] = useState([]);

  const configureFunction = (start = 0, end = 5, level = "easy", data) => {
    const InterviewQuestion = data
      .slice(start, end)
      .filter((item) => item.level == level);
    setInterviewQuestionType(InterviewQuestion);
    if (InterviewQuestion.length <= 0) {
      toast(`No ${Level} type question`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast(`${InterviewQuestion.length} ${Level} type question`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleStartAgain = () => {
    setNext(null),
      setBgColor([]),
      setCorrectAns([]),
      setScore(0),
      setEndLimit(null),
      setStartLimt(null);
    setLevel("easy");
    setInterviewQuestionType([]);
  };
  const handleStart = (e) => {
    e.preventDefault();
    if (startLimt === null) {
      toast(`Set start value!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (endLimt == null) {
      toast(`Set end value!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (Level == "") {
      toast(`Set quastion type!`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      configureFunction(startLimt, endLimt, Level, englishLearningQuestions);
      setNext(0);
    }
  };
  const handlePrev = () => {
    if (next == 0) {
      return false;
    }
    setNext(next - 1);
  };
  const handleNext = () => {
    if (next != InterviewQuestionType.length) {
      if (!bgColor.some((item) => item.Q == next)) {
        return false;
      } else {
        setNext((prev) => prev + 1);
      }
    } else {
      setNext(InterviewQuestionType.length);
    }
  };
  //
  const handleEndlemet = (e) => {
    e.preventDefault();
    setEndLimit(e.target.value);
  };
  const handleStartLemit = (e) => {
    e.preventDefault();
    setStartLimt(e.target.value);
  };
  const handleSelect = (e, item, index) => {
    e.preventDefault();
    let isScore = item == InterviewQuestionType[next].answer;

    if (bgColor.some((item) => item.Q == next)) {
      return false;
    }
    {
      setBgColor((prev) => [
        ...prev,
        {
          Q: next,
          index: index,
          item,
        },
      ]);
    }

    if (!isScore) {
      if (correctAns.some((items) => items.Q === next)) {
        return false;
      } else {
        correctAns.push({
          Q: next,
          Ans: InterviewQuestionType[next].answer,
          question: InterviewQuestionType[next].question,
        });
      }
    }
    if (isScore) {
      setScore((prev) => prev + 1);
    }
  };
  const handleType = (e) => {
    setLevel(e.target.value);
  };
  useEffect(() => {}, [InterviewQuestionType]);
  return (
    <>
      <div className="container-fluid bg-gradient-to-b from-sky-100 to-sky-600 flex justify-center items-center w-screen h-auto pb-96 pt-32">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <div className="row flex justify-center items-center flex-col">
          <h1 className=" text-xl my-14 lg:text-4xl md:text-2xl text-purple-600 font-extrabold uppercase">
            Let&apos;s Practice English
          </h1>

          {next === null ? (
            <div className="col w-[300px] md:w-[500px] lg:w-[700px] px-5 rounded-xl h-[auto] py-20 lg:py-40 gap-10 flex items-center flex-col lg:flex-col bg-gradient-to-b from-purple-100 to-white  ">
              <form
                onSubmit={handleStart}
                action=""
                className="flex overflow-hidden  flex-col lg:items-center items-end md:items-center lg:flex-col md:flex-col gap-2 "
              >
                <div className="type flex items-center gap-2 md:flex-row lg:flex-row">
                  <label
                    htmlFor=""
                    className="text-sm text-center lg:text-lg font-bold   text-purple-500 mx-1"
                  >
                    Question Type:
                  </label>
                  <select
                    onChange={handleType}
                    className="w-32 text-sm focus:outline-none text-center lg:text-lg  md:text-sm font-bold text-black "
                    name=""
                    id=""
                  >
                    <option value="">---</option>
                    <option value="easy">Easy</option>
                    <option value="hard">Hard</option>
                    <option value="medium">Medium</option>
                  </select>
                </div>
                <div className="endLimt flex md:justify-center  items-end lg:items-center gap-2 md:flex-row lg:flex-row">
                  <label
                    htmlFor=""
                    className="text-sm text-center lg:text-lg  md:text-sm font-bold text-purple-500 mx-1"
                  >
                    Quantity:
                  </label>
                  <input
                    onChange={handleStartLemit}
                    type="text"
                    className="w-12 text-black px-1 focus:outline-none"
                    placeholder="start"
                  />
                  <input
                    onChange={handleEndlemet}
                    type="text"
                    className="w-12 text-black px-1 focus:outline-none"
                    placeholder="end"
                  />

                  <span className="text-lg font-bold">
                    {endLimt - startLimt}/{englishLearningQuestions.length}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-[180px] mt-12 py-2 px-4 lg:w-[210px] lg:py-4 rounded-full text-white text-xl font-extrabold bg-purple-600"
                >
                  Start Now
                </button>
              </form>
            </div>
          ) : (
            <div className="col w-[400px] md:w-[500px] lg:w-[700px] px-5 rounded-xl h-[auto] flex justify-center bg-gradient-to-b from-purple-100 to-white">
              {next === InterviewQuestionType.length ? (
                <div className="card p-5 w-full">
                  <div className="card-header w-full my-5 text-center">
                    <h1 className="text-2xl w-full border-b-2 border-b-purple-400 py-2 font-bold text-purple-700">
                      Score Board
                    </h1>
                  </div>
                  <div className="card-body mt-10 text-center flex flex-col gap-2 my-5">
                    <p className="text-md lg:text-lg font-bold  py-1">
                      Your score is:
                      <span className="mx-3  border-sky-500 border-2 rounded-lg px-4 py-2">
                        {score}
                      </span>
                    </p>
                    {correctAns.length > 0 && (
                      <h4 className="text-xl text-sky-600 font-bold border-b-2 py-1">
                        Correct anwsers:
                      </h4>
                    )}
                    {correctAns?.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="text-left flex-col text-sky-800 mb-0 flex my-5 gap-5 border-b py-2"
                        >
                          <span>
                            <span className="text-purple-500 font-bold">
                              {item.Q}.
                            </span>
                            <span> {item.question}</span>
                          </span>

                          <span>
                            <span className="text-purple-500 font-bold">
                              Ans.
                            </span>
                            {item.Ans}
                          </span>
                        </p>
                      );
                    })}
                  </div>
                  <div className="card-footer flex  justify-center ">
                    <button
                      onClick={handleStartAgain}
                      className="bg-purple-500 hover:bg-purple-700 hover:text-sky-100 w-full py-1 text-sky-100 text-xl rounded-full font-bold"
                    >
                      Start again
                    </button>
                  </div>
                </div>
              ) : (
                <div className="card p-5 w-full">
                  <div className="card-header w-ful my-5">
                    <div className="flex justify-between  my-3 border-b-2 border-b-purple-300 pb-2  rounded-lg px-3 py-3 w-full items-center">
                      <div className="score flex overflow-hidden flex-col justify-center md:items-start lg:flex-row md:flex-col ">
                        <h5 className="text-sm md:text-md lg:text-lg text-purple-500 font-bold">
                          Score:
                          <span className="text-black mx-2">{score}</span>
                        </h5>
                        <h5 className="text-sm md:text-sm  text-purple-500 lg:text-lg font-bold ">
                          Anwsered:
                          <span className="text-gray-900 mx-2">
                            {next}/{InterviewQuestionType.length}
                          </span>
                        </h5>
                      </div>
                      <div>
                        <button
                          onClick={handleStartAgain}
                          className="bg-purple-500 px-8 py-2 rounded-full text-white hover:bg-purple-700"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                    {InterviewQuestionType.length > 0 && (
                      <h1 className="text-md lg:text-lg select-none w-full font-bold text-purple-700 mt-10  flex gap-2">
                        <span className="px-3">{next + 1}.</span>
                        <span>{InterviewQuestionType[next]?.question}</span>
                      </h1>
                    )}
                  </div>
                  {InterviewQuestionType.length == 0 ? (
                    <p className="my-20 text-center text-red-600">
                      Try another type or increase question limit
                    </p>
                  ) : (
                    <div className="card-body my-10 justify-center flex flex-col gap-2">
                      {InterviewQuestionType[next]?.options.map(
                        (item, index) => {
                          return (
                            <button
                              onClick={(e) => handleSelect(e, item, index)}
                              className={` py-2 text-md flex justify-center font-bold  ${
                                bgColor.some(
                                  (item) =>
                                    item.index == index && item.Q == next
                                )
                                  ? bgColor.some(
                                      (bgItem) =>
                                        bgItem.item ==
                                        InterviewQuestionType[next].answer
                                    )
                                    ? "text-green-500"
                                    : "text-red-500"
                                  : "text-black-700"
                              } `}
                              key={index}
                            >
                              {bgColor.some(
                                (item) => item.index == index && item.Q == next
                              ) ? (
                                bgColor.some(
                                  (bgItem) =>
                                    bgItem.item ==
                                    InterviewQuestionType[next].answer
                                ) ? (
                                  <span className="w-5 h-5">
                                    <AiFillCheckCircle className="" />
                                  </span>
                                ) : (
                                  <span className="w-5 h-5">
                                    <AiFillCloseCircle />
                                  </span>
                                )
                              ) : (
                                <>
                                  <AiFillPlayCircle className="text-purple-500 mx-4" />
                                </>
                              )}
                              {item}
                            </button>
                          );
                        }
                      )}
                    </div>
                  )}
                  <div className="card-footer flex gap-5 justify-center ">
                    {next > 0 && (
                      <button
                        onClick={handlePrev}
                        className="bg-sky-500 hover:bg-sky-700 hover:text-sky-100 w-full py-2 rounded-full text-sky-100 text-xl font-bold"
                      >
                        Prev
                      </button>
                    )}
                    <button
                      onClick={handleNext}
                      className="bg-purple-500 hover:bg-purple-700 hover:text-sky-100 w-full py-2 rounded-full text-sky-100 text-xl font-bold"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
