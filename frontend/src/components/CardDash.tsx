type Props = {
  title1: string;
  title2: JSX.Element;
  data?: string | null;
};

const contentCard: string = "loading";

function bodyCard({ title1, title2, data }: Props) {
  return (
    <div className="bg-white rounded p-4 w-full mb-5 shadow-2xl shadow-zinc-800">
      <h2 className="flex flex-row font-semibold  text-slate-800 items-center  justify-between gap-2 py-2">
        <span>{title1}</span>
        <span>{title2}</span>
      </h2>

      {data !== null ? (
        <p className="text-xl font-semibold text-lime-500"> {data}</p>
      ) : (
        <p className="text-xl font-semibold text-lime-500">{contentCard}</p>
      )}
    </div>
  );
}
export default bodyCard;
