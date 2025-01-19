function BookCard({ title, image }) {
  return (
    <div className="bg-[#FFF9E5] rounded-lg p-4 shadow-sm hover:shadow-2xl transition-shadow">
      <div className="aspect-[3/4] bg-gray-200 rounded-md mb-3">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>
      <h3 className="text-gray-800 font-medium text-center">{title}</h3>
    </div>
  );
}
export default BookCard;
