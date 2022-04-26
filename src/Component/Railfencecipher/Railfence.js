import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Textarea,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Tooltip,
  Image,
  useToast,
  useClipboard,
} from "@chakra-ui/react";
import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { encrypt, decrypt } from "../../services/railfenceCiper.js";
function Railfence() {
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
            Rail fence Cipher
          </Text>
          <Box>
            <Text fontSize={"2xl"}>Plain Text</Text>
            <Stack name="inputHolder" spacing={2} direction={"column"}>
              <Textarea
                h={{ base: "16px", md: "150px" }}
                resize={"none"}
                focusBorderColor="green.300"
                bg={"gray.900"}
                type="text"
                fontSize={"xl"}
                placeholder="Input a plain text.."
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
                disabled={!keyTextInput}
                onClick={() => {
                  if (keyTextInput === 0 || keyTextInput === "") {
                    toast.closeAll();
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else if (keyTextInput < 2) {
                    toast.closeAll();
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "จำนวน key ต้องมีค่าตั้งแต่ 2 ขึ้นไป",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                  setResultText(encrypt(plainTextInput, keyTextInput));
                }}
              >
                Encrypt
              </Button>
              <Button
                colorScheme="pink"
                disabled={!keyTextInput}
                onClick={() => {
                  if (keyTextInput === 0 || keyTextInput === "") {
                    toast.closeAll();
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  } else if (keyTextInput < 2) {
                    toast.closeAll();
                    toast({
                      position: "top",
                      title: "เกิดข้อผิดพลาด",
                      description: "จำนวน key ต้องมีค่าตั้งแต่ 2 ขึ้นไป",
                      status: "error",
                      duration: 2000,
                      isClosable: true,
                    });
                  }
                  setResultText(decrypt(plainTextInput, keyTextInput));
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
            การเข้ารหัสแบบซิกแซ็ก
          </Text>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image
              src={
                "https://www.researchgate.net/profile/Sara-Farrag/publication/333480277/figure/fig5/AS:764200859234304@1559211091110/Encrypting-using-Rail-Fence-Cipher5.ppm"
              }
              alt={"Rail fence cipher"}
            />
          </Box>
          <Box
            p="2"
            fontWeight="light"
            fontSize={"2xl"}
            as="h1"
            lineHeight="tight"
          >
            การเข้ารหัสด้วยวิธีการสับเปลี่ยนแบบเรลเฟ็นซ์ (Rail Fence
            Transposition Cipher) เป็นการเข้ารหัสอย่างง่าย โดยจะเข้ารหัสในลักษณะ
            Row by Row หรืออาจเรียกว่า วิธี ซิกแซ็ก (Zigzag) ก็ได้
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
export default Railfence;
