import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";


export const TestModal2 = () => {
  const { isOpen, type, onClose } = useModal();

    const isModalOpen = isOpen && type === 'Modal2'
    
    return (
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader className="mt-3">
            <DialogTitle>Selamat, kamu telah mengerti tentang cara manajemen state.</DialogTitle>
            <DialogDescription>
              <p>Ini adalah deksripsi dialog.</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
}