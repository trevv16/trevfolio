import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';

export default function Toggle(props) {
  const normValue = props.value ? props.value : false;

  return (
    <ToggleButton value='check' selected={normValue}>
      <CheckIcon />
    </ToggleButton>
  );
}
