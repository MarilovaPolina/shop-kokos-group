import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export default function Pagination({onChangePage}) {
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
        pageCount={5}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
