import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const ListForm = ({ changeView, selected }: any) => {

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        loadData()
    }, []);

    const loadData = async () => {
        try {
            const response = await (await fetch('http://localhost:3000/api/v1/todos'));
            const result = await response.json();

            setData(result);

        } catch (error: any) {
            console.error(`send error: ${error?.message}`);
        }
    }

    return (
        <>
            <div className="container">
                <div className="form">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descrição</th>
                                <th>Conteudo</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.[0]?.map((todo: any, idx: any) => (
                                    <tr key={idx}>
                                        <td>{todo?.title}</td>
                                        <td>{todo?.content}</td>
                                        <td>{todo?.done}</td>
                                        <td><button onClick={() => {
                                            changeView('EDIT');
                                            selected(todo.id);
                                        }}>editar</button></td>
                                        <td><button>remover</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListForm;