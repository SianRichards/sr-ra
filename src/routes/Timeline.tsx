import { useState } from "react";
import CheckBox from "../components/Checkbox";
import Button from "../components/Button";
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
        {visibleCategories.length === 0 ? "you've destroyed my life's work... i hope you're pleased with yourself" : "My Career (and other activities)"}
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
          label="Reset"
          onClick={() => setVisibleCategories(categories)}
        />

        <Button label="Remove all" onClick={() => setVisibleCategories([])} />
      </div>
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="grid w-full grid-cols-13 auto-rows-[60px] gap-3 pb-3">
          <div></div>
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
              <div className="col-start-11 col-end-14 row-start-2 bg-indigo-200 text-black p-2 rounded-sm">
                University
              </div>
              <div className="bg-indigo-200 col-start-2 col-end-14 row-start-3 rounded-sm"></div>
              <div className="bg-indigo-200 col-start-2 col-end-14 row-start-4 rounded-sm"></div>
              <div className="bg-indigo-200 col-start-2 col-end-14 row-start-5 rounded-sm"></div>
              <div className="bg-indigo-200 col-start-2 col-end-8 row-start-6 rounded-sm"></div>
              <div className="col-start-10 col-end-14 row-start-4 bg-cyan-200 text-black p-2 rounded-sm">
                Year abroad
              </div>
              <div className="bg-cyan-200 col-start-2 col-end-7 row-start-5 rounded-sm"></div>
            </>
          )}

          {visibleCategories.includes("Software Development") && (
            <>
              <div className="bg-green-200 row-start-7 col-start-3 col-end-6 text-black p-2 rounded-sm">
                Trainee at coding bootcamp
              </div>
              <div className="bg-yellow-200 row-start-7 col-start-8 col-end-14 text-black p-2 rounded-sm">
                Junior Developer in Test
              </div>
              <div className="bg-orange-300 row-start-8 col-start-2 col-end-14 text-black p-2 rounded-sm">
                Software Developer at BookingLive
              </div>
              <div className="bg-orange-300 row-start-9 col-start-2 col-end-8 rounded-sm"></div>
              <div className="bg-emerald-300 row-start-9 col-start-8 col-end-14 text-black p-2 rounded-sm">
                Full-stack Software Engineer at MadeTech
              </div>
              <div className="bg-emerald-300 row-start-10 col-start-2 col-end-8 rounded-sm"></div>
              <div className="bg-teal-700 row-start-11 col-start-12 col-end-14 text-black p-2 rounded-sm">
                Software Developer at Outlook Energy
              </div>
              <div className="bg-teal-700 row-start-12 col-start-2 col-end-14 rounded-sm"></div>
              <div className="bg-teal-700 row-start-13 col-start-2 col-end-13 rounded-sm"></div>
            </>
          )}
          {visibleCategories.includes("Other") && (
            <>
              <div className="bg-red-300 row-start-10 col-start-8 col-end-14 text-black p-2 rounded-sm">
                Gap year in Latin America
              </div>
              <div className="bg-red-300 row-start-11 col-start-2 col-end-8 rounded-sm"></div>
            </>
          )}

          {visibleCategories.includes("Animal Advocacy") && (
            <>
              <div className="bg-purple-300 col-start-2 col-end-14 row-start-11 opacity-60 text-black p-2 rounded-sm">
                Research Paper Summariser at Faunalytics
              </div>
              <div className="bg-purple-300 col-start-2 col-end-14 row-start-12 opacity-60 rounded-sm"></div>
              <div className="bg-pink-300 col-start-13 row-start-13 text-black p-2 rounded-sm h-1/2 row-">
                FutureKind Fellow at Electric Sheep
              </div>
              <div className="bg-pink-300 col-start-2 col-end-4 row-start-14 rounded-sm"></div>
            </>
          )}

          {visibleCategories.includes("Effective Altruism") && (
            <>
              <div className="bg-teal-200 col-start-2 col-end-13 row-start-13 opacity-60 text-black p-2 rounded-sm">
                Co-organiser at Effective Altruism Bristol
              </div>
              <div className="bg-yellow-200 col-start-13 row-start-13 text-black p-2 rounded-sm h-1/2 self-end">
                Guest at CEEALAR
              </div>
              <div className="bg-yellow-200 col-start-2 row-start-14 rounded-sm"></div>
              <div className="bg-amber-200 col-start-3 row-start-14 col-end-5 text-black p-2 rounded-sm">
                Member of EA Hub, Vietnam
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
