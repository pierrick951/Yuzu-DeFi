import Button from "../components/Button";
import { useAuth } from "../context/Contextlog";
import { FcGoogle } from "../index.icon";


const logIn: string = "Log in ";
const ico: JSX.Element = <FcGoogle />;

type Props = {
  text: string;
};
function TopNav({ text }: Props) {
  const { user, login } = useAuth();
  return (
    <div className="w-full py-5 px-3 flex-row flex bg-gradient-to-bl from-blue-950 to-slate-900 z-20 sticky top-0">
     
      <div className="flex flex-row gap-3  justify-between  w-full">
        <div className="text-gray-100 text-xl md:text-2xl font-semibold">
          {text}
        </div>

        <div className=" md:flex flex-row gap-3">
          {user !== null ? (
            <img
              className="w-8 rounded-full"
              src={user.user?.photoURL || "default-profile-pic-url"}
              alt=""
            />
          ) : (
            <Button content={logIn} event={login} ico={ico} />
          )}
        </div>
      </div>
    </div>
  );
}
export default TopNav;
