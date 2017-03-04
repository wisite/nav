/**
 * Created by ssehacker on 2017/2/25.
 */
import React from 'react';

class NavItem extends React.Component {
  render() {
    const { name, href } = this.props;
    return (
      <div className="neo-nav-item">
        <a href={href}>{name}</a>
      </div>
    )
  }
}

export default NavItem;