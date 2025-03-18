import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar variant='outlined' position="static">
            <Toolbar>
                <Typography variant="h6">
                    Bank Application
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
