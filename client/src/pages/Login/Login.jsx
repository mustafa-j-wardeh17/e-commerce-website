import { githubLogo, googleLogo } from "../../assets"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from 'react-redux'
import './Login.css'
import { addUser, removeUser } from "../../redux/ProductSlice/ProductSlice";
import {useNavigate} from 'react-router-dom'
function Login() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoogleLogin =(e)=>{
        e.preventDefault();
        signInWithPopup(auth,provider).then((resuls)=>{
            console.log(resuls.user)
            dispatch(addUser({
                _id:resuls.user.uid,
                name:resuls.user.displayName,
                email:resuls.user.email,
                image:resuls.user.photoURL,
            }))
            setTimeout(() => {
                navigate("/");
              }, 1500);
        }).catch(console.error())

    }
    const handleGoogleSignOut =()=>{
        signOut(auth).then(()=>{
           toast.error('Sign Out Successful')
           dispatch(removeUser())
        }).catch((error)=>{
            console.log(error)
            
        })
    }
    return (
        <div className="login-container flex flex-column justify-center align-center gap-40">
            <div className="flex gap-40">
                <div onClick={handleGoogleLogin} className="google-section login-section">
                    <div className="google company flex align-center gap-40">
                        <img className="login-logo" src={googleLogo} alt="google" />
                        <p>Sign in with Google</p>
                    </div>
                </div>
                <div onClick={handleGoogleSignOut} className="logout flex align-center">
                    <p>Sign out from Google</p>
                </div>
            </div>
            <div className="flex gap-40">
                <div className="github-section login-section">
                    <div className="github company flex align-center gap-40">
                        <img className="login-logo" src={githubLogo} alt="github" />
                        <p>Sign in with Github</p>
                    </div>
                </div>
                <div className="logout flex align-center">
                    <p>Sign out from Google</p>
                </div>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Login