import Image from "next/image";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="mb-10">
      <div className="layout flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/../public/logo.png"}
            alt="logo"
            width={150}
            height={100}
            priority
          />
        </Link>

        {user ? (
          <div className="flex gap-6">
            <h5>
              Hi, {user.firstName} {user.lastName}
            </h5>
            <SignOutButton>
              <button className="text-red-500">Logout</button>
            </SignOutButton>
          </div>
        ) : (
          <SignInButton mode="modal">
            <button className="rounded px-7 py-2 bg-orange-400 text-white text-sm">
              Login
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Navbar;
