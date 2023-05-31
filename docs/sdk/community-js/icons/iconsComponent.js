import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {styled} from '@mui/material/styles';
import {Box, Button, Grid, IconButton, Link, Paper, Tooltip, Typography} from '@mui/material';
import Icon from '@mui/material/Icon';
import InputBase from '@mui/material/InputBase';
import {scIcons} from './icons.js';
import Dialog from '@mui/material/Dialog';
import copy from 'clipboard-copy';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const PREFIX = 'SDKIcons';

const classes = {
    root: `${PREFIX}-root`,
    iconBox: `${PREFIX}-icon-box`,
    iconName: `${PREFIX}-icon-name`
};

const Root = styled(Box, {
    name: PREFIX,
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
})(({theme}) => ({
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.grey['A200'],
    [`& .${classes.iconBox}`]: {
        display: 'inline-flex',
        flexDirection: 'column',
        color: theme.palette.text.secondary,
        margin: theme.spacing(2)
    },
    [`& .${classes.iconName}`]: {
        flexGrow: 1,
        fontSize: '.6rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
        width: 0
    }
}));

const StyledIcon = styled(Icon)(({theme}) => ({
    boxSizing: 'content-box',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.shortest
    }),
    padding: theme.spacing(2),
    margin: theme.spacing(0.5, 0),
    '&:hover': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1]
    }
}));

const Title = styled(Typography)(({theme}) => ({
    component: 'span',
    display: 'inline-block',
    cursor: 'pointer',
    transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
        backgroundColor: '#96c6fd80'
    }
}));

export default function Icons() {
    return (
        <BrowserOnly>
            {() => {
    const [icons, setIcons] = useState(scIcons);
    const [selectedIcon, setSelectedIcon] = useState('');
    const [codePoint, setCodePoint] = useState('');
    const [query, setQuery] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [copied, setCopied] = useState(false);
    const [copiedCode, setCopiedCode] = useState(false);
    const filterIcons = (icons, query) => {
        if (!query) {
            return icons;
        }

        return icons.filter((icon) => {
            const iconName = icon.name.toLowerCase();
            return iconName.includes(query.toLowerCase());
        });
    };
    const filteredIcons = filterIcons(icons, query);


    const handleClick = (icon) => {
        setSelectedIcon(icon.name);
        setCodePoint(icon.codepoint);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setSelectedIcon('');
        setCodePoint('');
        setOpenDialog(false);
    };

    function selectNode(node) {
        // Clear any current selection
        const selection = window.getSelection();
        selection.removeAllRanges();

        // Select code
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.addRange(range);
    }

    const handleLabelClick = (event) => {
        selectNode(event.currentTarget);
    };

    const handleCopy = (event) => {
        copy(event.currentTarget.textContent);
        setCopied(true);
    };

    const handleCopyCode = () => {
        copy(codePoint);
        setCopiedCode(true);
    };


    return (
        <Root>
            <Grid item>
                <Paper>
                    <IconButton sx={{padding: '10px'}} aria-label="search">
                        <Icon baseClassName="community-icons">search</Icon>
                    </IconButton>
                    <InputBase
                        autoFocus
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search icons…"
                        inputProps={{'aria-label': 'search icons'}}
                    />
                </Paper>
                <>
                    {filteredIcons.length >= 1 ? (<Typography>{`${filteredIcons.length} matching results`}</Typography>) :
                    (<Typography align={'center'}>{'No results!'}</Typography>)}
                    {filteredIcons
                        .map((icon, index) => (
                            <Box component="span" className={classes.iconBox} key={index} onClick={() => handleClick(icon)}>
                                <StyledIcon baseClassName="community-icons" fontSize="large" onClick={handleOpenDialog}>
                                    {icon.name}
                                </StyledIcon>
                                <Box sx={{display: 'flex'}}>
                                    <Box className={classes.iconName} onClick={handleLabelClick}>
                                        {icon.name}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                </>
            </Grid>
            {openDialog && (
                <Dialog fullWidth maxWidth="sm" onClose={handleClose} open={openDialog}>
                    <DialogTitle>
                        <Tooltip
                            placement="right"
                            title={copied ? 'copied' : 'click to copy'}
                            TransitionProps={{
                                onExited: () => setCopied(false)
                            }}>
                            <Title variant="inherit" onClick={handleCopy}>
                                {selectedIcon}
                            </Title>
                        </Tooltip>
                    </DialogTitle>
                    <Box sx={{display: 'flex'}}>
                        <Typography sx={{marginRight: '8px', marginLeft: '8px', fontWeight: 800}}>codepoint: {codePoint}</Typography>
                        <Tooltip placement="right" title={copiedCode ? 'copied' : 'copy'} TransitionProps={{onExited: () => setCopiedCode(false)}}>
                            <Icon baseClassName="community-icons" fontSize="small" onClick={handleCopyCode}>
                                content_copy
                            </Icon>
                        </Tooltip>
                    </Box>

                    <Typography align={'right'} variant="caption">
                        <Link href="/docs/sdk/community-js/icons/overview" color="inherit" sx={{paddingRight: '8px'}}>
                            Learn more about the import
                        </Link>
                    </Typography>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs sx={{border: 'solid'}}>
                                <Grid container justifyContent="center">
                                    <Icon baseClassName="community-icons" sx={{fontSize: '48px !important'}}>{selectedIcon}</Icon>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Grid container alignItems="flex-end" justifyContent="center">
                                    <Grid item>
                                        <Tooltip title="fontSize small">
                                            <Box component="span" sx={{margin: '16px'}}>
                                                <Icon baseClassName="community-icons" fontSize={'small'}>
                                                    {selectedIcon}
                                                </Icon>
                                            </Box>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="fontSize medium">
                                            <Box component="span" sx={{margin: '16px'}}>
                                                <Icon baseClassName="community-icons" fontSize={'medium'}>
                                                    {selectedIcon}
                                                </Icon>
                                            </Box>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="fontSize large">
                                            <Box component="span" sx={{margin: '16px'}}>
                                                <Icon baseClassName="community-icons" fontSize={'large'}>
                                                    {selectedIcon}
                                                </Icon>
                                            </Box>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant={'outlined'}>
                            close
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Root>
    );
            }}
        </BrowserOnly>
    );
}