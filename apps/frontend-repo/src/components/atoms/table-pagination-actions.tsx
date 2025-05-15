import { useTheme, Box, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

export default function TablePaginationActions(
  props: TablePaginationActionsProps
) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => {
    onPageChange(event, newPage);
  };

  const firstPage = (event: React.MouseEvent<HTMLButtonElement>) =>
    handlePageChange(event, 0);
  const backPage = (event: React.MouseEvent<HTMLButtonElement>) =>
    handlePageChange(event, page - 1);
  const nextPage = (event: React.MouseEvent<HTMLButtonElement>) =>
    handlePageChange(event, page + 1);
  const lastPage = (event: React.MouseEvent<HTMLButtonElement>) =>
    handlePageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={firstPage}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
      <IconButton
        onClick={backPage}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
      <IconButton
        onClick={nextPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <IconButton
        onClick={lastPage}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </Box>
  );
}
