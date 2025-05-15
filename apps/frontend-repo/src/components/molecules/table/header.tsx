/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/atoms/styled-table-components";
import { Typography } from "@mui/material";

const columns = [
  { label: "ID", align: "left" },
  { label: "Name", align: "left" },
  { label: "Email", align: "left" },
  { label: "Created At", align: "left" },
  { label: "Updated At", align: "left" },
  { label: "Actions", align: "center" },
];

export default function TableHeader() {
  return (
    <StyledTableRow>
      {columns.map((column) => (
        <StyledTableCell key={column.label} align={column.align as any}>
          <Typography color="white" variant="subtitle2" fontWeight={600}>
            {column.label}
          </Typography>
        </StyledTableCell>
      ))}
    </StyledTableRow>
  );
}
