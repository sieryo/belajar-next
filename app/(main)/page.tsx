import { CanvasTest } from '@/components/canvas'
import { CanvasClip } from '@/components/canvas/canvas-clip'
import Image from 'next/image'

export default function Home() {
  return (
      <div>hello
        <CanvasTest />
        <CanvasClip />
      </div>
  )
}
