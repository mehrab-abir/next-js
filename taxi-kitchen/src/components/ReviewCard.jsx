import Image from "next/image";

const ReviewCard = ({ reviewData }) => {
  const { user, rating, review, likes, date } = reviewData || {};

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src='/avatar.png'
          alt={user}
          width={1}
          height={1}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-xs text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.157c.969 0 1.371 1.24.588 1.81l-3.363 2.444a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.538 1.118l-3.363-2.444a1 1 0 00-1.176 0l-3.363 2.444c-.783.57-1.838-.197-1.538-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.22 9.382c-.783-.57-.38-1.81.588-1.81h4.157a1 1 0 00.95-.69l1.286-3.955z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{review}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
        <span>{likes?.length || 0} likes</span>

        <button className="hover:text-emerald-600 transition">👍 Like</button>
      </div>
    </div>
  );
};

export default ReviewCard;
