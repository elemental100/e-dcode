import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tooltip,
  Textarea,
  Image,
  useToast,
  useClipboard,
} from "@chakra-ui/react";
import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";
import shiftCipher from "./ShiftFunction";

function ShipCipher() {
  const [resultText, setResultText] = useState("");
  const [plainTextInput, setPlaintext] = useState("");
  const [keyTextInput, setKeyInput] = useState(0);
  const { hasCopied, onCopy } = useClipboard(resultText);
  const toast = useToast();
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"5"}
    >
      <Stack
        gap={"1"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="start"
      >
        <Box
          className="leftPanel"
          maxW={"md"}
          minH={"sm"}
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
            Caesar Cipher
          </Text>
          <Box>
            <Text fontSize={"2xl"}>Plain Text/ Cipher Text</Text>
            <Stack name="inputHolder" spacing={2} direction={"column"}>
              <Textarea
                h={{ base: "16px", md: "150px" }}
                resize={"none"}
                focusBorderColor={"green.300"}
                bg={"gray.900"}
                type="text"
                fontSize={"xl"}
                placeholder={"Input a plain text.."}
                value={plainTextInput}
                onInput={(event) => setPlaintext(event.target.value)}
              />
              <Text fontSize={"2xl"}>KEY</Text>
              <Input
                focusBorderColor="green.300"
                bg={"gray.900"}
                type="number"
                fontSize={"xl"}
                placeholder="Input a key.."
                value={keyTextInput}
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
                disabled={!plainTextInput}
                onClick={() => {
                  toast.closeAll();
                  if (keyTextInput == 0 || !keyTextInput) {
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else {
                    setResultText(
                      shiftCipher(plainTextInput, keyTextInput, "encrypt")
                    );
                  }
                }}
              >
                Encrypt
              </Button>
              <Button
                colorScheme="pink"
                disabled={!plainTextInput}
                onClick={() => {
                  if (keyTextInput == 0 || !keyTextInput) {
                    toast.closeAll();
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else {
                    setResultText(
                      shiftCipher(plainTextInput, keyTextInput, "decrypt")
                    );
                  }
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
                  value={resultText}
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
            การเข้ารหัสแบบซีซาร์
          </Text>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/400px-Caesar3.svg.png"
              }
              alt={"Caesar Shift Cipher"}
            />
          </Box>
          <Box
            p="2"
            fontWeight="light"
            fontSize={"2xl"}
            as="h1"
            lineHeight="tight"
          >
            รหัสซีซาร์ (อังกฤษ: Caesar cipher) ในทางด้านวิทยาการเข้ารหัสลับ
            หรือเป็นที่รู้จักกันในชื่ออื่นว่า shift cipher Caesar's code หรือ
            Caesar shift เป็นเทคนิคการเข้ารหัสที่ง่ายและแพร่หลายที่สุด
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
export default ShipCipher;
