import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import classNames from 'classnames';

const StatusNotification = ({ title, message, type }) => {
  const [open, setOpen] = useState(true);

  const severityMapping = {
    warning: 'warning',
    error: 'error',
    success: 'success',
  };
  const severity = severityMapping[type] || 'warning';

  const handleCloseNotification = () => {
    setOpen(false);
  }

  return (
    <>
      <Collapse in={open}>
        <div className={classNames('fixed bottom-4 w-full px-auto py-1   left-1/2 transform -translate-x-1/2 md:w-6/12 z-50', {
          'block': open
        })}>
          <Alert severity={severity} onClose={() => {
            handleCloseNotification()
          }}>
            <AlertTitle><strong>{title}</strong></AlertTitle>
            {message}
          </Alert>
        </div>
      </Collapse>
    </>
  );
};

export default StatusNotification;