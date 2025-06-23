import Item from '../Item/Item';

export default function List({ data }) {
  return (
    <ul>
      {data.map(({ id, status }) => (
        <Item key={id} id={id} status={status} />
      ))}
    </ul>
  );
}
