import { toast } from "react-toastify";

export default function Home() {
  return (
    <div
      onClick={() => toast("Check")}
      className="text-3xl font-bold text-red-400"
    >
      Home
    </div>
  );
}
