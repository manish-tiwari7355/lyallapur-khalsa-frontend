import axios from "axios";
import React, { useEffect, useState } from "react";

import HeaderBanner from "../../../components/HeaderBanner/index";

import AllEventsCard from "../../../components/cards/AllEventsCard";
import ReactPaginate from "react-paginate";
import styles from "./FontStyle.module.css";
import { LiveUrl } from "../../../apiUtils";

const AllEvents = () => {
  document.title = "Events";
  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchNews = () => {
    axios
      .get(`${LiveUrl}/api/events`)
      .then((response) => setEvents(response?.data?.data));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const eventsPerPage = 6;
  const pageCount = Math.ceil(events.length / eventsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pagesVisited = pageNumber * eventsPerPage;

  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="CarrierBanner"
          title="Events/Capacity Building"
          currentPage="Events"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="max-w-[1300px] mx-auto ">
        <div className=" mt-6 flex text-3xl font-bold">
          <h1 className="ml-2 border-l-4 border-[#32727A] pl-4 text-[#081C3A] md:text-5xl ">
            Events/Capacity Building
          </h1>
        </div>
        {/* -------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 px-3">
          {events
            ?.slice(pagesVisited, pagesVisited + eventsPerPage)
            .map((items, id) => (
              <div className="px-auto" key={id}>
                <AllEventsCard data={items} />
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBtn}
          previousLinkClassName={styles.prevBtn}
          nextLinkClassName={styles.nextBtn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </div>
    </div>
  );
};

export default AllEvents;
