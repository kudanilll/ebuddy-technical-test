import { TableCell, TableRow, Typography } from "@mui/material";
import { User } from "@repo/shared";
import { convertTimestampToDateString } from "@/utils/date";
import TableActions from "./actions";

export default function TableRowItem({ item }: { item: User }) {
  return (
    <TableRow hover key={String(item.id)}>
      <TableCell>
        <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
          {item.name}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
          {item.email}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
          {convertTimestampToDateString(item.createdAt)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
          {convertTimestampToDateString(item.updatedAt)}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <TableActions />
      </TableCell>
    </TableRow>
  );
}
