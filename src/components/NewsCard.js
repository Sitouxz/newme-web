export default function NewsCard(props) {
  const timestamp = new Date(props.timestamp);

  return (
    <>
      <a href={props.url} target="_blank" rel="noreferrer">
        <div className="p-3 backdrop-blur-sm bg-opacity-30 drop-shadow-md shadow-sm bg-teal-900 transition-all rounded-lg">
          <h1 className="font-bold text-2xl">{props.title}</h1>
          <span className="my-3"> Click for more details</span>
          <div className="flex justify-between">
            <p className="font-medium">By Newme</p>
            <p>{timestamp.toLocaleDateString('en-CA')}</p>
          </div>
        </div>
      </a>
    </>
  );
}
