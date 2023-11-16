import React from 'react';
function Alertmodal({ msg, onClose }) {
  const handleClose = () => {
    onClose(); 
  }

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block', color:'white' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
          </div>
          <div className="modal-body">
            <p>{msg}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alertmodal;
