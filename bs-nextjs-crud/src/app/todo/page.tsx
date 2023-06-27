'use client'
import React, { useState } from 'react';
import CreateForm from '../../components/todo/create';
import ListForm from '../../components/todo/list';

const SelectedView = () => <span style={{ width: 50, border: 'solid 2px #3168bb', marginLeft: '11px', marginTop: '8px' }}></span>;
const Gosth = () => <span style={{ width: 50, border: 'solid 2px #eee', marginLeft: '11px', marginTop: '8px' }}></span>;

const Home = () => {

    const [view, setView] = useState('');
    const [id, setId] = useState();

    const changeView = (view: string) => setView(view);

    return (
        <>
            <div className="container">
                <div className="form" style={{ justifyContent: "space-around" }}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <input type="submit" onClick={() => changeView('ADD')} className="add" value="Add Item" />
                        { view == 'ADD' && <SelectedView /> }
                        { view != 'ADD' &&  <Gosth /> }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <input type="submit" className="add" value="Editar Item" style={{ backgroundColor: 'gray' }}  />
                        { view == 'EDIT' && <SelectedView /> }
                        { view != 'EDIT' &&  <Gosth /> }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <input type="submit" onClick={() => changeView('LIST')} className="add" value="Ver todos" />
                        { view == 'LIST' && <SelectedView /> }
                        { view != 'LIST' &&  <Gosth /> }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <input type="submit" className="add" value="Remover" style={{ backgroundColor: 'gray' }} />
                        { view == 'REMOVE' && <SelectedView /> }
                        { view != 'REMOVE' &&  <Gosth /> }
                    </div>
                </div>
            </div>
            <div className="container">
                {(view == 'ADD' || view == 'EDIT')  && <CreateForm id={id} />}
                {view == 'LIST' && <ListForm changeView={setView} selected={setId} />}
            </div>
        </>
    );
}

export default Home;