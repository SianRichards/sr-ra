import { useState } from "react";
import CheckBox from "../components/Checkbox";
import Button from "../components/Button";
import { categories, modalContents, months, years } from "../constants";
import clsx from "clsx";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";

const Timeline = () => {
  const [visibleCategories, setVisibleCategories] = useState(categories);
  const [activeModal, setActiveModal] = useState<null | {
    title: string;
    description: string;
  }>(null);

  const checkboxOnChange = (category: string) => {
    if (visibleCategories.includes(category)) {
      const removed = visibleCategories.filter((c) => c !== category);
      setVisibleCategories([...removed]);
    } else {
      const added = [...visibleCategories, category];
      setVisibleCategories(added);
    }
  };

  const show = (category: string) => visibleCategories.includes(category);

  const hasEA = show("Effective Altruism");
  const hasAnimal = show("Animal Advocacy");
  const hasSoftware = show("Software Development");
  const hasEdu = show("Education");
  const hasOther = show("Other");

  const handleModal = (title: string) => {
    const content = modalContents.find((e) => e.title === title);
    if (content) setActiveModal(content);
  };

  const closeModal = () => setActiveModal(null);

  const InfoSymbol = ({ title }: { title: string }) => {
    return (
      <FontAwesomeIcon
        className="pt-1 pl-1 opacity-30 cursor-pointer text-gray-700"
        icon={faCircleInfo}
        onClick={() => handleModal(title)}
      />
    );
  };

  return (
    <div className="flex flex-col h-screen text-yellow-200 pl-2">
      <h2 className="text-center text-4xl pt-3">
        {visibleCategories.length === 0
          ? "you've destroyed my life's work... i hope you're pleased with yourself"
          : "My Career (and other activities)"}
      </h2>
      <div className="flex gap-5 py-3 ">
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
        <Button onClick={() => setVisibleCategories(categories)}>Reset</Button>
        <Button onClick={() => setVisibleCategories([])}>Remove all</Button>
      </div>
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="grid w-full grid-cols-13 auto-rows-[60px] gap-y-3 pb-3">
          <div></div>
          {months.map((m, index) => (
            <div key={index} className="sticky top-0 z-10 bg-teal-700">
              {m}
            </div>
          ))}
          {years.map((y, index) => {
            return (
              <div key={index} className={`row-${index + 2} col-1`}>
                {y}
              </div>
            );
          })}

          {activeModal && (
            <Modal
              title={activeModal.title}
              description={activeModal.description}
              onClose={closeModal}
            />
          )}

          {hasEdu && (
            <>
              <div className="col-start-11 col-end-14 row-start-2 bg-indigo-200 text-black p-2 rounded-sm">
                University
                <InfoSymbol title="University" />
              </div>
              <div className="bg-indigo-200 col-start-2 col-end-14 row-start-3 rounded-sm"></div>
              <div className="bg-indigo-200 col-start-2 col-end-14 row-start-4 rounded-sm"></div>
              <div className="bg-indigo-200 col-start-2 col-end-14 row-start-5 rounded-sm"></div>
              <div className="bg-indigo-200 col-start-2 col-end-8 row-start-6 rounded-sm"></div>
              <div className="col-start-10 col-end-14 row-start-4 bg-cyan-200 text-black p-2 rounded-sm">
                Year abroad
                <InfoSymbol title="Year abroad" />
              </div>
              <div className="bg-cyan-200 col-start-2 col-end-7 row-start-5 rounded-sm"></div>
            </>
          )}

          {hasSoftware && (
            <>
              <div className="bg-green-200 row-start-7 col-start-3 col-end-6 text-black p-2 rounded-sm">
                Trainee at coding bootcamp
                <InfoSymbol title="Trainee at coding bootcamp" />
              </div>
              <div className="bg-yellow-200 row-start-7 col-start-8 col-end-14 text-black p-2 rounded-sm">
                Junior Developer in Test
                <InfoSymbol title="Junior Developer in Test" />
              </div>
              <div className="bg-orange-300 row-start-8 col-start-2 col-end-14 text-black p-2 rounded-sm">
                Software Developer at BookingLive
                <InfoSymbol title="Software Developer at BookingLive" />
              </div>
              <div className="bg-orange-300 row-start-9 col-start-2 col-end-8 rounded-sm"></div>
              <div className="bg-emerald-300 row-start-9 col-start-8 col-end-14 text-black p-2 rounded-sm">
                Full-stack Software Engineer at MadeTech
                <InfoSymbol title="Full-stack Software Engineer at MadeTech" />
              </div>
              <div className="bg-emerald-300 row-start-10 col-start-2 col-end-8 rounded-sm"></div>
              <div className="bg-green-500 row-start-11 col-start-12 col-end-14 text-black p-2 rounded-sm z-10">
                Software Developer at Outlook Energy
                <InfoSymbol title="Software Developer at Outlook Energy" />
              </div>
              <div className="bg-green-500 row-start-12 col-start-2 col-end-14 rounded-sm"></div>
              <div className="bg-green-500 row-start-13 col-start-2 col-end-13 rounded-sm"></div>
            </>
          )}
          {hasOther && (
            <>
              <div className="bg-red-300 row-start-10 col-start-8 col-end-14 text-black p-2 rounded-sm">
                Gap year in Latin America
                <InfoSymbol title="Gap year in Latin America" />
              </div>
              <div className="bg-red-300 row-start-11 col-start-2 col-end-8 rounded-sm"></div>
            </>
          )}

          {hasAnimal && (
            <>
              <div className="bg-purple-300/60 col-start-2 col-end-14 row-start-11 text-black p-2 rounded-sm">
                Research Paper Summariser at Faunalytics
                <InfoSymbol title="Research Paper Summariser at Faunalytics" />
              </div>
              <div
                className={clsx(
                  "bg-pink-300 col-start-13 row-start-13 text-black p-2 rounded-sm truncate",
                  hasEA && "h-1/2",
                )}
              >
                FutureKind Fellow at Electric Sheep
                <InfoSymbol title="FutureKind Fellow at Electric Sheep" />
              </div>
              <div
                className={clsx(
                  "bg-pink-300 col-start-2 col-end-4 row-start-14 rounded-sm",
                  hasEA && "h-1/2 self-end",
                )}
              ></div>
            </>
          )}

          {hasEA && (
            <>
              <div className="bg-teal-200/60 col-start-2 col-end-13 row-start-13 text-black p-2 rounded-sm">
                Co-organiser at Effective Altruism Bristol
                <InfoSymbol title="Co-organiser at Effective Altruism Bristol" />
              </div>

              <div
                className={clsx(
                  "bg-yellow-200 col-start-13 row-start-13 text-black p-2 rounded-sm truncate",
                  hasAnimal && "h-1/2 self-end",
                )}
              >
                Guest at CEEALAR
                <InfoSymbol title="Guest at CEEALAR" />
              </div>

              <div
                className={clsx(
                  "bg-yellow-200 col-start-2 row-start-14 rounded-sm",
                  hasAnimal && "h-1/2",
                )}
              ></div>

              <div
                className={clsx(
                  "bg-amber-200 col-start-3 row-start-14 col-end-5 text-black p-2 rounded-sm",
                  hasAnimal && "h-1/2",
                )}
              >
                Member of EA Hub, Vietnam
                <InfoSymbol title="Member of EA Hub, Vietnam" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
