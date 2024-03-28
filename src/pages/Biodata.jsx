import React from "react";
import { Text, Box, Stack } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaInstagram, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function Biodata() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex justify-center mt-10 ">
        <Card className="w-96">
          <CardHeader>
            <h1 className="text-center font-bold text-xl mx-auto">
              Biodata Diri
            </h1>
          </CardHeader>
          <div className="card w-80  rounded-md h-24 mx-auto bg-gradient-to-r from-red-900 to-red-700 mb-8">
            <Avatar
              className="bg-red-800 w-24 h-24 ml-1 mx-auto mt-5"
              src="/me.jpg"
            />
          </div>
          <CardBody>
            <div className="text-sm  ml-6  ">
              <p className="text-sm ">Nama : Rizky Rofiul Mutaqin</p>
              <p>Jenis Kelamin : Laki-laki</p>
              <p>TTL : Bandung, 26,07,2007</p>
              <p>Alamat : Tanjunglaya</p>
              <p>Agama : Islam</p>
              <p>Kewarganegaraan : Indonesia </p>
              <p>Sekolah : SMKN 7 Baleendah</p>
            </div>
          </CardBody>
          <h1 className="text-lg font-bold ml-10 ">Contact Me</h1>
          <CardFooter>
            <div className="flex  gap-10 ml-8">
              <a href="https://www.instagram.com/rizky_luifor?igsh=MXB1NzQxeGt1Ym9vZA==">
                <FaInstagram size="1.5em" />
              </a>
              <FaPhoneAlt size="1.5em" onClick={onOpen} className="cursor-pointer"/>
              <a href="https://github.com/Luiforr">
                <FaGithub size="1.5em" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Hubungi Nomor di bawah ini
              </ModalHeader>
              <ModalBody>
                <p>+62 817 7545 9107</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
