import { useEffect, useState } from "react";
import PendingAppointments from "../../components/profile-page/pending-appointments";
import RejectedAppointments from "../../components/profile-page/rejected-appointments";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import getUserAppointments from "../../services/appointment/get-user-appointments";
import SelectedAppointments from "../../components/profile-page/selected-appointments";
import CompletedAppointments from "../../components/profile-page/completed-appointments";
export default function ProfilePage() {
  // const { userId } = useParams();
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [selectedAppointments, setSelectedAppointments] = useState([]);
  const [completedAppointments, setCompletedAppointments] = useState([]); // [1

  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserAppointments(user?.user?.userId || 1);
      setPendingAppointments(res.filter((item) => item.status === "PENDING"));
      setRejectedAppointments(res.filter((item) => item.status === "REJECTED"));
      setSelectedAppointments(res.filter((item) => item.status === "ACCEPTED"));
      setCompletedAppointments(
        res.filter((item) => item.status === "COMPLETED")
      );
    };

    fetchData();
  }, [user?.user?.id]);
  return (
    <div className="layout space-y-8 py-8 w-full">
      <p className="text-2xl font-semibold">Your Appointments</p>
      <CompletedAppointments
        completedAppointments={completedAppointments || []}
      />
      <SelectedAppointments selectedAppointments={selectedAppointments || []} />

      <div className="flex flex-row justify-between gap-5">
        <PendingAppointments pendingAppointments={pendingAppointments || []} />
        <RejectedAppointments
          rejectedAppointments={rejectedAppointments || []}
        />
      </div>
    </div>
  );
}
