import Link from "next/link";
import UnderMaintenance from "../src/AppScreens/UnderMaintenance";

export default function RouterRewrite() {
  return (
    <Link href={"/"}>
      <UnderMaintenance />
    </Link>
  );
}
