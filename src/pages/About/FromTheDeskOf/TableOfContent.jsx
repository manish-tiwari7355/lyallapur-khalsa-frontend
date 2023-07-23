import { useHeadsObserver } from "./Hook";
// import './tableOfContent.css'
import { useEffect, useState } from "react";

const getClassName = (level) => {
  switch (level) {
    case 2:
      return "head2";
    case 3:
      return "head3";
    case 4:
      return "head4";
    default:
      return null;
  }
};

function TableOfContent() {
  const [headings, setHeadings] = useState([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
  }, []);

  const scrollIntoViewWithOffset = (selector, offset) => {
    // console.log(
    //   " document.querySelector(selector).getBoundingClientRect().top",
    //   document.querySelector(selector).getBoundingClientRect().top
    // );
    // console.log(
    //   "document.body.getBoundingClientRect().top",
    //   document.body.getBoundingClientRect().top
    // );
    // console.log(
    //   " main",
    //   document.querySelector(selector).getBoundingClientRect().top -
    //     document.body.getBoundingClientRect().top -
    //     offset
    // );
    window.scrollTo({
      behavior: "smooth",
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };

  return (
    <nav className="hidden md:sticky top-[200px] md:flex max-w-[20%] mt-[20vh] flex-col z-50">
      <ul className="">
        {headings.map((heading) => (
          <li
            onClick={(e) => {
              e.preventDefault();
              scrollIntoViewWithOffset(`#${heading.id}`, 250);
            }}
            key={heading.id}
            className={`${getClassName(
              heading.level
            )} hidden md:flex  mb-[10px] p-[10px]  cursor-pointer justify-center items-center bg-[#99c5ca] rounded-[8px] text-base text-[#081c3a] font-semibold`}
            style={{
              backgroundColor: activeId === heading.id ? "#081c3a" : "#99c5ca",
              color: activeId === heading.id ? "#99c5ca" : "#081c3a",
            }}
          >
            <a
              href={`#${heading.id}`}
              className="py-[10px]"
              style={{
                fontWeight: activeId === heading.id ? "bold" : "normal",
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContent;
