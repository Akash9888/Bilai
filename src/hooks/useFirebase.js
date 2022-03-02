import { useState, useEffect } from "react";
import initializeFirebase from "../Login/Firebase/firebase.init";
import {
    getAuth, updateProfile, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, confirmPasswordReset, getIdToken,
} from "firebase/auth";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

// initilizing firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [message, setMessage] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("");
                const user = userCredential.user;

                verifyEmail();
                const newUser = {
                    email,
                    displayName: name,
                    firstName: userCredential._tokenResponse.firstName,
                    lastName: userCredential._tokenResponse.lastName,
                    photUrl: userCredential._tokenResponse.photoUrl,
                };
                setUser(newUser);
                // setMessage('');
                saveUser(email, name, "POST");
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        Swal.fire(
                            'Thank You!',
                            'Verify The Email Please.Check Your Inbox or Spam!',
                            'success'
                        )
                    })
                    .catch((error) => setAuthError(error.message));
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then((result) => {
        });
    };
    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        // console.log(auth);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log(auth);
                // console.log(auth.currentUser);
                if (auth.currentUser.emailVerified === true) {
                    setUser(userCredential.user);
                    const destination = location?.state?.from || "/";
                    navigate(destination);
                    setAuthError("")
                } else {
                    Swal.fire(
                        'Please Verify The Email First!',
                    )
                }

            })
            .catch((error) => {
                setAuthError(error.message);
                // console.log(error.message);
            })
            .finally(() => setIsLoading(false));




    };

    const forgetPassword = (email) => {
        // setIsLoading(true);
        sendPasswordResetEmail(auth, email, {
            url: "http://localhost:3000/login",
        })
            .then(() => {
                Swal.fire(
                    'Thank You!',
                    'Email for Password reset send Successfully!',
                    'success'
                )
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
        // .finally(() => setIsLoading(false));
    };
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(result._tokenResponse);
                console.log("object");
                setAuthError("");
                setUser(user);
                saveUser(
                    user.email,
                    user.displayName,
                    result._tokenResponse.firstName,
                    result._tokenResponse.lastName,
                    result._tokenResponse.photoUrl,
                    "PUT"
                );
                const destination = location?.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    const ResetPassword = (oobCode, newPassword) => {
        confirmPasswordReset(auth, oobCode, newPassword)
            .then(() => {
                // Update successful.
            })
            .catch((error) => {
                // An error ocurred
                // ...
            });
    };
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user).then((idToken) => {
                    setToken(idToken);
                });
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };
    const saveUser = (
        email,
        displayName,
        firsName,
        lastName,
        photoUrl,
        method
    ) => {
        const user = { email, displayName, firsName, lastName, photoUrl };
        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };
    return {
        user,
        registerUser,
        logout,
        token,
        admin,
        loginUser,
        signInWithGoogle,
        isLoading,
        authError,
        forgetPassword,
        ResetPassword,
        message,
    };
};
export default useFirebase;
