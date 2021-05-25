import React from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {SelectCartHidden} from '../../redux/cart/cart.selectors';
import {SelectCurrentUser} from '../../redux/user/user.selectors';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles';

// import './header.styles.scss';

const Header=({current_user,hidden})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT 
            </OptionLink>
            {
                current_user?(
                <OptionLink onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
                ):(
                <OptionLink className='option' to='/signin'>
                    sign in
                </OptionLink>
                )
            }
                <CartIcon/>
        </OptionsContainer>
        {
            hidden?null:<CartDropdown/>
        }
        
        </HeaderContainer>
);

const mapStatetoProps=createStructuredSelector({
    current_user:SelectCurrentUser,
    hidden:SelectCartHidden
})

export default connect(mapStatetoProps)(Header);