import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut,GithubAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Firebase/firebase.init"
initializeAuthentication();
const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    // SET NAME
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    // SIGNIN USING EMAIL & PASSWORD
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const signInUsingEmailPassword=(e)=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password Should be at Least 6 Characters!')
            return;
          }
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
            setUser(user)
            setError('Successfully Login!')
          })
          .catch(error=>{
              setError(error.message)
          })
    }
// UPDATE NAME
const updateName=()=>{
    updateProfile(auth.currentUser,{displayName: name})
    .then(()=>{ })
}
// Register User by Email & Password
const createNewUser=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        console.log(result.user);
        setUser(result.user)
        updateName()
        setError('Successfully Registered!')
    })
    .catch(error=>{
        console.log(error.message);
        setError('Register Fail!')
    })
}
// GOOGLE SIGN IN
    const signInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    // GITHUB SIGN IN
    const signInWithGithub=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    // LOGOUT
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside user',user);
                setUser(user)
            }
        })
    },[])
    return{
        user,
        error,
        logOut,
        handleEmail,
        handlePassword,
        signInWithGoogle,
        signInWithGithub,
        createNewUser,
        handleNameChange,
        signInUsingEmailPassword
    }}
export default useFirebase;