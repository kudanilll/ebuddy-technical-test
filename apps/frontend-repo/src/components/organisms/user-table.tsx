"use client";

import { useState } from "react";
import { User } from "@repo/shared";
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TablePagination,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import SearchInput from "@/components/atoms/search-input";
import TableHeader from "@/components/molecules/table/header";
import TableRowItem from "@/components/molecules/table/row-item";
import TablePaginationActions from "@/components/atoms/table-pagination-actions";

export default function UserTable({ data }: { data: User[] }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleChangePage(
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const handleEditUser = (updatedUser: User) => {
    console.log("User to update:", updatedUser);
  };

  return (
    <>
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          overflow: "hidden",
          border: 1,
          borderColor: "pink",
          borderRadius: 1,
        }}
      >
        <TableContainer
          sx={{ maxHeight: 540, borderBottom: 1, borderColor: "pink" }}
        >
          <Table
            stickyHeader
            aria-label="data table"
            style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
          >
            <TableHead>
              <TableHeader />
            </TableHead>
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRowItem
                    key={item.id}
                    item={item}
                    onEdit={handleEditUser}
                  />
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, { label: "All", value: -1 }]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
    </>
  );
}
