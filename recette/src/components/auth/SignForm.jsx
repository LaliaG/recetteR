import { useRef } from "react"
import {useDispatch, useSelector} from "react-redux"
import { setAuthMode, setUser } from "./authSlice"
import { SIGN_IN_URL, SIGN_UP_URL } from "../../firebaseConfig"
import axios from "axios"

const SignForm = () => {
  const authMode = useSelector(state => state.auth.authMode)
  const dispatch = useDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()

  const submitForm = (e) => {
    e.preventDefault()

    const URL = authMode === "Se connecter" ? SIGN_IN_URL : SIGN_UP_URL

    const credentials = {
      email : emailRef.current.value,
      password: passwordRef.current.value,
      returnSecureToken: true
    }

    axios.post(URL, credentials).then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.idToken)
      dispatch(setUser(response.data))
    })
  }

  return ( 
    <>
      <h3>{authMode}</h3>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button>{authMode}</button>
      </form>
      <button onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>
        {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
      </button>
    </>
   );
}
 
export default SignForm;