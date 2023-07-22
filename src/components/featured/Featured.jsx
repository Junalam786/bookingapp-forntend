import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=hydrabad,delhi,kolkata"
  ); 

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.coxandkings.co.uk/-/media/cox-and-kings/images/page-header-images/destinations/indian-subcontinent/india/central-india/india-charminar-hyderabad-shutterstock1046605465.jpg?la=en&hash=5224667ABF86D0F7845F4AFF7D65A6A8D42C9E50"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>hydrabad </h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.travelandleisure.com/thmb/iAIrOVW7yWrDG8pZBpKMOvEGuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-delhi-india-NEWDELHITG0721-60d592e1603349298a0206d67d08582b.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1170106364/photo/b-b-d-bagh-kolkata.jpg?s=612x612&w=0&k=20&c=XQ3jFvSuDbUaMkxfoEMdoaILK4IyJDnkmbG7HAEfhiY="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
