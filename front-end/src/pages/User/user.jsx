import Footer from '../../components/Footer/footer'
import Navigation from '../../components/Navigation/navigation'
import Account from '../../components/Account/account'
import UserHeader from '../../components/UserHeader/header'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './user.css'

function User() {
  document.title = "Argent Bank - User's Page"
  let navigate = useNavigate()

  const { token } = useSelector((state) => state.userLogin)
 
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token, navigate])
  
  return (
    <>
      <Navigation />
      <main className="main bg-dark bg-padding">
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  )
}

export default User;
