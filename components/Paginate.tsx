import React from "react";
import ReactPaginate from "react-paginate";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface PaginateProps {
  onSelectPage: ((selectedItem: { selected: number }) => void) | undefined;
  pageCount: number;
}
const Paginate: React.FC<PaginateProps> = ({ onSelectPage, pageCount }) => {
  return (
    <ReactPaginate
      nextLabel={<IoMdArrowDropright />}
      onPageChange={onSelectPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<IoMdArrowDropleft />}
      pageClassName="w-10 h-10 text-[#363636] border border-[#ebebeb] flex items-center justify-center text-sm hover:bg-[#35c0c5] hover:text-white"
      pageLinkClassName=""
      previousClassName="w-10 h-10 text-[#363636] border border-[#ebebeb] flex items-center justify-center text-sm hover:bg-[#35c0c5] hover:text-white"
      previousLinkClassName=""
      nextClassName="w-10 h-10 text-[#363636] border border-[#ebebeb] flex items-center justify-center text-sm hover:bg-[#35c0c5] hover:text-white"
      nextLinkClassName=""
      breakLabel="..."
      breakClassName="w-10 h-10 text-[#363636] border border-[#ebebeb] flex items-center justify-center text-sm hover:bg-[#35c0c5] hover:text-white"
      breakLinkClassName=""
      containerClassName="flex items-center justify-end my-5 cursor-pointer gap-[5px]"
      activeClassName="bg-[#35c0c5] text-white"
      renderOnZeroPageCount={null}
    />
  );
};

export default Paginate;
