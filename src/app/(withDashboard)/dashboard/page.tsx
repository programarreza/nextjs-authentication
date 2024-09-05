import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-xl text-center mt-10">
            Logged-in user email: {session?.user?.email}
          </h1>
          <Image
            src={session?.user?.image as string}
            alt="user image"
            height={100}
            width={100}
            className="mx-auto rounded-full border border-blue-800 mt-5"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
