import React,{useEffect,useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
//import Footer from '../layout/footer'
import Avatar from '@material-ui/core/Avatar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
//import SignInSide from './signinside'
import {CUENTAS} from '../data/cuentas';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { plancuentas } from '../store'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © BizAccount '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];
const config = {
  apiKey: 'AIzaSyDZ08hKl01qFilc3nJ4oRmO8wq49pcsw8s',
  authDomain: 'vinotinto-7f56f.firebaseapp.com',
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
       // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
       // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    
    signInSuccessWithAuthResult: () => false
  }
};
//firebaseopensource.com/projects/firebase/firebaseui-web-react/

firebase.initializeApp(config);
//andres@alcancia.biz
//Juanfer123.
//octotestingv2@gmail.com
//Octo123.
export default function Login(prop) {
  const classes = useStyles();
  const [loginauth, setLoginAuth] = useState({uid:"0",name:"",photoURL:"",email:"",phone:"",cedula:"",lat:0,lng:0})

  const [flag, setFlag] = useState(false);
  const [flagAsignacion, setFlagAsignacion] = useState(false);
  const [openSnackBar,setOpenSnackBar]= useState(true);
  const [mensajeSnackBar,setMensajeSnackBar]= useState("");
  const [snackbarcolor, setSnackbarcolor]=useState('#1DA1F2')
  const [cuentas, setCuentas] = useRecoilState(plancuentas);
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © BizAccount '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    );
  }
  
//   useEffect(() => {   
//     //alert(user)
//     //setOpenSnackBar(true)
//     //setMensajeSnackBar("Autenticando en Twitter...(useEffect)")
//    //A U T O M A T I C O
//     firebase.auth().onAuthStateChanged(
//       user=>{
//        // alert(JSON.stringify(user))
//         //console.log(JSON.stringify(user))
//        //setLoginAuth(login)
//         SignIn(user)
//       }
  
//     )
     
// },[]);
function SignIn(user) {
  // alert("firebase user "+JSON.stringify(user))
   var login={id:user.providerData[0].uid,name:user.displayName,photoURL:user.photoURL,email:user.email,phone:user.metadata.phoneNumber,cedula:"",photo:"",lat:0,lng:0}
   setLoginAuth(login)
   // alert(JSON.stringify(login))
   //setMensajeSnackBar(user.displayName)
   
 }
 useEffect(() => {  

   setCuentas(CUENTAS)
 },[])
useEffect(() => {  
  if (loginauth.name!=""){
    ///
    ///  AUDITORIA de la EXISTENCIA
    ///
    ///
  setOpenSnackBar(true)
  setMensajeSnackBar("Autenticando el correo:"+loginauth.email+" de "+loginauth.name)
  if ( ['ppazpurua@gmail.com','rpiconh@gmail.com','isosab@gmail.com','guillermoacedo@gmail.com','antonio.azpurua@gmail.com','aveunalliv@gmail.com'].indexOf(loginauth.email)>-1){
  prop.loginclick()  
  }else
  {  setOpenSnackBar(true)
    setSnackbarcolor('red')
    setMensajeSnackBar(loginauth.email+" de "+loginauth.name+" No esta autorizado")
  }
}
      // dispatch({
      //   type: 'LOGIN',
      //   stateprop: loginauth
      // });
},[loginauth]);

    function handleCloseSnackBar() {
      // onClick("V3664204")
       setOpenSnackBar(false)
       // prop.loginclick()
     }
     const uiConfig = {
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      //signInSuccessUrl: '/signedIn',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
      //  firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          //  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          //  firebase.auth.GithubAuthProvider.PROVIDER_ID,
         //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
           // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
           // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      callbacks:{
        signInSuccess:(user)=>{
         // alert(JSON.stringify(user))
          SignIn(user)
        }
      }
    }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <Avatar alt="Remy Sharp" src={'images/logo.png'} className={classes.bigAvatar} />

        
          <Typography variant="h6" color="inherit" noWrap>
            BizAccount
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Snackbar
          open={openSnackBar}
          autoHideDuration={5000}
          onClose={handleCloseSnackBar}
          anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
       >
               <SnackbarContent style={{backgroundColor:snackbarcolor,}}
                     message={<span id="client-snackbar">{mensajeSnackBar}</span>}
                />
        </Snackbar>
        {/* <SignInSide /> */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            BizAccount
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                25 años, 8 paises y mas de 1.000 empresas disponen de su informacion financiera en la nube. Estamos en constante evolucion a las nuevas tecnologias open source en JavaScript con ReactJS, Materials y NodeJS.
               </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item justify="center">
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
                  <Button  variant="contained" color="primary"  onClick={() => prop.loginclick()}>
                  Login
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          <Grid item key={11} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.yourstory.com/cs/1/dee76090-4969-11e9-a359-39e672cab1c7/cloud_accounting_software1561613528953.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutAntenasterBottom variant="h5" component="h2">
                    Sistema Administrativo
                    </Typography>
                    <Typography>
                   Procesos administrativos que giran alrededor de la contabilidad generando los comprobantes contables para disponer de informes financieros y fiscales al instante.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={12} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://img.etimg.com/thumb/width-640,height-480,imgsize-282320,resizemode-1,msid-73221882/stock-market-update-realty-shares-up-indiabulls-real-estate-climbs-5.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Proyectos inmobiliarios
                    </Typography>
                    <Typography>
                     Orientados principalmente a las actividades inmobiliarias: Construccion, Ventas, Alquileres y Administracion de Condominios 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item key={13} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqrBRyTZiOQTGcE07RHrvRFKVWoyGrPrkZOcWAU441qF8CIXXT&usqp=CAU"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Informacion Gerencial
                    </Typography>
                    <Typography>
                      Para ser consultada en dispositivos mobiles en esta nueva coyuntura de trabajo distribuido
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      {/* <Footer /> */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}