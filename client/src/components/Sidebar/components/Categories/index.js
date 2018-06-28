import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { Link } from './components'

@inject('store')
@observer
class Categories extends Component {
  static propTypes = {
    store: PropTypes.shape({
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props)
    this.todosStore = this.props.store.todosStore;
  }

  render() {
    const { meta, activeCategory } = this.todosStore;
    return (
      <ul className='sidebar__links-menu'>
        <Link
          className={activeCategory === 'all' ? 'sidebar__menu-item--is-active' : ''}
          icon='database'
          count={meta.all}
          theme='primary'
          category='all'
        />
        <Link
          className={activeCategory === 'pending' ? 'sidebar__menu-item--is-active' : ''}
          icon='repeat'
          count={meta.pending}
          theme='warning'
          category='pending'
        />
        <Link
          className={activeCategory === 'completed' ? 'sidebar__menu-item--is-active' : ''}
          icon='check'
          count={meta.completed}
          theme='success'
          category='completed'
        />
      </ul>
    );
  }
}

export default Categories;
