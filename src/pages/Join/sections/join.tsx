import Joinbg from '../../../assets/Images/joinbg.png';


function join() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] md:bg-center"
        style={{ backgroundImage: `url(${Joinbg})` }}
      ></div>
    </div>
  );
}

export default join;
