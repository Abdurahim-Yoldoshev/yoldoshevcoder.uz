import { Bot, Code2, Cog, Cpu, Laptop2, Server, User2 } from "lucide-react";
import MenuBar from "./_components/sidebar";
import { FaTelegramPlane, FaGithub, FaJs, FaJsSquare } from "react-icons/fa";

function Home() {
  return (
    <div className="w-full">
      <div className="min-h-screen bg-[#242830] text-white flex flex-col items-center p-6 md:ml-[10%]">
        {/* Logo & Header */}
        <MenuBar/>
        <div className="text-center mt-[-6%]  flex flex-col md:flex-row items-center top-0 h-[50vh]" id="home">
          <div className="p-6 rounded-xl mt-[-20px]">
            <img src="/favicon.ico" alt="Logo" className="w-40 h-40" />
          </div>
          <div className="md:ml-10 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold">
              Yoldoshev<span className="text-blue-500">Coder</span>
            </h1>
            <p className="text-gray-300 mt-2 w-90">
              Assalomu alaykum! Men <span className="text-blue-500 font-semibold">Yo'ldoshev Abdurahim</span> innovatsion veb-ilovalarni yaratuvchi dasturiy ta'minot muhandisiman. 
            </p>
            <div className="flex gap-3 justify-center mt-5">
                <a href="https://github.com/Abdurahim-Yoldoshev/Resume-CV/blob/main/Yodoshev_Abdurahim_CV.pdf" target="_blank" className="dark:text-white bg-blue-500 p-1.5 rounded-[5px] hover:bg-blue-700 font-semibold">Resume CV</a>
                <a href="" className="dark:text-white bg-blue-500 justify-center w-9 rounded-[5px] hover:bg-blue-600 font-semibold flex items-center"><FaTelegramPlane /></a>
                <a href="https://github.com/Abdurahim-Yoldoshev" className="dark:text-white bg-blue-500 justify-center w-9 rounded-[5px] hover:bg-blue-600 font-semibold flex items-center"><FaGithub/></a>
            </div>
          </div>
        </div>

        {/* Cards */}
        <h2 id="data" className="scroll-m-20 border-b pb-2 text-3xl font-semibold ml-[-40%] sm:ml-[-78%] text-blue-500">
          Men haqimda
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-4xl">
          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="font-bold mb-2 flex gap-2"><Code2/>Mutaxasisligim</h2>
            <p className="text-gray-300">
              Salom! Men <span className="text-blue-500 font-semibold">Yoldoshev Abdurahim</span> ! front-end va back-end texnologiyalarida chuqur bilimga ega bo'lgan Full-stack dasturchiman.
            </p>
          </div>
          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="text-blue-400 font-bold mb-2 flex gap-2"><Laptop2/>Asosiy e'tiborim</h2>
            <p className="text-gray-300">
              Men murakkab muammolarni texnologiya yordamida hal qilishni va doimiy ravishda yangi bilimlarni o'rganishni yaxshi ko'raman.
            </p>
          </div>

          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="text-blue-400 font-bold mb-2 flex gap-2"><User2/> Eng muhimlari</h2>
            <p className="text-gray-300">
              Dasturlash tillaridan <span className="font-semibold text-yellow-400">JavaScript</span> va <span className="font-semibold text-yellow-300">Python</span>ni yaxshi bilaman. <span className="font-semibold text-purple-500">Vite</span>, <span className="font-semibold text-green-400">Node.js</span>  (Express.js), shuningdek, botlar yaratishda tajribam bor.
            </p>
          </div>

          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="text-green-400 font-bold mb-2 flex gap-2"><Cpu/> Maqsadim</h2>
            <p className="text-gray-300">
              Men doimiy ravishda o'z bilimlarimni oshirishga intilaman va kelajakda yanada keng ko'lamli, innovatsion loyihalarda ishtirok etishni maqsad qilganman.
            </p>
          </div>
        </div>
        <h2 id="skils" className="scroll-m-20 border-b pb-2 text-3xl font-semibold ml-[-50%] sm:ml-[-80%] text-blue-500 mt-20">
          Qobiliyatlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 w-full max-w-4xl">
          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="text-yellow-400 font-bold mb-2 flex gap-2"><Cog/>Vite</h2>
            <p className="text-gray-300">
              Vite — bu zamonaviy JavaScript loyihalari uchun mo'ljallangan tezkor build.
            </p>
          </div>
          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="text-blue-400 font-bold mb-2 gap-2 flex"><Server/> Backend dasturlash</h2>
            <p className="text-gray-300">
              Ma'lumotlar bazasi, API va server logistikasi.
            </p>
          </div>

          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="text-blue-400 font-bold mb-2 flex gap-2"><Bot/> Botlar yaratish</h2>
            <p className="text-gray-300">
              Telegram va Discord botlari, JavaScript asosida.
            </p>
          </div>

          <div className="p-5 bg-[#2b2f38] rounded-xl border border-blue-500">
            <h2 className="text-yellow-400 font-bold mb-2 flex gap-2"><FaJsSquare/> JavaScript (JS)</h2>
            <p className="text-gray-300">
              Web sahifalarni dinamik qilish va frontend rivojlantirish uchun
              asosiy dasturlash tili.
            </p>
          </div>
        </div>
      </div>
        {/* Footer */}
        <footer className="mt-16 text-gray-400 w-[118.5%] ml-[-5%] bottom-0 border-t-1 pt-2">
          <div className="flex items-center justify-center gap-1">
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
  );
}

export default Home;  