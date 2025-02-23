import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = { 
  onChangePage: (page: number) => void;
  currentPage: number;
}
const Pagination: React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => {
          onChangePage(event.selected + 1);
          window.scrollTo(0, 0);
        }}
        pageRangeDisplayed={9}
        forcePage={currentPage-1}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pagination;