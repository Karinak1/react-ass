import srcImage from '../assets/vineyard-2.jpg';
import srcImage1 from '../assets/Mendoza-Argentina.jpg';
import srcImage2 from '../assets/Spain.jpg';
import srcImage3 from '../assets/Italy.jpg';
import srcImage4 from '../assets/Chile.webp';
import srcImage5 from '../assets/SItaly.jpg';
import srcImage6 from '../assets/Canada.jpg';
import srcImage7 from '../assets/France.jpg';
export default function Images() {
  return (
    <div className="images">
      <h2>Vineyards</h2>
      <img src={srcImage}></img>
      <img src={srcImage1}></img>
      <img src={srcImage2}></img>
      <img src={srcImage3}></img>
      <img src={srcImage4}></img>
      <img src={srcImage5}></img>
      <img src={srcImage6}></img>
      <img src={srcImage7}></img>
    </div>
  );
}
