import React from "react";
import { Text, Avatar, Box, Stack } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
export default function History() {
  return (
<>
<h1 className="text-center font-bold text-2xl mt-3">History</h1>
<div className="gap-4 grid grid-cols-1 sm:grid-cols-2 mx-1 mt-4">
        
        <Card className="py-4  rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    
        <h4 className="font-bold text-large cursor-pointer">C6S17</h4>
        <small className="text-default-300">2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-none"
          src="/history.jpg"
          width="full"
        />
      </CardBody>
    </Card>
    <Card className="py-4 rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
     
        <h4 className="font-bold text-large cursor-pointer">C6S16</h4>
        <small className="text-default-300">2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-none"
          src="/history1.jpg"
          width="full"
        />
      </CardBody>
    </Card>  <Card className="py-4 rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
   
        <h4 className="font-bold text-large cursor-pointer">C6S16</h4>
        <small className="text-default-300">2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-none"
          src="/history2.jpg"
          width="full"
        />
      </CardBody>
    </Card>  <Card className="py-4 rounded-md bg-red-800">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
     
        <h4 className="font-bold text-large cursor-pointer ">C6S16</h4>
        <small className="text-default-300">2024</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-none"
          src="/history3.jpg"
          width="full"
        />

      </CardBody>
    </Card>
      </div>
</>
  )
}
