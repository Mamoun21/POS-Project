import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    list: {
        fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
        lineHeight: "1.5em",
        fontSize: "14px",
        margin: "0",
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit",
    },
    listItem: {
        float: "left",
        color: "inherit",
        width: "auto",
        margin: "1",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            "&:after": {
                width: "calc(100% - 30px)",
                content: '""',
                display: "block",
                height: "1px",
                marginLeft: "15px",
                backgroundColor: "#e5e5e5"
            }
        }
    },
        adminImg:{
        borderRadius: '50%',
        width: '40px',
        height: '40px'
    },
    listItemText:{
        padding: "0 !important"
    },
    navLink:{
        color: "inherit",
        position: "relative",
        textDecoration: "none",
        textTransform: "capitalize",
        fontSize: "12px",
        borderRadius: "3px",
        lineHeight: "20px",
        margin: "0px",
        marginTop: '10px',
        display: "inline-flex",
        "&:hover,&:focus": {
            color: "inherit",
            background: "rgba(200, 200, 200, 0.3)"
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start"
            }
        }
    },
    icons: {
        width: "20px",
        height: "20px",
        marginRight: "3px"
    },
    avatar: {
        marginTop: '10px',
        marginLeft: '180px',
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start"
            }
        }
    },
    dropdownLink: {
        "&,&:hover,&:focus": {
            color: "inherit",
            textDecoration: "none",
            display: "block",
            padding: "10px 20px"
        }
    },
    flagImg: {
        width: "35px",
        height: "25px",
        marginTop: "15px",
        marginRight: '5px',
        marginLeft: '15px',
    },
    signOutButton: {
        marginTop: "5px",
        marginLeft: theme.spacing(1),
        color: "inherit"
    },
    link: {
        margin: theme.spacing(1),
        marginTop: '15px',
    },
}));
export default useStyles;