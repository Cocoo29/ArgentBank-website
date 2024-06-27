import Footer from '../../components/Footer/footer'
import Navigation from '../../components/Navigation/navigation'
import Login from '../../components/LoginForm/loginForm'

function SignIn() {
  document.title = 'Argent Bank - Login'
  return (
    <>
      <Navigation />
        <main className="main bg-dark">
          <Login />
        </main>
      <Footer />
    </>
  )
}

export default SignIn;