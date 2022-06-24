import React from 'react';
import Featured from '../../components/Featured/Index';
import FeaturedProperties from '../../components/FeaturedProperties/Index';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import MailList from '../../components/MailList/Index';
import Navbar from '../../components/Navbar/Index';
import PropertyList from '../../components/PropertyList/Index';
import './style.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes quests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
