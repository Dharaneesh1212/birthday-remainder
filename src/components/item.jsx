const Item = ({ imgUrl, name, age, id, clearAll }) => {
  // const clickHandler = (id) => {
  //   clearAll(id);
  // };
  return (
    <article className="flex flex-col items-center justify-between gap-2">
      <div className="flex flex-row items-center justify-center gap-2">
        <div>
          <img src={imgUrl} alt={name} className="w-10 h-10 rounded-full" />
        </div>
        <div className="flex flex-col gap-8 my-8">
          <span className="text-xl font-medium">{name}</span>
          <span className="text-xl font-bold">{age}</span>
        </div>
      </div>
      <div></div>
    </article>
  );
};

export default Item;
