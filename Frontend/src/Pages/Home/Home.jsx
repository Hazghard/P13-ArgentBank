import React from 'react';
import MainNav from '@/Components/MainNav/MainNav';
import Footer from '@/Components/Footer/Footer';
import Hero from '@/Components/Hero/Hero';
import Feature from '@/Components/Feature/Feature';

import iconChat from '@/assets/Images/icon-chat.png';
import iconMoney from '@/assets/Images/icon-money.png';
import iconSecurity from '@/assets/Images/icon-security.png';

const Home = () => {
  console.log('Home loaded');

  return (
    <>
      <MainNav />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            icon={iconChat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            icon={iconMoney}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Feature
            icon={iconSecurity}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;