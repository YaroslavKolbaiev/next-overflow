'use client';

import { ITEMS_PER_PAGE } from '@/lib/utils';
import { PaginationProps } from '@/types';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

function Pagination({ totalItems }: { totalItems: number }) {
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const pageNumbers = getVisiblePages(+page, totalPages);

  const prevPage = (+page - (+page > 1 ? 1 : 0)).toString();
  const nextPage = (+page + (+page < totalPages ? 1 : 0)).toString();

  return (
    <nav aria-label="Page navigation" className="mt-10 flex justify-center">
      <ul className="flex">
        <PaginationLink
          pageName="Previous"
          pageValue={prevPage}
          disableCondition={+page === 1}
        />
        {pageNumbers.map((pageNumber, i) => (
          <PaginationLink
            key={`id-${i}`}
            pageName={pageNumber.toString()}
            pageValue={pageNumber.toString()}
            disableCondition={pageNumber === +page}
          />
        ))}
        <PaginationLink
          pageName="Next"
          pageValue={nextPage}
          disableCondition={+page === totalPages}
        />
      </ul>
    </nav>
  );
}

function PaginationLink({
  pageName,
  pageValue,
  disableCondition,
}: PaginationProps) {
  const pathName = usePathname();

  enum PageType {
    PREVIOUS = 'Previous',
    NEXT = 'Next',
    DOTS = '...',
  }

  switch (pageName) {
    case PageType.NEXT:
      return (
        <Link
          className={`pagination-link
            w-28
            rounded-r-lg
            py-2
            ${disableCondition && 'cursor-not-allowed'}
          `}
          href={{
            pathname: pathName,
            query: {
              page: pageValue,
            },
          }}
        >
          Next
        </Link>
      );
    case PageType.PREVIOUS:
      return (
        <Link
          className={`pagination-link
            w-28
            rounded-l-lg
            py-2
            ${disableCondition && 'cursor-not-allowed'}
          `}
          href={{
            pathname: pathName,
            query: {
              page: pageValue,
            },
          }}
        >
          Previous
        </Link>
      );
    case PageType.DOTS:
      return (
        <span
          className="pagination-link
            hidden
            px-4
            py-2
            md:block
          "
        >
          {pageValue}
        </span>
      );
    default:
      return (
        <Link
          className={`pagination-link
            hidden
            px-4
            py-2
            md:block
            ${disableCondition && 'active-link'}
          `}
          href={{
            pathname: pathName,
            query: {
              page: pageValue,
            },
          }}
        >
          {pageValue}
        </Link>
      );
  }
}

function getVisiblePages(current: number, total: number) {
  if (total <= 7) {
    return range(total);
  }
  if (current < 5) {
    return [...range(5), '...', total];
  }
  if (current > total - 4) {
    return [1, '...', ...range(5, total - 4)];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

function range(count: number, start = 1) {
  return Array.from(new Array(count), (x, i) => i + start);
}

export default Pagination;
