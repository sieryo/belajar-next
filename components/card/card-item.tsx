import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CardItem = (
    {imageUrl, nama, deskripsi
} : {imageUrl : string, nama: string, deskripsi: string}) => {
    return (
      <Card className=" w-[150px]  md:w-[300px] bg-slate-200 h-[400px] ">
        <Image
          src={imageUrl}
          alt={nama}
          width={250}
          height={200}
          className="pt-2 m-auto rounded-lg shadow"
        />
        <CardContent>
          <CardHeader>
            <CardTitle>{nama}</CardTitle>
            <CardDescription>{deskripsi}</CardDescription>
          </CardHeader>
        </CardContent>
      </Card>
    );
}