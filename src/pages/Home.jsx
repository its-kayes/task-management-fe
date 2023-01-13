import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Home() {
  const { value } = useSelector((state) => state.check);
  console.log(value);
  return (
    <div
      onClick={() => toast("Check")}
      className="text-3xl font-bold text-red-400"
    >
      Home
    </div>
  );
}
