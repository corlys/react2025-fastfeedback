import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  ButtonProps,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";

import { ISiteForm } from "@/types/Forms";
import { registerWebsite } from "@/lib/db";
import { useAuth } from "@/lib/auth";

const AddSiteModal = (props: ButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();
  const auth = useAuth();
  const { mutate } = useSWRConfig();
  const onSubmit = (formData: ISiteForm) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      ...formData,
    };
    mutate(
      ["/api/sites", auth.user],
      async (data) => {
        return {
          payload: { sites: [newSite, ...data.payload.sites] },
        };
      },
      false
    );
    registerWebsite(newSite);
    mutate("/api/sites");
    toast({
      title: "Site registered.",
      description: "We've added website for you..",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
          reset();
        }}
        {...props}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="My site" {...register("name")} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input placeholder="https://yoursite.com" {...register("url")} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="teal">
              Add website
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
