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



export const HandleFormModal = () => {
  const { isOpen, type, onClose } = useModal();
    const isModalOpen = isOpen && type === 'Modal4'

    const initialState = {
      nama: undefined,
      hobby: undefined,
      umur: undefined,
    };
    const [data, setData] = useState(initialState)

    const {nama,hobby,umur} = initialState

    const handleChange = (e:any) => {
      setData({...data, [e.target.name] : e.target.value})
      
    }
    const handleSubmit = (e:any) => {
      e.preventDefault()
      console.log(data);
    }

    return (
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Membuat form OnChange.</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <label className="block" htmlFor="">
              Nama
            </label>
            <input
              type="text"
              name="nama"
              onChange={handleChange}
              placeholder="masukkan nama"
              value={nama}
            />
            <label className="block" htmlFor="">
              hobby
            </label>
            <input
              type="text"
              name="hobby"
              onChange={handleChange}
              placeholder="masukkan hobby"
              value={hobby}
            />
            <label className="block" htmlFor="">
              Umur
            </label>
            <input
              type="number"
              name="umur"
              onChange={handleChange}
              placeholder="masukkan umur"
              value={umur}
            />
            <button type="submit">Submit</button>
          </form>
        </DialogContent>
      </Dialog>
    );
}