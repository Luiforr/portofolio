import React from "react";
import { Text, Avatar, Box, Stack } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import Head from "../components/Head";
export default function Porto() {
  return (
    <>
      <h1 className="text-center font-bold text-2xl mt-3">Gameplay</h1>
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mx-1 mt-6">
        <Card className="py-4 bg-red-800 rounded-md">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large cursor-pointer ml-3">Mid Range</h4>
            <small className="text-default-300 ml-3">2024</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 grid justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5Cd18TJ1JK0?si=b0iu_UnQp5Mxe4x8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </CardBody>
        </Card>
        <Card className="py-4 bg-red-800 rounded-md">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large cursor-pointer ml-3">Long Range</h4>
            <small className="text-default-300 ml-3">2024</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 grid justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YGwVR65rxWc?si=BDMjzeccjKu8VU4T"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </CardBody>
        </Card>
        <Card className="py-4 bg-red-800 rounded-md">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large cursor-pointer ml-3">Close Combat</h4>
            <small className="text-default-300 ml-3">2023</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 grid justify-center">
            <iframe
              width="560"
              height="315"
              src="https:///www.youtube.com/embed/hUlGQh5EnKs?si=yC9EXvciV_Uvy-wf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </CardBody>
        </Card>
        <Card className="py-4 bg-red-800 rounded-md">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large cursor-pointer ml-3">Granade Master</h4>
            <small className="text-default-300 ml-3">2023-2024</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 grid justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IHo5iugtF1I?si=tS4j2y7rpM_laJEh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
