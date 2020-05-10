import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    backgroundColor: '#f8f8f8',
    borderColor: '#e7e7e7',
    boxShadow: '0px 3px 18px 0px rgba(0,0,0,0.3)',
    position: 'sticky',
    color: 'black',
    width: "100%",
  },
  container: {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  flex: {
    flex: 1
  },
  appResponsive: {
    margin: "20px 10px"
  },
  drawerPaper: {
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: drawerWidth,
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0",
  }

}));
export default useStyles;