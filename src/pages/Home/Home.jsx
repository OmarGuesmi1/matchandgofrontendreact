import React from 'react';
import Header from '../../components/Header/Header.jsx'; 
import CompaniesExplore from '../../components/CompaniesExplore/CompaniesExplore.jsx';
import { useState } from 'react';
import CompaniesDisplay from '../../components/CompaniesDisplay/CompaniesDisplay.jsx';
const Home = () => {
        const [category,setCategory] = useState("All")

  return (
    <div>
        <Header></Header>
        <CompaniesExplore category={category} setCategory={setCategory}/>
        <CompaniesDisplay category={category}/>

    </div>
  );
};

export default Home;
