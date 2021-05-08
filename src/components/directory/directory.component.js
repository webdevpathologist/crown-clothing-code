import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import {SelectDirectorySections} from '../../redux/directory/directory.selector'

import './directory.styles.scss';

const Directory=({sections})=>(
  <div className='directory-menu'>
  {
      sections.map(({id,...otherProps})=>(
      <MenuItem key={id} {...otherProps}/>))
  }
  </div>
);

const mapStatetoProps=createStructuredSelector({
  sections:SelectDirectorySections
});

export default connect(mapStatetoProps)(Directory);