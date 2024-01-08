import React from 'react';
import {  Chip, SvgIconProps, Tooltip,  } from '@mui/material';

interface CustomChipButtonProps {
    icon: React.ReactElement<SvgIconProps>;
    label: string;
    color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export default function CustomChipButton({ icon, label, color } : CustomChipButtonProps) {
    return (
      <Tooltip title="Delete" placement="top">
        <Chip icon={icon} label={label} variant="outlined" color={color} />
      </Tooltip>
    );
  }