// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { auth } from '../../services/firebase';
// import { setUser } from './authSlice';

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await auth.signInWithEmailAndPassword(email, password);
//       const user = userCredential.user;
//       dispatch(setUser(user));
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
