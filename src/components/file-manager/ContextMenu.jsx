import React from 'react';
import PropTypes from 'prop-types';
import Popover from '../util/Popover.jsx';

// FIXME seems like this could be abstracted into something more generic.

export function FileContextMenu(props) { 
  return (
    <Popover display onHide={props.onHide}>
      <div className="context-menu" onClick={props.onHide}>
        <ul>
          <li onClick={props.onSelectOpen}>Open</li>
          <li onClick={props.onSelectHistory}>View History</li>
          <li onClick={props.onSelectRename}>Rename...</li>
          <li onClick={props.onSelectDelete}>Delete...</li>
        </ul>
      </div>
    </Popover>
  );
}
FileContextMenu.propTypes = {
  onHide: PropTypes.func.isRequired,
  onSelectDelete: PropTypes.func.isRequired,
  onSelectHistory: PropTypes.func.isRequired,
  onSelectOpen: PropTypes.func.isRequired,
  onSelectRename: PropTypes.func.isRequired,
};


export function FolderContextMenu(props) {
  return (
    <Popover display onHide={props.onHide}>
      <div className="context-menu" onClick={props.onHide}>
        <ul>
          <li onClick={props.onSelectRename}>Rename...</li>
          {props.canDelete ? <li onClick={props.onSelectDelete}>Delete folder</li> : null}
          <li onClick={props.onSelectNewFile}>New file</li>
          <li onClick={props.onSelectNewFolder}>New folder</li>
        </ul>
      </div>
    </Popover>
  );
}
FolderContextMenu.propTypes = {
  canDelete: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  onSelectDelete: PropTypes.func.isRequired,
  onSelectNewFile: PropTypes.func.isRequired,
  onSelectNewFolder: PropTypes.func.isRequired,
  onSelectRename: PropTypes.func.isRequired,
};
