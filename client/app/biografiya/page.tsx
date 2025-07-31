import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import MenuBar from "../_components/sidebar";

function Biografiya() {
  return (
      <div className="flex h-screen w-full">
      <MenuBar/>
      <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold">Biografiya Sahifasi</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Yon paneldagi menyular orqali navigatsiya qiling.
          </p>
        </main>
      </div>
  );
}

export default Biografiya;
