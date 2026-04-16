import { useState } from "react";
import CheckBox from "../components/Checkbox";
import { Button } from "@headlessui/react";
import { categories, months, years } from "../constants";

const Timeline = () => {
  const [visibleCategories, setVisibleCategories] = useState(categories);

  const checkboxOnChange = (category: string) => {
    if (visibleCategories.includes(category)) {
      const removed = visibleCategories.filter((c) => c !== category);
      setVisibleCategories([...removed]);
    } else {
      const added = [...visibleCategories, category];
      setVisibleCategories(added);
    }
  };

  return (
    <div className="flex flex-col h-screen text-yellow-200 pl-2">
      <h2 className="text-center text-4xl pt-3">
        My Career (and other activities)
      </h2>
      <div className="flex gap-5 py-3">
        {categories.map((c, index) => {
          return (
            <CheckBox
              key={index}
              checked={visibleCategories.includes(c)}
              label={c}
              onChange={() => checkboxOnChange(c)}
            />
          );
        })}
        <Button
          className="bg-yellow-200 text-teal-800 px-2 rounded-md cursor-pointer"
          onClick={() => {
            setVisibleCategories(categories);
          }}
        >
          Reset
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="grid w-full grid-cols-13 auto-rows-[60px] gap-3 pb-3">
          <div>Year</div>
          {months.map((m, index) => {
            return <div key={index}>{m}</div>;
          })}
          {years.map((y, index) => {
            return (
              <div key={index} className={`row-${index + 2} col-1`}>
                {y}
              </div>
            );
          })}

          {visibleCategories.includes("Education") && (
            <>
              <div className="col-start-11 col-end-14 row-start-2 bg-purple-200">
                University
              </div>
              <div className="bg-purple-200 col-start-2 col-end-14 row-start-3"></div>
              <div className="bg-purple-200 col-start-2 col-end-14 row-start-4"></div>
              <div className="bg-purple-200 col-start-2 col-end-14 row-start-5"></div>
              <div className="bg-purple-200 col-start-2 col-end-8 row-start-6"></div>
              <div className="col-start-10 col-end-14 row-start-4 bg-teal-300">
                Year abroad
              </div>
              <div className="bg-teal-300 col-start-2 col-end-7 row-start-5"></div>
            </>
          )}

          {visibleCategories.includes("Software Development") && (
            <>
              <div className="bg-blue-300 row-start-7 col-start-3 col-end-6">
                Trainee at coding bootcamp
              </div>
              <div className="bg-amber-400 row-start-7 col-start-8 col-end-14">
                Junior Developer in Test
              </div>
              <div className="bg-rose-300 row-start-8 col-start-2 col-end-14">
                Software Developer at BookingLive
              </div>
              <div className="bg-rose-300 row-start-9 col-start-2 col-end-8"></div>
              <div className="bg-lime-300 row-start-9 col-start-8 col-end-14">
                Full-stack Software Engineer at MadeTech
              </div>
              <div className="bg-lime-300 row-start-10 col-start-2 col-end-8"></div>
              <div className="bg-blue-500 row-start-11 col-start-12 col-end-14">
                Software Developer at Outlook Energy
              </div>
              <div className="bg-blue-500 row-start-12 col-start-2 col-end-14"></div>
              <div className="bg-blue-500 row-start-13 col-start-2 col-end-13"></div>
            </>
          )}
          {visibleCategories.includes("Other") && (
            <>
              <div className="bg-red-400 row-start-10 col-start-8 col-end-14">
                Gap year in Latin America
              </div>
              <div className="bg-red-400 row-start-11 col-start-2 col-end-8"></div>
            </>
          )}

          {visibleCategories.includes("Animal Advocacy") && (
            <>
              <div className="bg-emerald-300 col-start-2 col-end-14 row-start-11 opacity-60">
                Research Paper Summariser at Faunalytics
              </div>
              <div className="bg-emerald-300 col-start-2 col-end-14 row-start-12 opacity-60"></div>
              <div className="bg-pink-200 col-start-13 row-start-13">
                FutureKind Fellow at Electric Sheep
              </div>
              <div className="bg-pink-200 col-start-2 col-end-4 row-start-14"></div>
            </>
          )}

          {visibleCategories.includes("Effective Altruism") && (
            <>
              <div className="bg-cyan-600 col-start-2 col-end-13 row-start-13 opacity-60">
                Co-organiser at Effective Altruism Bristol
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
