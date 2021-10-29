import { useState, useRef } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { mutate } from "swr";
import { useAuth } from "@/lib/auth";

import { deleteFeedback } from "@/lib/db";

const RemoveFeedbackButton = ({ feedbackId }: { feedbackId: string }) => {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const deleteSelectedFeedback = async () => {
    console.log(feedbackId);
    deleteFeedback(feedbackId);
    mutate(
      ["/api/feedback", auth.user],
      async (data) => {
        return {
          payload: {
            feedback: [
              ...data.payload.feedback.filter((fb) => fb.id !== feedbackId),
            ],
          },
        };
      },
      false
    );
    onClose();
  };
  return (
    <>
      <IconButton
        aria-label="delete feedback"
        icon={<DeleteIcon />}
        variant="ghost"
        onClick={() => setIsOpen(true)}
      >
        Delete Feedback
      </IconButton>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteSelectedFeedback} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveFeedbackButton;
