import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import BidForProduct from "../BidForProduct/BidForProduct";

const ProductDetails = () => {
  const {
    _id: productId,
    image,
    title,
    condition,
    usage,
    description,
    price_max,
    price_min,
    location,
  } = useLoaderData();
  const bidModalRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for this product", data);
        setBids(data);
      });
  }, [productId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmite = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = Number(e.target.bid.value);
    console.log(name, email, bid, productId);
    const newBid = {
      productId: productId,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      bid_price: bid,
      status: "pending",
    };
    fetch("http://localhost:5000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after placing bid", data);
        if (data.insertedId) {
          bidModalRef.current.close();

          Swal.fire({
            title: "Your Bid Successfull",
            icon: "success",
            draggable: true,
          });
          // add the new bid to the state
          newBid._id = data.insertedId
          const newBids = [...bids, newBid]
          newBids.sort((a, b) => b.bid_price - a.bid_price)
          setBids(newBids)
        }
      });
  };

  return (
    <div>
      <div className="bg-base-200 mx-auto my-10 p-10  grid grid-cols-7 gap-6 rounded shadow">
        <div className="col-span-3">
          <img
            src={image}
            alt={title}
            className="w-full object-cover rounded mb-4"
          />
          <div className="bg-white p-5 mt-10 shadow-lg rounded-lg">
            <h2 className="text-lg font-bold">Product Description</h2>
            <div className="flex justify-between items-center my-5">
              <p className="text-primary font-medium ">
                Condition: <span className="text-black">{condition}</span>
              </p>
              <p className="text-primary font-medium">
                Usage Time : <span className="text-black">{usage}</span>
              </p>
            </div>

            <p>{description}</p>
          </div>
        </div>
        <div className="col-span-4">
          <Link className="font-medium">
            <IoIosArrowRoundBack className="inline-block" /> Back to Products
          </Link>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>

          <p>{description}</p>
          <p>
            Price: {price_min} - {price_max}
          </p>
          <p>Location: {location}</p>
          <p>Condition: {condition}</p>
          <button
            onClick={handleBidModalOpen}
            className="btn btn-primary w-full mt-5"
          >
            I want Buy This Product
          </button>
          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Give Seller Your Offered Price
              </h3>

              <form onSubmit={handleBidSubmite}>
                <fieldset className="fieldset">
                  {/* // your name */}
                  <label className="label">Your name</label>
                  <input
                    type="text"
                    className="input"
                    defaultValue={user?.displayName || ""}
                    readOnly
                    name="name"
                    required
                  />
                  {/* // your email */}
                  <label className="label">Your email</label>
                  <input
                    type="email"
                    className="input"
                    defaultValue={user?.email || ""}
                    readOnly
                    name="email"
                    required
                  />
                  {/* // your bid amount */}
                  <label className="label">Your bid</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="Your bid"
                    name="bid"
                    required
                  />
                  <button className="btn btn-neutral mt-4">
                    Please your bid
                  </button>
                </fieldset>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* product bids id */}
      <div className="p-10">
        <h1 className="text-4xl font-bold">
          Bids For This Products:{" "}
          <span className="text-primary">{bids.length}</span>
        </h1>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, index) => (
                <tr>
                  <th>{ index +1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {bid.buyer_email}
                  </td>
                  <td>{bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
