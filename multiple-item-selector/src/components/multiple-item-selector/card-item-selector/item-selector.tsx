import { TItem } from "../../../schemas/item.type";

export const ItemSelector = (props: { item: TItem }) => {
  const selectItem = (item: string) => console.log(item);

  return (
    <>
      <div key={props.item.label} className="w-full flex justify-center">
        <button
          className="rounded-md border border-gray-700 my-3 p-2 "
          onClick={() => selectItem(props.item.msg)}
        >
          {props.item.label}
        </button>
      </div>
    </>
  );
};
