import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";


export default function PageExample() {
  let [items, setItems] = useState([]);
  let [pageCount, setPageCount] = useState(0);

  useEffect(async () => {
    let userData = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10`
    );
    let response = await userData.json();
    let total = userData.headers.get("x-total-count");
    setPageCount(Math.ceil(total / 10));
    setItems(response);
  }, []);

  let fetchComments = async (currentPage) => {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}}`
    );
    let data = await res.json();
    return data;
  };

  let handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    let commentsFromServer = await fetchComments(currentPage);
    setItems(commentsFromServer);
  };
  return (
    <>
      <div className="container-fluid my-3 ">
        <div className="row  justify-content-center align-items-center ">
          {items.map((item) => {
            return (
              <motion.div
                whileHover={{ scale: 1.09 }}
                transition={{ type: "spring", stiffness: 100 }}
                whileTap={{ scale: 0.9 }}
                key={item.id}
                style={{ height: "fit-content" }}
                className="col-sm-5 col-md-5 col-lg-3 col-12 m-1 my-1"
              >
                <div className="card w-100 shadow">
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.id}</h5>
                    <p className="card-text text-center">{item.body}</p>
                    <h6 className="text-center my-1">
                      <b>{item.email}</b>
                    </h6>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      </div>
    </>
  );
}
