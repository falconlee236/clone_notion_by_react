import React, {createContext, useState} from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Start from '../page/Start';
import QuickMemo from '../page/QuickMemo';
import Drawer from '@mui/material/Drawer';


const Contentstyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 100vh;
    //width: 84.5vw;
    width: ${props => props.isOpen ? "84.5vw" : "100vw"};
`


function Contents(){
    const [open, setOpen] = useState(true);
    const toggleDrawer = (() => setOpen(!open));
    
    return (
        <DrawerOpenContext.Provider value={[toggleDrawer, open]}>
            <Contentstyle>
                <Drawer variant='persistent' anchor='left' open={open}>
                    <Sidebar height="100vh"/>
                </Drawer>
                <Main isOpen={open}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path='/start' element={<Start/>}/>
                        <Route path='/quickmemo' element={<QuickMemo/>}/>
                    </Routes>
                </Main>
            </Contentstyle>
        </DrawerOpenContext.Provider>
    )
}

export default Contents;

export const DrawerOpenContext = createContext(null)
