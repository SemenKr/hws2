import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '147px',
                height: 6,
                color: '#00cc22',

                '& .MuiSlider-rail': {
                    backgroundColor: '#e5e5e5',
                    opacity: 1,
                    height: 6,
                    borderRadius: 3,
                },

                '& .MuiSlider-track': {
                    height: 6,
                    borderRadius: 3,
                },

                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #00cc22',
                    boxShadow: 'none',
                    '&::before': {
                        content: '""',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00cc22',
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },

                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 6px rgba(0, 204, 34, 0.15)',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
