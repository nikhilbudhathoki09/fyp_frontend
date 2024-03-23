import { useEffect, useState } from "react";
import PendingAppointments from "../../components/profile-page/pending-appointments";
import RejectedAppointments from "../../components/profile-page/rejected-appointments";
import { useSelector } from "react-redux";

import getUserAppointments from "../../services/appointment/get-user-appointments";
export default function ProfilePage() {
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserAppointments(user?.user?.id || 1);
      setPendingAppointments(res.filter((item) => item.status === "PENDING"));
      setRejectedAppointments(res.filter((item) => item.status === "REJECTED"));
    };

    fetchData();
  }, [user?.user?.id]);
  return (
    <div className="layout space-y-8 py-8 w-full">
      <p className="text-2xl font-semibold">Your Appointments</p>
      <div className="flex flex-row justify-between gap-5">
        <PendingAppointments pendingAppointments={pendingAppointments} />
        <RejectedAppointments rejectedAppointments={rejectedAppointments} />
      </div>
    </div>
  );
}
