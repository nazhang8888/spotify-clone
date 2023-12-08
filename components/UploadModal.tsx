import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { FieldValues, useForm } from "react-hook-form";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      artist: "",
      album: "",
      genre: "",
      image: null,
      audio: null,
    },
  });
  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title="Add a song"
      description="Upload an audio file to add to your library."
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Form
    </Modal>
  );
};

export default UploadModal;
