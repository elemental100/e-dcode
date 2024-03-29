import { CheckCircleIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
  Tooltip,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { encrypt, decrypt } from "./MonoFunction";
function Monoalphabetic() {
  const [cText, setCtext] = useState("");
  const [pTextInput, setPTextInput] = useState("");
  const [keytInput, setKeyInput] = useState(0);
  const { hasCopied, onCopy } = useClipboard(cText);
  const toast = useToast();
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"5"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="start"
      >
        <Box
          className="leftPanel"
          maxW={"md"}
          minH={"350px"}
          bg="gray.700"
          w="100%"
          p={5}
          color="white"
          borderRadius="lg"
          overflow="hidden"
          display="block"
          boxShadow="2xl"
        >
          <Text
            fontSize={"3xl"}
            textAlign={"center"}
            color={"green.300"}
            mb={"5"}
          >
            Monoalphabetic substitution cipher
          </Text>
          <Box>
            <Text fontSize={"2xl"}>Plain Text/ Cipher Text</Text>
            <Stack name="inputHolder" spacing={2} direction={"column"}>
              <Textarea
                h={{ base: "16px", md: "150px" }}
                resize={"none"}
                focusBorderColor="green.300"
                bg={"gray.900"}
                type="text"
                fontSize={"xl"}
                placeholder="Input a plain text.."
                value={pTextInput}
                onInput={(event) => setPTextInput(event.target.value)}
              />
              <Text fontSize={"2xl"}>KEY</Text>
              <Input
                focusBorderColor="green.300"
                bg={"gray.900"}
                type="number"
                fontSize={"xl"}
                placeholder="Input a key.."
                value={keytInput}
                onInput={(event) => setKeyInput(event.target.value)}
              />
            </Stack>
            <Stack
              name="buttonHolder"
              direction={"row"}
              spacing={4}
              mt={5}
              mb={5}
            >
              <Button
                colorScheme="green"
                disabled={!pTextInput}
                onClick={() => {
                  if (keytInput === 0 || keytInput === "") {
                    toast.closeAll();
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                  setCtext(encrypt(pTextInput, keytInput));
                }}
              >
                Encrypt
              </Button>
              <Button
                colorScheme="pink"
                disabled={!pTextInput}
                onClick={() => {
                  if (keytInput === 0 || keytInput === "") {
                    toast.closeAll();
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                  setCtext(decrypt(pTextInput, keytInput));
                }}
              >
                Decrypt
              </Button>
            </Stack>
            <Box>
              <Text fontSize={"2xl"}>Result</Text>
              <InputGroup>
                <Textarea
                  h={{ base: "16px", md: "150px" }}
                  isReadOnly={true}
                  cursor={"default"}
                  color={"white"}
                  bg={"gray.900"}
                  value={cText}
                  fontSize={"xl"}
                ></Textarea>
                <InputRightElement
                  onClick={onCopy}
                  children={
                    <Tooltip label={"Copy"} bgColor={"white"} color={"black"}>
                      {hasCopied ? <CheckCircleIcon /> : <CopyIcon />}
                    </Tooltip>
                  }
                />
              </InputGroup>
            </Box>
          </Box>
        </Box>
        <Box
          name="rightPanel"
          maxW={"md"}
          minH={"350px"}
          bg="gray.700"
          w="100%"
          p={5}
          color="white"
          borderRadius="lg"
          overflow="hidden"
          display="block"
          boxShadow="2xl"
        >
          <Text
            fontSize={"3xl"}
            textAlign={"center"}
            color={"green.300"}
            mb={"5"}
          >
            การเข้ารหัสแบบสับเปลี่ยน
          </Text>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src={
                "https://ctf101.org/cryptography/images/substitution-cipher.png"
              }
              alt={"Substitution cipher"}
            />
          </Box>
          <Box
            p="2"
            fontWeight="light"
            fontSize={"2xl"}
            as="h1"
            lineHeight="tight"
          >
            Monoalphabetic substitution คือการแทนที่ตัวอักษร 1
            ตัวด้วยตัวอักษรอีก 1 ตัว ซึ่งตัวอักษรแต่ละตัวใน ciphertext จะถูก
            decrypt ออกมาได้แค่ตัวอักษรชนิดเดียวเท่านั้น ตัวอย่างเช่น “a”
            decrypt เป็น “g” ได้ แต่ “a” decrypt เป็นทั้ง “g” และ “h” ไม่ได้
            เวลาใช้งานก็จะต้องมี table ไว้คอย map ระหว่าง ciphertext และ
            plaintext
          </Box>
        </Box>
      </Stack>
      <Box pt={1}>
        <Image
          w={"100%"}
          h={{ base: 70, sm: 90, md: 120 }}
          src={"https://i.imgur.com/wQjsSEK.gif"}
        ></Image>
      </Box>
    </Flex>
  );
}

export default Monoalphabetic;
