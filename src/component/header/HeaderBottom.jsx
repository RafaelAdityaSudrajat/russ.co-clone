import React from 'react';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';

import './HeaderBottom.css';

const HeaderBottom = () => {
  return (
    <div className="Header__Container">
      <div className="Header__Wrapper">
        <div className="Header__Top__Wrapper">
          <div className="MobileMenu__Wrapper">
            <MenuIcon className="MobileMenu" />
          </div>
          <div className="Logo">
            <img
              src="https://www.russ.co.id/cdn/shop/files/RUSS_LogoBlack_100x.png?v=1697020850"
              alt="Logo"
            />
          </div>

          <div className="Icon__Wrapper">
            <PersonOutlineIcon className="icon" />
            <SearchIcon className="icon" />
            <WorkOutlineIcon className="icon" />
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <span>12.12 SALE</span>
            </li>
            <li>
              <span>NEW ARRIVAL</span>
            </li>
            <li>
              <span>ADULTS</span>
            </li>
            <li>
              <span>KIDS</span>
            </li>
            <li>
              <span>BEST SELLER</span>
            </li>
            <li>
              <span>NEWS</span>
            </li>
            <li>
              <span>PRIVACY POLICY</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBottom;
