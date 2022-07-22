import { omit } from "ramda";

export const getModifiedItem = async <TItem, TUpdate, TModel>({
  item,
  updateFields,
  Model,
  findBy,
  findField,
}: {
  item: TItem;
  updateFields: TUpdate;
  Model: TModel;
  findBy: string;
  findField: string;
}) => {
  Object.keys(omit(["_id"], item)).forEach((i) => {
    updateFields[i] = item[i];
  });
  const doc = await Model[`find${findBy}AndUpdate`](
    { [findField]: item[findField] },
    updateFields,
    { new: true }
  );
  if (!doc) throw new Error(`${Model} not found`);
};
