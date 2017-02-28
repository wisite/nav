import NavItem from './NavItem';

class Nav extends React.Component {

  static propTypes = {
    company: React.PropTypes.shape({
      en: React.PropTypes.string,
      zh: React.PropTypes.string,
    }),
    items: React.PropTypes.array,
  };

  renderItems() {
    const { items } = this.props;
    return items.map((item) => (
      <NavItem key={item.name} {...item} />
    ));
  }

  renderLogo() {
    const { company } = this.props;
    return (
      <div className="neo-nav-logo">
        <h1>{company.en}</h1>
        <span>{company.zh}</span>
      </div>
    );
  }
  render() {
    const me = this;
    return (
      <div className="neo-nav">
        <div className="neo-nav-logo-wrapper">
          {me.renderLogo()}
        </div>
        <div className="neo-nav-body">
          {me.renderItems()}
        </div>
      </div>
    );
  }
}

export default Nav;