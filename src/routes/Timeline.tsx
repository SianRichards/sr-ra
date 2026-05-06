import { useState } from "react";
import CheckBox from "../components/Checkbox";
import Button from "../components/Button";
import { categories, modalContents, months, years } from "../constants/index";
import clsx from "clsx";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import Header from "../components/Header";

const Timeline = () => {
  const [visibleCategories, setVisibleCategories] = useState(categories);
  const [activeModal, setActiveModal] = useState<null | {
    identifier: string;
    title: string;
    description: React.ReactNode;
    hideDivider?: boolean;
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
    const content = modalContents.find((e) => e.identifier === title);
    if (content) setActiveModal(content);
  };

  const closeModal = () => setActiveModal(null);

  const InfoSymbol = ({
    title,
    className,
  }: {
    title: string;
    className?: string;
  }) => {
    return (
      <FontAwesomeIcon
        className={clsx(
          "flex-0 opacity-30 md:ml-1 cursor-pointer text-gray-700",
          className,
        )}
        icon={faCircleInfo}
        onClick={() => handleModal(title)}
      />
    );
  };

  const TimelineEvent = ({
    children,
    infoTitle,
    bgColor,
    rowStart,
    colStart,
    colEnd,
    zIndex,
    className,
    conditionalClass,
  }: {
    children: string;
    infoTitle: string;
    bgColor: string;
    rowStart: number;
    colStart: number;
    colEnd: number;
    zIndex?: number;
    className?: string;
    conditionalClass?: string | boolean;
  }) => {
    return (
      <div
        className={clsx(
          "text-black p-2 ml-2 rounded-sm text-[13px] flex items-center gap-1 md:flex-row",
          className,
          bgColor,
          conditionalClass,
        )}
        style={{
          gridRowStart: rowStart,
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
          ...(zIndex && { zIndex }),
        }}
      >
        <span className="truncate">{children}</span>
        <InfoSymbol title={infoTitle} />
      </div>
    );
  };

  const TimelineBar = ({
    bgColor,
    rowStart,
    colStart,
    colEnd,
    conditionalClass,
  }: {
    bgColor: string;
    rowStart: number;
    colStart: number;
    colEnd: number;
    conditionalClass?: string | boolean;
  }) => {
    return (
      <div
        className={clsx("rounded-sm ml-2", bgColor, conditionalClass)}
        style={{
          gridRowStart: rowStart,
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
        }}
      />
    );
  };

  return (
    <div className="flex flex-col h-dvh text-yellow-200 px-4 md:px-6 pt-5 pb-7">
      <Header
        className={clsx(
          "text-center",
          visibleCategories.length === 0 && "line-through",
        )}
      >
        Career timeline
      </Header>

      <div className="flex flex-wrap gap-2 md:gap-5 pt-3 mb-2 md:m-0">
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

      <div className="relative flex-1 overflow-y-auto pr-2 md:text-[14px]">
        <div className="grid w-full grid-cols-[36px_repeat(12,minmax(0,1fr))] auto-rows-[50px] gap-y-3 pb-3">
          {activeModal && (
            <Modal
              title={activeModal.title}
              description={activeModal.description}
              hideDivider={activeModal.hideDivider}
              onClose={closeModal}
            />
          )}
          <div></div>
          {months.map((m, index) => (
            <div
              key={index}
              className={clsx(
                "sticky top-0 z-10 flex items-end pl-1 text-sm md:text-base md:pl-2 md:text-yellow-200 bg-teal-700",
                index % 2 && "text-teal-700",
              )}
            >
              {m}
            </div>
          ))}
          {years.map((y, index) => {
            return (
              <div
                key={index}
                className={`row-${index + 2} col-1 pr-8 self-center`}
              >
                {y}
              </div>
            );
          })}

          {hasEdu && (
            <>
              <TimelineEvent
                rowStart={2}
                colStart={11}
                colEnd={14}
                bgColor="bg-indigo-200"
                infoTitle="University"
              >
                University
              </TimelineEvent>

              <TimelineEvent
                rowStart={7}
                colStart={3}
                colEnd={6}
                bgColor="bg-green-200"
                infoTitle="Trainee at coding bootcamp"
              >
                Trainee at coding bootcamp
              </TimelineEvent>

              <TimelineBar
                rowStart={3}
                colStart={2}
                colEnd={14}
                bgColor="bg-indigo-200"
              />
              <TimelineBar
                rowStart={4}
                colStart={2}
                colEnd={14}
                bgColor="bg-indigo-200"
              />
              <TimelineBar
                rowStart={5}
                colStart={2}
                colEnd={14}
                bgColor="bg-indigo-200"
              />
              <TimelineBar
                rowStart={6}
                colStart={2}
                colEnd={8}
                bgColor="bg-indigo-200"
              />
              <TimelineEvent
                rowStart={4}
                colStart={10}
                colEnd={14}
                bgColor="bg-cyan-200"
                infoTitle="Trainee at coding bootcamp"
              >
                Year abroad
              </TimelineEvent>
              <TimelineBar
                rowStart={5}
                colStart={2}
                colEnd={7}
                bgColor="bg-cyan-200"
              />
            </>
          )}

          {hasSoftware && (
            <>
              <TimelineEvent
                rowStart={7}
                colStart={3}
                colEnd={6}
                bgColor="bg-green-200"
                infoTitle="Trainee at coding bootcamp"
              >
                Trainee at coding bootcamp
              </TimelineEvent>
              <TimelineEvent
                rowStart={7}
                colStart={8}
                colEnd={14}
                bgColor="bg-yellow-200"
                infoTitle="Trainee at coding bootcamp"
              >
                Junior Developer in Test
              </TimelineEvent>
              <TimelineEvent
                rowStart={8}
                colStart={2}
                colEnd={14}
                bgColor="bg-orange-200"
                infoTitle="Trainee at coding bootcamp"
              >
                Software Developer at BookingLive
              </TimelineEvent>
              <TimelineBar
                rowStart={9}
                colStart={2}
                colEnd={8}
                bgColor="bg-orange-200"
              />
              <TimelineEvent
                rowStart={9}
                colStart={8}
                colEnd={14}
                bgColor="bg-lime-300"
                infoTitle="Full-stack Software Engineer at MadeTech"
              >
                Full-stack Software Engineer at MadeTech
              </TimelineEvent>
              <TimelineBar
                rowStart={10}
                colStart={2}
                colEnd={8}
                bgColor="bg-lime-300"
              />
              <TimelineEvent
                rowStart={11}
                colStart={12}
                colEnd={14}
                bgColor="bg-green-500"
                className="z-50"
                infoTitle="Software Developer at Outlook Energy"
              >
                Software Developer at Outlook Energy
              </TimelineEvent>
              <TimelineBar
                rowStart={12}
                colStart={2}
                colEnd={14}
                bgColor="bg-green-500"
              />
              <TimelineBar
                rowStart={13}
                colStart={2}
                colEnd={13}
                bgColor="bg-green-500"
              />
            </>
          )}
          {hasOther && (
            <>
              <TimelineEvent
                rowStart={10}
                colStart={8}
                colEnd={14}
                bgColor="bg-gray-300"
                infoTitle="Gap year in Latin America"
              >
                Gap year in Latin America
              </TimelineEvent>
              <TimelineBar
                rowStart={11}
                colStart={2}
                colEnd={8}
                bgColor="bg-gray-300"
              />
              <TimelineEvent
                rowStart={6}
                colStart={9}
                colEnd={13}
                bgColor="bg-emerald-400"
                infoTitle="English Tutor"
              >
                English Tutor
              </TimelineEvent>
              <TimelineEvent
                rowStart={6}
                colStart={13}
                colEnd={14}
                bgColor="bg-red-300"
                infoTitle="Administrative Officer"
                className="flex flex-col justify-center truncate"
              >
                Administrative Officer
              </TimelineEvent>
              <TimelineBar
                rowStart={7}
                colStart={2}
                colEnd={3}
                bgColor="bg-red-300"
              />
            </>
          )}

          {hasAnimal && (
            <>
              <TimelineEvent
                rowStart={11}
                colStart={2}
                colEnd={14}
                bgColor="bg-purple-300/60"
                infoTitle="Research Paper Summariser"
              >
                Research Paper Summariser
              </TimelineEvent>
              <TimelineEvent
                rowStart={13}
                colStart={13}
                colEnd={13}
                bgColor="bg-pink-300"
                className="flex flex-col justify-center"
                infoTitle="FutureKind Fellow at Electric Sheep"
                conditionalClass={hasEA && "h-1/2"}
              >
                FutureKind Fellowship
              </TimelineEvent>
              <TimelineBar
                rowStart={14}
                colStart={2}
                colEnd={4}
                bgColor="bg-pink-300"
                conditionalClass={hasEA && "h-1/2 self-end"}
              />
            </>
          )}

          {hasEA && (
            <>
              <TimelineEvent
                rowStart={13}
                colStart={2}
                colEnd={13}
                bgColor="bg-taupe-300/70"
                infoTitle="Co-organiser at EA Bristol"
              >
                Co-organiser at EA Bristol
              </TimelineEvent>
              {/* mini 1 */}
              <TimelineEvent
                rowStart={13}
                colStart={13}
                colEnd={13}
                bgColor="bg-yellow-200"
                infoTitle="Guest at CEEALAR"
                className="flex flex-col justify-center"
                conditionalClass={hasAnimal && "h-1/2 self-end"}
              >
                Guest at CEEALAR
              </TimelineEvent>
              <TimelineBar
                rowStart={14}
                colStart={2}
                colEnd={3}
                bgColor="bg-yellow-200"
                conditionalClass={hasAnimal && "h-1/2"}
              />
              <TimelineEvent
                rowStart={14}
                colStart={3}
                colEnd={5}
                bgColor="bg-amber-300"
                infoTitle="Member of EA Hub"
                conditionalClass={hasAnimal && "h-1/2"}
              >
                Member of EA Hub
              </TimelineEvent>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
