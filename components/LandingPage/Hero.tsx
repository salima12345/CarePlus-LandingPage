"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function HeroSection() {
  const description = "Dedicated to delivering comprehensive healthcare services with a focus on quality, compassion, and innovation. Offering a wide range of medical services designed to meet the needs of a diverse community, ensuring that every patient receives the best possible care.";

  const getRandomPosition = () => {
    const randomRight = Math.floor(Math.random() * 20);
    return { right: `${randomRight}%` };
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-32"></div>

      <div className="relative flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="relative z-10 w-full py-8 md:max-w-[750px]">
          <h3 className="text-xl md:text-2xl lg:text-2xl font-medium leading-[120%] text-green-200">Certificated Doctors</h3>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[120%] mt-5">Providing an Integrated Healthcare Solution</h1>
          <p className="text-gray-600 max-w-[500px] mt-5">{description}</p>

          <Link href="#Services">
                <Button className="mt-10">Discover our services</Button>
            </Link>
          <div className="grid grid-cols-2 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '30+', label: 'Doctors' },
              { value: '5+', label: 'Years of Experience' },
              { value: '100+', label: 'Satisfied Patients' },
              { value: '100+', label: 'Facilities' }
            ].map(({ value, label }, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="text-3xl font-bold text-black mb-1">{value}</h2>
                <p className="text-gray-600 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-11/12 md:w-1/2 aspect-[1.5] mx-auto md:mx-0">
          <div
            className="absolute top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-50px]"
            style={{ ...getRandomPosition(), zIndex: 0 }}
          >
            <Image
              src="/assets/gifs/hero.gif"
              layout="fixed"
              width={200}
              height={200}
              alt="Hero GIF"
            />
          </div>

          <Image
            src="/assets/images/doctor-team.png"
            layout="intrinsic"
            objectFit="contain"
            alt="hero"
            width={1000}
            height={1000}
            priority
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
}