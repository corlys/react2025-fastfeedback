import useSWR from "swr";
import { useRouter } from "next/router";
import { useEffect } from "react";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import { useAuth } from "@/lib/auth";
import fetcher from "@/utils/fetch";

const Dashboard = () => {
  const auth = useAuth();
  const router = useRouter();
  const { data, error } = useSWR("/api/sites", fetcher);
  return (
    <DashboardShell>
      {!data ? <SiteTableSkeleton /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
