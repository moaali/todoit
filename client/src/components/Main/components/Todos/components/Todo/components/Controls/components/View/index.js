import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip';
import { inject } from 'mobx-react'

@inject('store')
class View extends PureComponent {
  static propTypes = {
    store: PropTypes.shape({
      offcanvasStore: PropTypes.shape({}).isRequired,
      todosStore: PropTypes.shape({}).isRequired,
    }).isRequired,
    todo: PropTypes.shape({}).isRequired,
    isEditMode: PropTypes.bool.isRequired,
    handleView: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.todosStore = props.store.todosStore;
    this.offcanvasStore = props.store.offcanvasStore;
  }

  handleView = event => {
    event.preventDefault();

    this.props.handleView();
  }

  renderViewControl = id => {
    if (this.props.isEditMode) return null;

    return (
      <li className="peer mL-10 todo-controls__item">
        <a
          href="#"
          data-tip
          data-for={`controls__control-tip-view-${id}`}
          className='fa fa-eye todo-controls__icon'
          onClick={this.handleView}
        >
          {' '}
        </a>
        <ReactTooltip id={`controls__control-tip-view-${id}`} effect='solid'>
          <span>View Todo</span>
        </ReactTooltip>
      </li>
    );
  }

  render() {
    const { todo } = this.props;

    return this.renderViewControl(todo.id);
  }
}

export default View;
