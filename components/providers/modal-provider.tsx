"use client"

import {useEffect, useState} from 'react'
import { TestModal } from '@/components/modals/test-modal';
import { TestModal2 } from '@/components/modals/test-2-modal';


export const ModalProvider = () => {
    const [isMounted, SetIsMounted] = useState(false);

    useEffect(() => {
      SetIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }
    
    return (
        <>
        <TestModal />
        <TestModal2 />
        </>
    )
}