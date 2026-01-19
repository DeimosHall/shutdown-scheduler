import { Box, InputBase } from "@mui/material"

interface TimeInputProps {
  value: unknown;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

function TimeInput({value, onChange}: TimeInputProps) {
  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.border.main}`,
        borderRadius: '10px',
        backgroundColor: (theme) => theme.palette.customBackground.main,
        width: '100px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <InputBase
        value={value}
        onChange={onChange}
        inputProps={{
          style: { textAlign: 'center', fontSize: '3em', fontWeight: 'bold' }
        }}
      />
    </Box>
  );
}

export default TimeInput;