import React from 'react';
import Header from '../../components/Header/Header.jsx'; 
import CompaniesExplore from '../../components/CompaniesExplore/CompaniesExplore.jsx';
import { useState } from 'react';
import CompaniesDisplay from '../../components/CompaniesDisplay/CompaniesDisplay.jsx';
import JobSection from '../../components/JobSection/JobSection.jsx';
import CondidatureSection from '../../components/ConcdidatureSection/CondidatureSection.jsx';
const Home = () => {
        const [category,setCategory] = useState("All")

  return (
    <div>
        <Header></Header>
        <CompaniesExplore category={category} setCategory={setCategory}/>
        <CompaniesDisplay category={category}/>
        <JobSection></JobSection>
        <CondidatureSection></CondidatureSection>

    </div>
  );
};

export default Home;
