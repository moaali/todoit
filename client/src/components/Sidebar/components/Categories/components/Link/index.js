import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { Badge } from 'components'

@inject('store')
class Link extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
    icon: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    theme: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.todosStore = props.store.todosStore;
  }

  handleClick = event => {
    event.preventDefault();

    this.todosStore.switchCategory(this.props.category)
  }

  render() {
    const {
      icon,
      count,
      theme,
      category,
      className,
    } = this.props;

    return (
      <li className={`sidebar__menu-item sidebar__menu-item--${theme} ${className}`}>
        <a href="#" className='sidebar__link' onClick={this.handleClick}>
          <i className={`fa fa-${icon} sidebar__link-icon`} />
          <span className='sidebar__link-text'>{category}</span>
        </a>
        <span className='sidebar__link-addon'>
          <Badge content={count} className={`badge--${theme}`} />
        </span>
      </li>
    );
  }
}

export default Link;
