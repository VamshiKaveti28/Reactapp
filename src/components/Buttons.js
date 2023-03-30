import * as React from 'react';
import Button from '@mui/material/Button';

export default function ClaimAllowance() {
  return (
    <div className='claimButton'>
    <Button variant="contained" claimAllowance>
      CLAIM ALLOWANCE
    </Button>
    <Button variant="contained">OPT-OUT</Button>

    </div>
  );
}