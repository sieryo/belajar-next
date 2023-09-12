import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);


export const TestModal2 = () => {
  const { isOpen, type, onClose } = useModal();

    const isModalOpen = isOpen && type === 'Modal2'
    
    return (
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Penggunaaan ScrollArea pada dialog.</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-72 w-[80%] rounded-md border">
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm">
                  {tag}
                </div>
                <Separator className="mt-2" />
              </>
            ))}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
}