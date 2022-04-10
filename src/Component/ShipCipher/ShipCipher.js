import { useState } from "react";
import { Box, Flex, Text, Button, Input, Stack, Image, useToast } from '@chakra-ui/react';
function ShipCipher() {
  const [resultText, setResultText] = useState("");
  const [plainTextInput, setPlaintext] = useState("");
  const [keyTextInput, setKeyInput] = useState(0);
  const toast = useToast()
  var caesarShift = function (plainText = "", shift = 0, typeValue = "") {
    let text = plainText.replace(/\s+/g, '');
    let key = parseInt(shift);
    if (key < 0) {
      return caesarShift(text, key + 26);
    }
    // สร้างตัวแปร Output
    var output = "";
    // เข้าไปในทุก ๆ ตัวอักษร
    for (var i = 0; i < text.length; i++) {
      var c = text[i];
      // หากเป็นตัวหนังสือ
      if (c.match(/[a-z]/i)) {
        // ให้ระบุตำแหน่ง ascii ของตัวอักษร
        var code = text.charCodeAt(i);
        // ถ้าเป็นตัวพิมพ์ใหญ่
        if (typeValue === "encrypt") {
          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 + key) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + key) % 26) + 97);
          }
        } else {
          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 - key) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 - key) % 26) + 97);
          }
        }
      }
      // รวมคำตอบ
      output += c;
    }
    // ส่งค่าไปให้ตัวแปรที่กำหนด
    return setResultText(output);
  };

  return (
    <Flex justify={'center'} m={'2rem'}>
      <Stack direction='row' spacing={4} align='start'>
        <Box name='leftPanel' maxW={'md'} minH={'350px'} bg='gray.700' w='100%' p={5} color='white' borderRadius='lg' overflow='hidden'
          display='block' boxShadow='2xl'>
          <Text fontSize={'3xl'} textAlign={'center'} color={'green.300'} mb={'5'}>Caesar Cipher</Text>
          <Box>
            <Text>Plain Text</Text>
            <Stack name="inputHolder" spacing={2} direction={'column'}>
              <Input
                focusBorderColor="green.300"
                bg={'gray.900'}
                type="text"
                placeholder="Input a plain text.."
                value={plainTextInput}
                onInput={(event) => setPlaintext(event.target.value)}
              />
              <Text>KEY</Text>
              <Input
                focusBorderColor="green.300"
                bg={'gray.900'}
                type="number"
                placeholder="Input a key.."
                value={keyTextInput}
                onInput={(event) => setKeyInput(event.target.value)}
              />
            </Stack>
            <Stack name="buttonHolder" direction={'row'} spacing={4} mt={5} mb={5}>
              <Button colorScheme='green' onClick={() => {
                if (keyTextInput === 0) {
                  toast({
                    title: 'เกิดข้อผิดพลาด',
                    description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
                }
                caesarShift(plainTextInput, keyTextInput, "encrypt");
              }}
              >
                Encrypt
              </Button>
              <Button colorScheme='pink' onClick={() => {
                if (keyTextInput === 0) {
                  toast({
                    title: 'เกิดข้อผิดพลาด',
                    description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
                }
                caesarShift(plainTextInput, keyTextInput, "decrypt");
              }}
              >
                Decrypt
              </Button>
            </Stack>
            <Box>
              <Text>Result</Text>
              <Input isReadOnly={true} cursor={'default'} color={'white'} bg={'green.300'} value={resultText}></Input>
            </Box>
          </Box>
        </Box>
        <Box name='rightPanel' maxW={'md'} minH={'350px'} bg='gray.700' w='100%' p={5} color='white' borderRadius='lg' overflow='hidden'
          display='block' boxShadow='2xl'>
          <Text fontSize={'3xl'} textAlign={'center'} color={'green.300'} mb={'5'}>การเข้ารหัสแบบซีซาร์</Text>
          <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/400px-Caesar3.svg.png'} alt={'Caesar Shift Cipher'} />
          </Box>
          <Box
            p='2'
            fontWeight='light'
            as='h1'
            lineHeight='tight'
          >
            รหัสซีซาร์ (อังกฤษ: Caesar cipher) ในทางด้านวิทยาการเข้ารหัสลับ หรือเป็นที่รู้จักกันในชื่ออื่นว่า shift cipher Caesar's code หรือ Caesar shift เป็นเทคนิคการเข้ารหัสที่ง่ายและแพร่หลายที่สุด
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}
export default ShipCipher;