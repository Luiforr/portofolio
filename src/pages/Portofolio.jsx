import React from "react";
import { Text, Avatar, Box, Stack } from "@chakra-ui/react";
import {Card,CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import Head from "../components/Head";
export default function Portofolio() {
 
  return (
    <>
     
        <div className="bg-red-800 flex ">
          <div className="flex justify-between mx-auto gap-8">
            <section>
              <Image src="./hutao.png" className=" mt-5 mb-5 ml-10 size-32" />
            </section>
            <section className="justifiy-end">
              <Text className=" text-2xl mt-4 font-bold">Rizky Rofiul Mutaqin</Text>
              <Text className=" text-sm font-serif ">
                Seorang player PUBGM
              </Text>
            </section>
          </div>
        </div>
     

      <h1 className=" text-red-800 text-center text-2xl font-bold my-5">
        ABOUT ME
      </h1>

      <p className="   text-sm text-center">
        Saya adalah player PUBGM sejak season 3. macth yang sudah saya mainkan
        terdapat sekitar 3000 lebih. saya adalah pengguna senjata M4 dan UMP,
        saya merupakan pemain jarak menengah
      </p>
      <div className="">
        <h1 className=" text-red-800 text-center text-2xl font-bold mt-5 ">
          Skill In Game
        </h1>
        {/* <div className="flex justify-center items-center content-center my-4">
          <div className="flex flex-cols-6 gap-6 mb-5  ">
            <Card className="max-w-[300px]">
              <CardHeader className="flex-col items-start text-center">
                <small className="text-default-500">pernah belajar di</small>
                <h4 className="font-bold text-large">SMP Itikurih </h4>
              </CardHeader>
              <CardBody className="overflow-visible ">
                <Image
                  className="object-cover rounded-xl mx-auto"
                  src="./download (1).jpg"
                  width={120}
                />
              </CardBody>
            </Card>
            <Card className="max-w-[350px]">
              <CardHeader className="flex-col text-center ">
                <small className="text-default-500">sedang belajar di</small>
                <h4 className="font-bold text-lg">SMKN 7 BE</h4>
              </CardHeader>
              <CardBody className="overflow-visible">
                <Image
                  className="object-cover rounded-xl mx-auto"
                  src="./smk.png"
                  width={120}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      
      */}

        <div className="gap-1 grid grid-cols-2 sm:grid-cols-3">
          <div className="bg-gray-300 border-small mx-1 w-auto    py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Granade rate 50%</h1>
          </div>{" "}
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Headshot Rate 25%</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Scope x3</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Scope x4</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Scope x6</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Scope x8</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Fast jigle</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Asault Rifle</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>SMG</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Sniper</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Buggy man</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Watch tower</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Scout</h1>
          </div>
          <div className="bg-gray-300 border-small mx-1 w-auto  py-4 sm:py-2 text-center my-1 rounded-sm shadow-sm">
            <h1>Fragger</h1>
          </div>
        </div>
      </div>
      <h1 className=" text-red-800 text-center text-2xl font-bold mt-5 mb-5">
        Portofolio
      </h1>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 mx-1">
        
        <Card className="py-4  rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    
        <h4 className="font-bold text-large cursor-pointer"><a href="biodata">Biodata</a></h4>
        <small className="text-default-300">2023-2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/kingyuan.jpg"
          width={270}
        />
      </CardBody>
    </Card>
    <Card className="py-4 rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
     
        <h4 className="font-bold text-large cursor-pointer"><a href="history">History</a></h4>
        <small className="text-default-300">2023-2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/kingyuan.jpg"
          width={270}
        />
      </CardBody>
    </Card>  <Card className="py-4 rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
   
        <h4 className="font-bold text-large cursor-pointer"><a href="kda">KDA</a></h4>
        <small className="text-default-300">2023-2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/kingyuan.jpg"
          width={270}
        />
      </CardBody>
    </Card>  <Card className="py-4 rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
     
        <h4 className="font-bold text-large cursor-pointer"><a href="/portofolio">Gameplay</a></h4>
        <small className="text-default-300">2023-2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/kingyuan.jpg"
          width={270}
        />

      </CardBody>
    </Card>
      </div>
<p className="text-center text-gray-500 mt-4">Wuatauw pernah berkata jangan pernah meremehkan King Yuan walaupun damage nya kalah dibanding dps lain tetapi raja yang sebenarnya tetaplah King Yuan</p>
      {/* <h1 className=" text-red-800 text-center text-2xl font-bold mt-5 ">
            Pendidikan
          </h1>
      <div className="flex justify-center items-center content-center my-4">
        <div className="flex flex-cols-6 gap-6   ">
          <Card className="max-w-[300px]">
            <CardHeader className="flex-col items-start text-center">
              <small className="text-default-500">pernah belajar di</small>
              <h4 className="font-bold text-large">SMP Itikurih </h4>
            </CardHeader>
            <CardBody className="overflow-visible ">
              <Image
                className="object-cover rounded-xl mx-auto"
                src="./download (1).jpg"
                width={120}
              />
            </CardBody>
          </Card>
          <Card className="max-w-[300px]">
            <CardHeader className="flex-col text-center ">
              <small className="text-default-500">sedang belajar di</small>
              <h4 className="font-bold text-lg">SMKN 7 BE</h4>
            </CardHeader>
            <CardBody className="overflow-visible">
              <Image
                className="object-cover rounded-xl mx-auto"
                src="./smk.png"
                width={100}
              />
            </CardBody>
          </Card>
        </div>
      </div> */}
    </>
  );
}
