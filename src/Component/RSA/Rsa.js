import { useState } from "react";
import bigInt from "big-integer";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Grid,
  GridItem,
  Textarea,
  Image,
  useToast,
  useClipboard,
} from "@chakra-ui/react";
import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";
function Rsa() {
  const [cText, setCtext] = useState("");
  const [decryptText, setDecryptTexttext] = useState("");
  const [publicText, setPublictext] = useState("");
  const [privateText, setPrivatetext] = useState("");
  const [mTextInput, setMTextInput] = useState("");
  const [mDTextInput, setMDTextInput] = useState("");
  const [keyEncryptText, setkeyEncryptText] = useState("");
  const [keyDecryptText, setkeyDecryptText] = useState("");
  const { hasCopied: hasPublic, onCopy: onPublicCopy } =
    useClipboard(publicText);
  const { hasCopied: hasPrivate, onCopy: onPrivateCopy } =
    useClipboard(privateText);
  const { hasCopied: hasEncrypt, onCopy: onEncryptCopy } = useClipboard(cText);
  const toast = useToast();

  function onDecryptClick(plainText = "") {
    let pubText = atob(keyDecryptText).split(",");
    let d = bigInt(pubText[0]);
    let n = bigInt(pubText[1]);
    let c = atob(plainText);
    let m = bigInt(c).modPow(d, n).toString();
    let asciiText = "";
    let arr = [];
    for (let i = 0; i <= m.length; i++) {
      if (+asciiText >= 32) {
        arr.push(String.fromCharCode(+asciiText));
        asciiText = m[i];
      } else {
        asciiText += m[i];
      }
    }
    setDecryptTexttext(arr.join(""));
  }

  function onEnCrpytClick(planText = "") {
    let pubText = atob(keyEncryptText).split(",");
    let e = bigInt(pubText[0]);
    let n = bigInt(pubText[1]);
    let mtext = [];
    for (let index = 0; index < planText.length; index++) {
      let asciiText = planText.charCodeAt(index);
      mtext.push(asciiText);
    }
    let m = bigInt(mtext.join(""));
    setCtext(btoa(bigInt(m).modPow(e, n).toString()));
  }

  function onGenerateClick() {
    let p = rndPrimeNumber("P");
    let q = rndPrimeNumber("Q", p);
    let n = bigInt(p).multiply(q);
    let phiN = bigInt(bigInt(p).minus(1)).multiply(bigInt(q).minus(1));
    let e = rndPrimeNumber("E");

    if (e < phiN && +bigInt.gcd(e, phiN) === 1) {
      let d = bigInt(e).modInv(phiN);
      setPublictext(btoa([e, n]));
      setPrivatetext(btoa([d, n]));
    } else {
      return onGenerateClick();
    }
  }

  function rndPrimeNumber(type = "", p = 0) {
    const min = bigInt.one.shiftLeft(512 - 1);
    const max = bigInt.one.shiftLeft(512).prev();
    while (true) {
      let number = bigInt.randBetween(min, max);
      if (number.isProbablePrime(256)) {
        if (type === "P") {
          return number;
        } else if (type === "Q") {
          if (number !== p && Math.abs(p - number) !== 1) {
            return number;
          } else {
            return rndPrimeNumber("Q");
          }
        } else if (type === "E") {
          return number;
        }
      } else {
        return rndPrimeNumber(type);
      }
    }
  }

  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"5"}
    >
      <Grid
        h="100%"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(6, 1fr)" }}
        gridGap={5}
      >
        <GridItem
          className={"PKeys"}
          colSpan={2}
          bg="gray.700"
          w="100%"
          p={4}
          color="white"
          borderRadius="lg"
          overflow="hidden"
          display="block"
          boxShadow="2xl"
        >
          <Text m={1} fontSize={"2xl"}>
            Public Key
            <Button ml={1} p={1} onClick={onPublicCopy} colorScheme={"teal"}>
              {hasPublic ? <CheckCircleIcon /> : <CopyIcon />}
            </Button>
          </Text>
          <Textarea
            h={{ base: 50, md: 225 }}
            w={'100%'}
            resize={"none"}
            focusBorderColor={"green.300"}
            bg={"gray.900"}
            type="text"
            fontSize={"sm"}
            isDisabled
            placeholder={"Public Key.."}
            value={publicText}
          ></Textarea>
          <Text m={1} fontSize={"2xl"}>
            Private Key
            <Button ml={1} p={1} onClick={onPrivateCopy} colorScheme={"teal"}>
              {hasPrivate ? <CheckCircleIcon /> : <CopyIcon />}
            </Button>
          </Text>

          <Textarea
            h={{ base: 50, md: 225 }}
            w={'100%'}
            resize={"none"}
            focusBorderColor={"green.300"}
            bg={"gray.900"}
            type="text"
            fontSize={"sm"}
            isDisabled
            placeholder={"Private Key.."}
            value={privateText}
          ></Textarea>
          <Button
            mt={2}
            w={"100%"}
            bg={"green.300"}
            _hover={{ bg: "green.400" }}
            onClick={() => {
              onGenerateClick();
            }}
          >
            Generate Key
          </Button>
        </GridItem>
        <GridItem
          className={"Encryption"}
          colSpan={2}
          bg="gray.700"
          w="100%"
          p={5}
          color="white"
          borderRadius="lg"
          overflow="hidden"
          display="block"
          boxShadow="2xl"
        >
          <Text fontSize={"2xl"} color={"green.300"}>
            Plain Text
          </Text>
          <Stack name="inputHolder" spacing={2} direction={"column"}>
            <Textarea
              h={{ base: "16px", md: "100px" }}
              resize={"none"}
              focusBorderColor={"green.300"}
              bg={"gray.900"}
              type="text"
              fontSize={"xl"}
              placeholder={"Input a plain text.."}
              value={mTextInput}
              onInput={(event) => setMTextInput(event.target.value)}
            />
            <Text fontSize={"2xl"}>Public/Private Key</Text>
            <Textarea
              h={{ base: "16px", md: "150px" }}
              resize={"none"}
              focusBorderColor="green.300"
              bg={"gray.900"}
              type="number"
              fontSize={"xl"}
              placeholder="Input a key.."
              value={keyEncryptText}
              onInput={(event) => setkeyEncryptText(event.target.value)}
            />
            <Button
              bgColor={'red.500'}
              _hover={{bg: 'red.300'}}
              onClick={() => {
                onEnCrpytClick(mTextInput);
              }}
            >
              Encrypt
            </Button>
            <Text fontSize={"2xl"}>
              Cipher Text
              <Button ml={1} p={1} onClick={onEncryptCopy} colorScheme={"teal"}>
                {hasEncrypt ? <CheckCircleIcon /> : <CopyIcon />}
              </Button>
            </Text>
            <Textarea
              h={{ base: "16px", md: "150px" }}
              resize={"none"}
              focusBorderColor="green.300"
              bg={"gray.900"}
              type="number"
              fontSize={"xl"}
              readOnly
              value={cText}
            />
          </Stack>
        </GridItem>
        <GridItem
          className={"Decryption"}
          colSpan={2}
          bg="gray.700"
          w="100%"
          p={5}
          color="white"
          borderRadius="lg"
          overflow="hidden"
          display="block"
          boxShadow="2xl"
        >
          <Text fontSize={"2xl"} color={"green.300"}>
            Cipher Text
          </Text>
          <Stack name="inputHolder" spacing={2} direction={"column"}>
            <Textarea
              h={{ base: "16px", md: "100px" }}
              resize={"none"}
              focusBorderColor={"green.300"}
              bg={"gray.900"}
              type="text"
              fontSize={"xl"}
              placeholder={"Input a plain text.."}
              value={mDTextInput}
              onInput={(event) => setMDTextInput(event.target.value)}
            />
            <Text fontSize={"2xl"}>Public/Private Key</Text>
            <Textarea
              h={{ base: "16px", md: "150px" }}
              resize={"none"}
              focusBorderColor="green.300"
              bg={"gray.900"}
              type="number"
              fontSize={"xl"}
              placeholder="Input a key.."
              value={keyDecryptText}
              onInput={(event) => setkeyDecryptText(event.target.value)}
            />
            <Button
              bgColor={'blue.500'}
              _hover={{bg: 'blue.300'}}
              onClick={() => {
                onDecryptClick(mDTextInput);
              }}
            >
              Decrypt
            </Button>
            <Text fontSize={"2xl"}>Result</Text>
            <Textarea
              h={{ base: "16px", md: "150px" }}
              resize={"none"}
              focusBorderColor="green.300"
              bg={"gray.900"}
              type="number"
              fontSize={"xl"}
              readOnly
              value={decryptText}
            />
          </Stack>
        </GridItem>
      </Grid>
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

export default Rsa;
