import axios from "axios";
import React, { useEffect, useState } from "react";

import HeaderBanner from "../../../components/HeaderBanner/index";
import ReactPaginate from "react-paginate";
import styles from "./FontStyle.module.css";
import { useParams } from "react-router-dom";
import NoticeboardCard from "../../../components/cards/NoticeboardCard";
import Popup from "reactjs-popup";
import { ImCancelCircle } from "@react-icons/all-files/im/ImCancelCircle";
import { SingleNoticeBoardPopup } from "../../../components/cards/SingleNoticeBoardPopup";
import { LiveUrl } from "../../../apiUtils";

const AllNoticeBoard = () => {
  document.title = "Noticeboard";

  const { id } = useParams();
  const [notice, setNotice] = useState([]);
  const [singleNotice, setSingleNotice] = useState({});
  const [initialModal, setInitialModal] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);

  const fetchNews = () => {
    axios
      .get(`${LiveUrl}/api/noticeboard`)
      .then((response) => setNotice(response?.data?.data));
  };

  useEffect(() => {
    if (!initialModal && id) {
      setInitialModal(true);
    }
  }, []);
  const closeInitialModal = () => {
    setSingleNotice({});
    setInitialModal(false);
  };
  const fetchsingleNotice = () => {
    axios
      .get(`${LiveUrl}/api/noticeboard/${id}`)
      .then((response) => setSingleNotice(response?.data?.data));
  };

  useEffect(() => {
    fetchNews();
    if (id) {
      fetchsingleNotice();
    }
  }, []);

  const eventsPerPage = 6;
  const pageCount = Math.ceil(notice.length / eventsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pagesVisited = pageNumber * eventsPerPage;

  return (
    <div>
      <div className="">
        <HeaderBanner
          bgImage="CarrierBanner"
          title="Noticeboard"
          currentPage="Noticeboard"
        />
        <div className="bannerBotttom h-[3.5rem] w-full"></div>
      </div>
      <div className="max-w-[1300px] mx-auto ">
        <div className=" mt-6 flex text-3xl font-bold">
          <h1 className="ml-2 border-l-4 border-[#32727A] pl-4 text-[#081C3A] md:text-5xl ">
            Noticeboard
          </h1>
        </div>
        {/* -------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 px-3">
          {notice
            ?.slice(pagesVisited, pagesVisited + eventsPerPage)
            .map((items, id) => (
              <div className="px-auto" key={id}>
                <NoticeboardCard
                  data={items}
                  singleNotice={singleNotice}
                  setSingleNotice={setSingleNotice}
                  id={id}
                />
              </div>
            ))}
        </div>
      </div>
      <Popup
        open={initialModal}
        closeOnDocumentClick
        onClose={closeInitialModal}
      >
        <div className="modal">
          <div className="close" onClick={closeInitialModal}>
            <ImCancelCircle className="text-xl md:text-2xl hover:text-blue-800" />
          </div>
          {/* <NoticeboardPopup
                  data={data}
                  // singleNotice={singleNotice}
                  closeInitialModal={closeInitialModal}
                /> */}
          <SingleNoticeBoardPopup singleNotice={singleNotice} />
        </div>
      </Popup>

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

export default AllNoticeBoard;
