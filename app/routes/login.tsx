import { TextField } from '~/components/ui/text-field';
import logo from '@public/logo.svg';
import { Button } from '@mui/material';

export default function Login() {
  return (
    <div className="flex min-h-screen min-w-screen bg-white justify-center items-center">
      <div className="flex flex-col w-[450px] border-gray-100 border rounded-lg shadow-lg p-8">
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-12 h-12" />
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <h1 className="text-2xl font-semibold">Welcome to WeConnect 👋</h1>
          <p className="text-sm text-gray-500">
            Please sign in to your account and start the adventure
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <TextField id="email" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <TextField id="password" />
          </div>
        </div>
        <div className="mt-8">
          <Button disableFocusRipple variant="contained" className="w-full">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
