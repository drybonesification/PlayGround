import Link from "next/link";

export default function RouterRewrite() {
  return (
    <div>
      <li>
        <Link href={"/AppScreens/UnderMaintenance"}>UnderMaintenance</Link>
        <Link href={"/AppScreens/Christmas2018"}>Christmas2018</Link>
        <Link href={"/AppScreens/TurkeyDay2018"}>TurkeyDay2018</Link>
        <Link href={"/AppScreens/RainyDays"}>RainyDays</Link>
        <Link href={"/AppScreens/Encoder"}>Encoder</Link>
        <Link href={"/AppScreens/DnDSheet"}>DndSheet</Link>
        <Link href={"/AppScreens/LoginAndRegister"}>Login & register</Link>
      </li>
    </div>
  );
}
