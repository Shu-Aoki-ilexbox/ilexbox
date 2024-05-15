// import { css } from '@emotion/css';
import { useState } from "react";
import TableSortLabel from "@mui/material/TableSortLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "@/components/base/Layout/Layout";
import { TABLE_COLUMS, TABLE_ROWS } from "@/data";
import { useRouter } from "next/router";

const BasicTable = () => {

  //ソート方法
  const [order, setOrder] = useState<"desc" | "asc">("desc");
  //ソート対象
  const [orderBy, setOrderBy] = useState<string>("calories");

  //ソート対象、方法の変更
  const handleRequestSort = (event:any, property:any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const createSortHandler = (property:any) => (event:any) => {
    handleRequestSort(event, property);
  };

  //ソート実行
  function stableSort(array:any, comparator:any) {
    const stabilizedThis = array.map((el:any, index:any) => [el, index]);
    stabilizedThis.sort((a:any, b:any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el:any) => el[0]);
  }

  //比較処理
  function descendingComparator(a:any, b:any, orderBy:any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  function getComparator(order:any, orderBy:any) {
    return order === "desc" 
      ? (a:any, b:any) => descendingComparator(a, b, orderBy)
      : (a:any, b:any) => -descendingComparator(a, b, orderBy);
  }

  const router = useRouter();

  return (
    <Layout>
      <TableContainer component={Paper} sx={{backgroundColor: "transparent", boxShadow: "none"}} className="pl-[20px] pr-[20px]">
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="border-separate border-spacing-x-0">
          <TableHead>
            <TableRow>
              {TABLE_COLUMS.map((column, index) => (
                <TableCell key={index} align={column.align} sortDirection={orderBy === column.id ? order : 'desc'}>
                  {column.label}
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={createSortHandler(column.id)}
                  ></TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(TABLE_ROWS, getComparator(order, orderBy)).map((row:any) => (
              <TableRow key={row.name} onClick={() => router.push(row.path)} className="cursor-pointer bg-white hover:bg-primary hover:bg-opacity-30 overflow-hidden">
                <TableCell component="th" scope="row" className="rounded-l-lg border-t border-t-primary border-l border-l-primary border-b border-b-primary">
                  {row.name}
                </TableCell>
                <TableCell align="right" className="border-t border-t-primary border-b border-b-primary">{row.calories}</TableCell>
                <TableCell align="right" className="border-t border-t-primary border-b border-b-primary">{row.fat}</TableCell>
                <TableCell align="right" className="border-t border-t-primary border-b border-b-primary">{row.carbs}</TableCell>
                <TableCell align="right" className="rounded-r-lg border-t border-t-primary border-r border-r-primary border-b border-b-primary">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

// const styles = {
//   cellFirst: css({
//     borderTop: 'solid 1px #666',
//     borderLeft: 'solid 1px #666',
//     borderBottom: 'solid 1px #666',
//   }),
// }

export default BasicTable;