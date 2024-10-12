import DropDownMenu from "@/components/dropDownMenu";

export default function Home() {
  return (
    <div className="text-center min-h-screen container mx-auto p-8">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Test Your Knowledge in a Flash!{" "}
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Put your brain to the test with QuizPulse—a fun, fast-paced quiz
        platform. Explore a wide range of topics, challenge yourself, and see
        how quickly you can score. Compete with friends, track your progress,
        and keep your mind sharp. Ready for the challenge? Jump into QuizPulse
        now!
      </p>
      <DropDownMenu title="Subject" values={["soccer"]} />
      <DropDownMenu title="Subject" values={["soccer"]} />
      <DropDownMenu title="Subject" values={["soccer"]} />
      <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Start Quiz
      </button>
    </div>
  );
}
