import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

const Title = ({ store }) => (
  <h2 className='m-0 tt-c'>{store.todosStore.activeCategory} Tasks</h2>
);

Title.propTypes = {
  store: PropTypes.shape({
    todosStore: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default Title |> observer |> inject('store');


