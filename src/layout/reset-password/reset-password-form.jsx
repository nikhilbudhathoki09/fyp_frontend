import { FaLock } from "react-icons/fa";

import { Input } from "@mantine/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../../components/ui/button";
import changePassword from "../../services/user/change-password";
import { cn } from "../../utils/utils";
import toast from "react-hot-toast";

export default function ResetPasswordForm() {
  // const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const searchValue = searchParams.get("token");
  const [loading, setLoading] = useState(false);

  const [newPassword, setNewPassword] = useState("");

  const onSubmit = async () => {
    setLoading(true);
    if (searchValue === null) {
      setLoading(false);
      return toast.error("Invalid token");
    }
    if (newPassword.length < 6) {
      setLoading(false);
      return toast.error("Password must be at least 6 characters long");
    }
    await changePassword({
      data: {
        newPassword: newPassword,
      },
      token: searchValue,
    });

    setLoading(false);
  };

  console.log(newPassword);

  return (
    <div className="px-12 py-8 rounded-lg shadow-xl bg-white">
      <h3 className="text-text-color text-4xl font-semibold">
        Reset your password
      </h3>
      <hr />

      <div className={cn("space-y-5 mt-4 mb-2", loading && "blur-sm")}>
        <Input
          type="password"
          size="lg"
          icon={<FaLock className="text-2xl py-5 text-primary" />}
          placeholder={"New Password"}
          id={"password"}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button
          text="Reset now"
          disabled={searchValue === null || newPassword.length < 6}
          onClick={onSubmit}
          loading={loading}
          className="bg-primary flex justify-center hover:bg-tertiary cursor-pointer w-full py-4 text-center rounded-2xl text-white-bg text-xl"
        />
      </div>
    </div>
  );
}
