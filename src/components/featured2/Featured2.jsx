import useFetch from "../../hooks/useFetch";
import "./featured2.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=mumbai,goa,varanasi"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait" 
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.savaari.com/blog/wp-content/uploads/2021/12/1024px-Mumbai_Aug_2018_43397784544-1024x761.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://s7d1.scene7.com/is/image/marriotts7prod/xr-goixr-beach-resort-24562:Classic-Hor?wid=1215&fit=constrain"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn1.tripoto.com/media/filter/tst/img/567364/Image/1546272756_vnasi.jpg.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Varanasi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
