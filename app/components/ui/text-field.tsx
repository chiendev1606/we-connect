import MuiTextField, { type TextFieldProps } from '@mui/material/TextField';

export function TextField(
  props: Omit<TextFieldProps, 'label' | 'slotProps'> & { label?: string },
) {
  return (
    <MuiTextField
      fullWidth
      className="w-full"
      slotProps={{
        htmlInput: {
          className: 'w-full max-h-[38px] !py-2 !px-4 !text-sm',
          disabledUnderline: true,
        },
        input: {
          className: 'w-full',
        },
      }}
      {...props}
    />
  );
}
