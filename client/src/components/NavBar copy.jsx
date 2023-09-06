import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-neutral sticky top-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
      
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4 right-0 ">
               
                <Link to="/" 
                  className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
                  >Home</Link>

                   <Link to="/about" 
                  className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
                  >About</Link>

                   <Link to="/consultancy" 
                  className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
                  >Consultancy</Link>


                  <Link to="/contact" 
                  className="text-black hover:bg-pink-600 hover:text-white  px-3 py-2 text-sm font-medium"
                  >Contact</Link>
                  
              
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
