export default function AboutItem({ title, description }) {
  const formattedDescription = description
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>'); 

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-gray-700">{title}</h1>
        <p
          className="text-gray-600 text-justify"
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        ></p>
      </div>
    </div>
  );
}