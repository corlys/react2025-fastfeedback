import useSWR from "swr";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import fetcher from "@/utils/fetch";
import { ISiteData } from "@/types/Fetch";
import SiteTable from "@/components/SiteTable";
import { ResponseData } from "@/types/Fetch";
import { useAuth } from "@/lib/auth";

const Dashboard = () => {
  const { user } = useAuth();

  const { data } = useSWR<ResponseData<ISiteData>>(
    user ? ["/api/sites", user] : null,
    fetcher
  );
  return (
    <DashboardShell>
      {!data ? (
        <SiteTableSkeleton />
      ) : data.payload.sites.length === 0 ? (
        <EmptyState />
      ) : (
        <SiteTable data={data.payload} />
      )}
    </DashboardShell>
  );
};

export default Dashboard;
