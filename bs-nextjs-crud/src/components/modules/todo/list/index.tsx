'use client';
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetchData from '../../../../hooks/useFetchData';
import { Button, Container, Grid, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from "next/navigation";

const TodoList = () => {
    const router = useRouter();
    const fetchData = useFetchData();

    const [searchPage, setSearchPage] = useState<number>(0);
    const [page, setPage] = useState<any>({});
    const [rows, setRows] = useState<any[]>([]);

    useEffect(() => {
        const execute = async () => await loadData();
        execute();
    }, []);

    useEffect(() => {
        loadData();
    }, [searchPage]);

    const loadData = async () => {
        const [loading, code, result, error] = await fetchData(`http://localhost:3000/api/v1/todos?page=${searchPage}`);

        if (!loading && code && code < 300) {
            setRows(result?.content || []);
            setPage(result?.pagination || {});
        }
    }

    const remove = async (id: number) => {
        const [loading, code, result, error] = await fetchData(`http://localhost:3000/api/v1/todos/${id}`, "DELETE");
        await loadData();
    }

    return (
        <Container>
            <Grid item xs={12} mt={2}>
                <Stack direction="row" justifyContent="end" spacing={2}>
                    <Button variant="outlined" onClick={() => router.push('/mui-form/new')}  color="success">Novo</Button>
                </Stack>
            </Grid>

            <Grid item xs={12} mt={2}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Titulo</TableCell>
                                <TableCell align="left">Descrição</TableCell>
                                <TableCell align="center">Done ?</TableCell>
                                <TableCell align="center">Opções</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row: any, idx: number) => (
                                <TableRow key={idx}>
                                    <TableCell scope="row">{row.id}</TableCell>
                                    <TableCell scope="row">{row.title}</TableCell>
                                    <TableCell align="left">{row.content}</TableCell>
                                    <TableCell align="center">{row.done}</TableCell>
                                    <TableCell align="center">
                                        <Stack direction="row" justifyContent="center" spacing={1}>
                                            <IconButton
                                                aria-label="delete"
                                                color='warning'
                                                onClick={() => remove(row.id)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton
                                                aria-label="edit"
                                                color='primary'
                                                onClick={() => router.push(`/mui-form/${row.id}`)}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Button
                        variant="outlined"
                        disabled={searchPage == 0}
                        onClick={() => setSearchPage(searchPage - 1)}
                    >Anterior</Button>
                    <Button
                        disabled
                    >Pagina {searchPage + 1} de {page?.totalPages}</Button>
                    <Button
                        variant="outlined"
                        disabled={searchPage >= (page?.totalPages)}
                        onClick={() => setSearchPage(searchPage + 1)}
                    >Próximo</Button>
                </Stack>
            </Grid>
        </Container>
    );
}

export default TodoList;