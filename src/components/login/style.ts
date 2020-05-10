import { makeStyles } from '@material-ui/core/styles';
import imageTheme from '../images/login.jpg';
const useStyles = makeStyles((theme) => ({
  headerlogin:{
    background:`url(${imageTheme}) no-repeat center center fixed`,
    WebkitBackgroundSize:'cover',
    MozBackgroundSize:'cover',
    OBackgroundSize:'cover',
    backgroundSize:'cover',
    width:'100%',
    height:'625px'
  },
  containerlogin:{
    backgroundColor:`#f7f7f7`,
    boxShadow:`0px 2px 2px rgba(0, 0, 0, 0.3)`,
    overflow:'hidden',
    top:'25%',
    left:'0',
    right:'0',
    position:'absolute',


  },
    paper: {
       marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    typography:{
      marginBottom:theme.spacing(1),
    }
  }));
export default useStyles;