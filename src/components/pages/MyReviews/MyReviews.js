import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import MyReview from "../MyReview/MyReview";
import { toast } from "react-hot-toast";
const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    const agree = window.confirm("do you want to delete it?");
    if (agree) {
      fetch(`https://physiotherapy-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged > 0) {
            toast.success("Review deleted successfully");
            const remainingReviews = reviews.filter((rev) => rev._id !== id);
            setReviews(remainingReviews);
          }
        });
    }
  };

  useEffect(() => {
    fetch(
      `https://physiotherapy-server.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-4xl text-cyan-600 font-semibold my-4 text-center mt-12">
        Your Reviews{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((singleReview) => (
          <MyReview
            key={singleReview._id}
            singleReview={singleReview}
            handleDelete={handleDelete}
          ></MyReview>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
