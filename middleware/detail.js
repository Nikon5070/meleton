export default function ({
  store, params, redirect,
}) {
  const { id } = params;
  if (!id) redirect('/');

  const item = store.getters['cart/getItemById'](id);
  if (!item || !item.id) redirect('/');

  return Promise.resolve();
}
