import React from 'react';
import PropTypes from 'prop-types';
import EditorsStore from '../../stores/EditorsStore';
import EditorTabs from '../editor/EditorTabs.jsx';

export default class Editors extends React.Component {
  static propTypes = {
    rtModel: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.store = new EditorsStore(props.rtModel);
    this.state = this.getStateFromStore();
  }

  componentDidMount() {
    this.store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    this.store.removeChangeListener(this.onChange);
    this.store.dispose();
  }

  onChange = () => {
    this.setState(this.getStateFromStore());
  };

  getStateFromStore = () => {
    return {
      editors: this.store.getEditors(),
      activeEditor: this.store.getActiveEditor()
    };
  };

  render() {
    return (
      <EditorTabs
        editors={this.state.editors}
        activeEditor={this.state.activeEditor}
      />
    );
  }
}
