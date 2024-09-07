import React, { useContext } from 'react';
import BottomNav from './BottomNav';
import './Footer.css';
import { ServiceContext } from '../../../ServiceContext';
const Footer = () => {
  const { isDarkMode } = useContext(ServiceContext);
  return (
    <div>
      <div className={`footer_section ${isDarkMode ? 'dark' : 'light'}`}>
        <BottomNav />
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Footer;
