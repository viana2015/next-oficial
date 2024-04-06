//import { Loader } from "lucide-react";
import DashboardSkeleton from "../../ui/skeletons";

export default function Loading() {
  return (
      <DashboardSkeleton />
    // <div className=" h-full flex items-center justify-center  transition-opacity/3">
    //   <Loader className=" w-11 h-11 text-zinc-400 animate-spin" />
    // </div>
  )
}