import Link from "next/link";

export default function RouterRewrite() {
  return (
    <div>
      <li>
        <Link href={"/AppScreens/UnderMaintenance"}>UnderMaintenance</Link>{" "}
        <Link href={"/AppScreens/Christmas2018"}>Christmas2018</Link>
      </li>
    </div>
  );
}
