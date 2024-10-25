import { TItem } from "../../../schemas/item.type";
import { ItemSelector } from "../card-item-selector/item-selector";

export const ContainerItemSelector = (props: { list: Array<TItem> }) => {
  const list_jsx_elemnts = props.list.map((item) => (
    <ItemSelector key={item.label} item={item}></ItemSelector>
  ));

  return list_jsx_elemnts;
};
