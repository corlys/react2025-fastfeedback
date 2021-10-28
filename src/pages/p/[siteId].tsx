import { GetStaticProps, GetStaticPaths } from "next";
import { Flex, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import { FirebaseError } from "@firebase/util";

import { useAuth } from "@/lib/auth";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { IFeedbackSkeleton } from "@/types/Fetch";
import Feedback from "@/components/Feedback";
import { createFeedback } from "@/lib/db";

interface ICommentForm {
  comment: string;
}

const SiteFeedback = ({
  initialFeedback,
}: {
  initialFeedback: IFeedbackSkeleton[];
}) => {
  const auth = useAuth();
  const router = useRouter();
  const [allFeedback, setAllFeedback] = useState(initialFeedback);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (formData: ICommentForm) => {
    const newComment = {
      author: auth.user.displayName,
      authorId: auth.user.uid,
      siteId: typeof router.query.siteId === "string" && router.query.siteId,
      text: formData.comment,
      createdAt: new Date().toISOString(),
      provider: auth.user.providerId,
      status: "pending",
    };
    setAllFeedback([newComment, ...allFeedback]);
    const shouldReset = createFeedback(newComment);
    if (shouldReset) reset();
  };
  return (
    <Flex
      as="form"
      flexDirection="column"
      w="full"
      maxW="700px"
      margin="0 auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl my="8">
        <FormLabel>Comment</FormLabel>
        <Input type="text" {...register("comment")} />
        <Button fontWeight="medium" mt="4" type="submit">
          Add Comment
        </Button>
      </FormControl>
      {allFeedback.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Flex>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const siteId =
    typeof context.params.siteId === "string" && context.params.siteId;
  const initialFeedback = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sites = await getAllSites();
  if (sites instanceof FirebaseError) {
    return;
  }
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default SiteFeedback;
