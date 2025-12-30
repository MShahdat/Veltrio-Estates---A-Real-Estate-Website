import React from 'react';

const stats = [
  { img: 'https://images.unsplash.com/photo-1695080188241-8f3224874d86?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', number: 1400, label: "Happy Clients" },
  { img: 'https://images.unsplash.com/photo-1717167398817-121e3c283dbb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', number: 4000, label: "Properties" },
  { img: 'https://images.unsplash.com/photo-1637542010084-3b4d4133ddfa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', number: 2420, label: "Agents" },
  { img: 'https://plus.unsplash.com/premium_photo-1663054510163-c19544ba7dfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', number: 30, label: "Award" },
];

const About2 = () => {
  return (
    <div
      className="w-full relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1745056197488-438b1931fa5d?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <div className="relative">
        <div className="text-white bg-[#97755A]/70 min-h-full">
          <div className="max-w-5xl px-4 py-16 mx-auto">
            <h3 className='text-center text-white tracking-wider font-bold text-3xl md:text-4xl uppercase'>Our Statistics</h3>
            <p className='text-[16px] tracking-wide mt-3 text-white mx-auto max-w-3xl text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas assumenda deserunt amet, rerum est blanditiis iure vel autem ipsa.</p>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center hover:scale-110 duration-500"
                >
                  <img
                    className="size-30 rounded-full object-cover"
                    src={stat.img}
                    alt={stat.label}
                  />
                  <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold">
                    {stat.number}+
                  </p>
                  <p className="text-lg font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About2;