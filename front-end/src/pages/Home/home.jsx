import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

import Banner from '../../components/Banner/banner'
import Navigation from '../../components/Navigation/navigation'
import Feature from '../../components/Feature/feature'
import Footer from '../../components/Footer/footer'

import './home.css'

function Home() {
  document.title = 'Argent Bank - Home Page'


  const featureTitleChat = 'You are our #1 priority'
  const featureTitleMoney = 'More savings means higher rates'
  const featureTitleSecurity = 'Security you can trust'

  const featureTextChat =
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  const featureTextMoney =
    'The more you save with us, the higher your interest rate will be!'
  const featureTextSecurity =
    'We use top of the line encryption to make sure your data and money is always safe.'

  return (
    <>
      <Navigation />
      <main>
        <Banner />
        <section className="features">
          <Feature
            iconUrl={iconChat}
            title={featureTitleChat}
            text={featureTextChat}
          />
          <Feature
            iconUrl={iconMoney}
            title={featureTitleMoney}
            text={featureTextMoney}
          />
          <Feature
            iconUrl={iconSecurity}
            title={featureTitleSecurity}
            text={featureTextSecurity}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}


export default Home;