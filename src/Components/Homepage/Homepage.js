import React from 'react';
import Header from '../../Containers/Header/Header';
import './Homepage.scss';
import SpecialSale from './SpecialSale';
import FeaturedToyCatalog from './FeaturedToyCatalog';
import Lego from './Lego';
import Robots from './Robots';
import ToyManual from './ToyManual';
import Footer from '../../Containers/Footer/Footer';
import CategoryApi from '../../api/CategoryApi';
import { useEffect, useState } from 'react';
export default function Homepage() {
  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    const res = await CategoryApi.getAllCategory();
    setCategory(res);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div>
      <div className="Background_Homepage"></div>
      <SpecialSale />
      <div style={{ marginTop: '50px' }}></div>
      <FeaturedToyCatalog />

      {category.map((cate, i) => {
        console.log(cate);
        return (
          <>
            <div style={{ marginTop: '50px' }} key={cate.id}></div>
            <Lego cate={cate} />
          </>
        );
      })}
      <div style={{ marginTop: '50px' }}></div>
      <ToyManual />
      <div style={{ marginTop: '50px' }}></div>
    </div>
  );
}
