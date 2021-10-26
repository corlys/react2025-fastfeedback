import useSWR from "swr";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import fetcher from "@/utils/fetch";
import { ISiteData } from "@/types/Fetch";
import SiteTable from "@/components/SiteTable";

const Dashboard = () => {
  const { data, error } = useSWR<ISiteData>("/api/sites", fetcher);
  return (
    <DashboardShell>
      {!data ? (
        <SiteTableSkeleton />
      ) : data.sites.length === 0 ? (
        <EmptyState />
      ) : (
        <SiteTable sites={data.sites} />
      )}
    </DashboardShell>
  );
};

export default Dashboard;
