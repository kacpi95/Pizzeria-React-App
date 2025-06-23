import Item from '../Item/Item';

export default function List({ data }) {
  return (
    <ul>
      {data.map(({ id, status, peopleAmount, maxPeopleAmount, bill }) => (
        <Item
          key={id}
          id={id}
          status={status}
          peopleAmount={peopleAmount}
          maxPeopleAmount={maxPeopleAmount}
          bill={bill}
        />
      ))}
    </ul>
  );
}
