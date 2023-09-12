import { CardItem } from "@/components/card/card-item";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardPage = () => {

    const apiData = [
      {
        id: 1,
        nama: "Rubah",
        deskripsi: "Rubah merupakan...",
        imageUrl:
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      },
      {
        id: 2,
        nama: "Macan tutul",
        deskripsi: "Macan tutul merupakan...",
        imageUrl:
          "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 3,
        nama: "Elang",
        deskripsi: "Elang merupakan...",
        imageUrl:
          "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: 4,
        nama: "Harimau",
        deskripsi: "Harimau merupakan...",
        imageUrl:
          "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ];


    return (
      <ScrollArea className="p-4 w-[1000px] h-full">
        <div className="flex flex-wrap flex-col md:flex-row gap-5">
          {apiData.map((data) => (
            <CardItem
              key={data.id}
              imageUrl={data.imageUrl}
              nama={data.nama}
              deskripsi={data.deskripsi}
            />
          ))}
        </div>
      </ScrollArea>
    );
}
 
export default DashboardPage;