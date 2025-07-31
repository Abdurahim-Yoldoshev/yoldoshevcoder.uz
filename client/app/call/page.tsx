import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import MenuBar from "../_components/sidebar";

function Call() {
  return (
      <div className="flex h-screen w-full">
      <MenuBar/>
      <main className="flex-1 p-6 ml-1.5">
          <h1 className="text-2xl font-semibold mt-1.5 ml-1.5">Aloqa Sahifasi</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Yon paneldagi menyular orqali navigatsiya qiling.
          </p>
        </main>
      </div>
  );
}

export default Call;