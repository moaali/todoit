import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip';
import { inject } from 'mobx-react'

@inject('store')
class Edit extends PureComponent {
  static propTypes = {
    todo: PropTypes.shape({}).isRequired,
    handleEditMode: PropTypes.func.isRequired,
  }

  handleEdit = event => {
    event.preventDefault();

    this.props.handleEditMode();
  }

  render() {
    const { todo } = this.props;

    return (
      <li className="peer mL-10 todo-controls__item">
        <a
          href="#"
          data-tip
          data-for={`controls__control-tip-edit-${todo.id}`}
          className='fa fa-pencil todo-controls__icon'
          onClick={this.handleEdit}
        >
          {' '}
        </a>
        <ReactTooltip id={`controls__control-tip-edit-${todo.id}`} effect='solid'>
          <span>Edit Todo</span>
        </ReactTooltip>
      </li>
    );
  }
}

export default Edit;
