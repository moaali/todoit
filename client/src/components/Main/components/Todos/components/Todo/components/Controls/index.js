import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Delete, Edit, Save, View } from './components';

class Controls extends PureComponent {
  static propTypes = {
    todo: PropTypes.shape({}).isRequired,
    handleEditMode: PropTypes.func.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    handleView: PropTypes.func.isRequired,
  }

  switchEditSave = todo => {
    if (this.props.isEditMode) {
      return <Save todo={todo} handleEditMode={this.props.handleEditMode} />;
    }

    return <Edit todo={todo} handleEditMode={this.props.handleEditMode} />;
  }

  render() {
    const { todo } = this.props;

    return (
      <ul className='peers todo-controls'>
        <Delete todo={todo} />
        <View
          handleView={this.props.handleView}
          todo={todo}
          isEditMode={this.props.isEditMode}
        />
        {this.switchEditSave(todo)}
      </ul>
    );
  }
}

export default Controls;
