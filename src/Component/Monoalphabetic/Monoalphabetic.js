import { useState } from "react";
import { Box, Flex, Text, Button, Input, InputGroup, InputRightElement, Stack, Tooltip, Image, useToast, useClipboard } from '@chakra-ui/react';
import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { mod } from 'mathjs';
function Monoalphabetic() {
  const [cText, setCtext] = useState("");
  const [pTextInput, setPTextInput] = useState("");
  const [keytInput, setKeyInput] = useState(0);
  const { hasCopied, onCopy } = useClipboard(cText)
  const toast = useToast()
  let arr = [];

  function onEncodeClick(planText = "", keyText = 0) {
    let key = parseInt(keyText);
    let text = planText.replace(/\s+/g, "");
    for (let i = 0; i < text.length; i++) {
      let asciiText = text.toUpperCase().charCodeAt(i) - 65;
      let newT = ((asciiText + key) % 26) + 65;
      arr.push(String.fromCharCode(newT));
    }
    console.log(arr);
    return setCtext(arr.join(""));
  }

  function onDecodeClick(planText = "", keyText = 0) {
    let key = parseInt(keyText);
    let text = planText.replace(/\s+/g, "");
    for (let i = 0; i < text.length; i++) {
      let asciiText = text.toUpperCase().charCodeAt(i) - 65 - key;
      while (asciiText < 0) {
        asciiText += 26;
      }
      let newT = asciiText + 65;
      arr.push(String.fromCharCode(newT));
    }
    return setCtext(arr.join(""));
  }
  return (
    <Flex justify={'center'} m={'2rem'}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='start'>
        <Box className='leftPanel' maxW={'md'} minH={'350px'} bg='gray.700' w='100%' p={5} color='white' borderRadius='lg' overflow='hidden'
          display='block' boxShadow='2xl'>
          <Text fontSize={'3xl'} textAlign={'center'} color={'green.300'} mb={'5'}>Monoalphabetic substitution cipher</Text>
          <Box>
            <Text>Plain Text</Text>
            <Stack name="inputHolder" spacing={2} direction={'column'}>
              <Input
                focusBorderColor="green.300"
                bg={'gray.900'}
                type="text"
                placeholder="Input a plain text.."
                value={pTextInput}
                onInput={(event) => setPTextInput(event.target.value)}
              />
              <Text>KEY</Text>
              <Input
                focusBorderColor="green.300"
                bg={'gray.900'}
                type="number"
                placeholder="Input a key.."
                value={keytInput}
                onInput={(event) => setKeyInput(event.target.value)}
              />
            </Stack>
            <Stack name="buttonHolder" direction={'row'} spacing={4} mt={5} mb={5}>
              <Button colorScheme='green' onClick={() => {
                if (keytInput === 0 || keytInput === "") {
                  toast({
                    title: 'เกิดข้อผิดพลาด',
                    description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
                }
                onEncodeClick(pTextInput, keytInput);
              }}
              >
                Encrypt
              </Button>
              <Button colorScheme='pink' onClick={() => {
                if (keytInput === 0 || keytInput === "") {
                  toast({
                    title: 'เกิดข้อผิดพลาด',
                    description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
                }
                onDecodeClick(pTextInput, keytInput);
              }}
              >
                Decrypt
              </Button>
            </Stack>
            <Box>
              <Text>Result</Text>
              <InputGroup>
                <Input isReadOnly={true} cursor={'default'} color={'white'} bg={'green.300'} value={cText}></Input>
                <InputRightElement onClick={onCopy} children={<Tooltip label={'Copy'} bgColor={'white'} color={'black'}>
                  {hasCopied ? <CheckCircleIcon /> : <CopyIcon />}
                </Tooltip>} />
              </InputGroup>
            </Box>
          </Box>
        </Box>
        <Box name='rightPanel' maxW={'md'} minH={'350px'} bg='gray.700' w='100%' p={5} color='white' borderRadius='lg' overflow='hidden'
          display='block' boxShadow='2xl'>
          <Text fontSize={'3xl'} textAlign={'center'} color={'green.300'} mb={'5'}>การเข้ารหัสแบบสับเปลี่ยน</Text>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={'https://ctf101.org/cryptography/images/substitution-cipher.png'} alt={'Substitution cipher'} />
          </Box>
          <Box
            p='2'
            fontWeight='light'
            as='h1'
            lineHeight='tight'
          >
            Monoalphabetic substitution คือการแทนที่ตัวอักษร 1 ตัวด้วยตัวอักษรอีก 1 ตัว ซึ่งตัวอักษรแต่ละตัวใน ciphertext จะถูก decrypt ออกมาได้แค่ตัวอักษรชนิดเดียวเท่านั้น ตัวอย่างเช่น “a” decrypt เป็น “g” ได้ แต่ “a” decrypt เป็นทั้ง “g” และ “h” ไม่ได้ เวลาใช้งานก็จะต้องมี table ไว้คอย map ระหว่าง ciphertext และ plaintext
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Monoalphabetic;
