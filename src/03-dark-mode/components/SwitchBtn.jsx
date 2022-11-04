import { useState } from 'react';
import { FormGroup, FormControlLabel } from '@mui/material';
import { MaterialUISwitch } from './';
import { useThemeContext } from '../hooks/useThemeContext';

export const SwitchBtn = () => {

    const {
        contextTheme,
        setContextTheme
    } = useThemeContext();

    const [checked, setChecked] = useState(false);

    const handleSwitch = (event) => {
        setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'));
        setChecked(event.target.checked);
        // console.log(event.target.checked);
    }

    return (
        <div
            className='container-switch'>
            <FormGroup>
                <FormControlLabel
                    control={
                        <MaterialUISwitch
                        sx={{ m: 1 }}
                        // defaultChecked
                        id="material-switch"
                        onChange={handleSwitch}
                        checked={checked}
                        
                        />
                    }
                    label={contextTheme}
                    htmlFor="material-switch"
                    aria-label="Dark Mode Switch"
                />
            </FormGroup>
        </div>
    )
};