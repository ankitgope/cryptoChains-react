import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({text,variant,onClick,sx}) {
  return (
    <Stack spacing={2} direction="row">
      
      <Button variant={variant} onClick={onClick} sx={sx}>{text}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}