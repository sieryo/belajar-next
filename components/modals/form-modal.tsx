"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import {useState} from 'react'



export const FormModal = () => {
  const { isOpen, type, onClose } = useModal();
  const [nama,setNama] = useState("")

    const handleChange = (e:any) => {
      setNama(e.target.value)
    }
    const handleSubmit = (e:any) => {
      e.preventDefault()
      setNama("")
    }

    const isModalOpen = isOpen && type === 'Modal3'
    
    return (
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Membuat form OnChange.</DialogTitle>
          </DialogHeader>
            <form onSubmit={handleSubmit}>
              <input type="text" 
                placeholder="masukkan nama"
                onChange={handleChange}
                value={nama}
              />
            </form>
            <label htmlFor="">{nama}</label>
        </DialogContent>
      </Dialog>
    );
}