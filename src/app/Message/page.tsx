import Header1 from '../components/Header1';
import Last from '../components/Footer';
export default function Home() {
  return (
    <div>
    <Header1 />
    
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      
      <div className="p-6 sm:p-10 md:p-20 lg:p-32 xl:p-44">
        <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold text-red-500 mb-6">
          Thank you, Visit us soon!!!
        </h1>
        <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold text-green-500 mb-6">
          Thank you, Visit us soon!!!
        </h1>
        <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold text-blue-500">
          Thank you, Visit us soon!!!
        </h1>
      </div>
      
    </div>
    <Last />
    </div>
  );
}
