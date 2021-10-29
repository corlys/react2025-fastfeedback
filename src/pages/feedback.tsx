import useSWR from "swr";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import fetcher from "@/utils/fetch";
import { IFeedbackData } from "@/types/Fetch";
import { ResponseData } from "@/types/Fetch";
import { useAuth } from "@/lib/auth";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";

const Feedback = () => {
  const { user } = useAuth();

  const { data } = useSWR<ResponseData<IFeedbackData>>(
    user ? ["/api/feedback", user] : null,
    fetcher
  );
  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {!data ? (
        <SiteTableSkeleton />
      ) : data.payload.feedback.length === 0 ? (
        <EmptyState />
      ) : (
        <FeedbackTable data={data.payload} />
      )}
    </DashboardShell>
  );
};

export default Feedback;
