import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";

export const TestModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const apiData = [
    {
      nama: "Rio Yudanto",
      kelas: "XII RPL-A",
    },
    {
      nama: "Sieryo",
      kelas: "XII RPL-B",
    },
    {
      nama: "Balmond",
      kelas: "XII RPL-B",
    },
  ];

  const toData = data?.data;

  const isModalOpen = isOpen && type === "Modal1";

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ini adalah dialog test {toData} </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div> {apiData.map((e) => (
          <p key={e.nama}>{e.nama}</p>
        ))} </div>
      </DialogContent>
    </Dialog>
  );
};
