import React, { useState } from 'react';
import {
    CardActions,
    Collapse,
    Button,
    Chip,
    Rating,
    Typography,
    CardContent,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

interface RatingCardProps {
    title: string;
    value: number;
    description: string;
    icon: React.ReactElement;
    color: string;
    open?: boolean;
}

const RatingCard: React.FC<RatingCardProps> = ({
    title,
    value,
    description,
    icon,
    color,
    open = false,
}) => {
    const [expanded, setExpanded] = useState(open);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <CardActions>
                <Rating
                    name="read-only"
                    value={value / 20}
                    precision={0.1}
                    icon={icon}
                    emptyIcon={icon}
                    sx={{ color: color }}
                    readOnly
                />
                <Button
                    aria-expanded={expanded}
                    aria-label="show more"
                    onClick={handleExpandClick}
                >
                    <Chip sx={{ backgroundColor: '#420071' }} label={`${title} ${value}%`} />
                    {expanded ? <ExpandLessIcon sx={{color:color}} /> : <ExpandMoreIcon sx={{color:color}}  />}
                </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Collapse>
        </>
    );
};

export default RatingCard;
