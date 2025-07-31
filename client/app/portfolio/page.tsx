import MenuBar from "../_components/sidebar"

function Portfolio(){
    return(
      <div>
        <div className="flex h-screen w-full">
          <MenuBar/>
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-semibold">Portfolio Sahifasi</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Yon paneldagi menyular orqali navigatsiya qiling.
            </p>
          </main>
        </div>
        <footer className="mt-16 text-gray-400 w-[170%] ml-[-5%] bottom-0 border-t-1 pt-2">
          <div className="flex items-center justify-center gap-2">
            <img src="/favicon.ico" alt="logo" className="h-6" />
            <p className="flex justify-center gap-20">
              <div>
              Yoldoshev<span className="text-blue-400">Coder</span> © 2025
              </div>
              <div>
                Version <span className="text-blue-400 font-semibold">1.0.0</span>
              </div>
            </p>
          </div>
        </footer>
      </div>
    )
}

export default Portfolio