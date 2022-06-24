import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigation.styles.scss';
import { ReactComponent as NavLogo } from '../../assets/camp-fire.svg'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <NavLogo className='logo'></NavLogo>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      {/* Renders the nested routes (found in App.js) depending on the current URL */}
      <Outlet />
    </Fragment>
  )
}

export default Navigation;