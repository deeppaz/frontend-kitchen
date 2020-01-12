import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';

export default function KullaniciBildirim() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Box display="flex">
                    <Box m={2}>
                        <Badge badgeContent={99} color="primary">
                            <MailIcon />
                        </Badge>
                    </Box>
                </Box>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Ahmet: Makarna gerçekten iyi olmuş!</MenuItem>
                <MenuItem onClick={handleClose}>Mehmet: Ellerinize sağlık!</MenuItem>
                <MenuItem onClick={handleClose}>Ayşe: Süpersiniz..!</MenuItem>
            </Menu>
        </div>
    );
}