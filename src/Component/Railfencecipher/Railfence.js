import { useState } from "react";
import { Box, Flex, Text, Button, Input, InputGroup, InputRightElement, Stack, Tooltip, Image, useToast, useClipboard } from '@chakra-ui/react';
import { CopyIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { mod } from 'mathjs';
function Railfence() {
    const [resultText, setResultText] = useState("");
    const [plainTextInput, setPlaintext] = useState("");
    const [keyTextInput, setKeyInput] = useState(0);
    const { hasCopied, onCopy } = useClipboard(resultText)
    const toast = useToast()
    var Encrypt = function (plaintext = "", key = 0) {
        let text = plaintext.toUpperCase();
        var ciphertext = "";
        if (key >= 2) {
            for (var line = 0; line < key - 1; line++) {
                var skip = 2 * (key - line - 1);
                var j = 0;
                // console.log(skip)
                for (var i = line; i < text.length;) {
                    // console.log(i);
                    ciphertext += text.charAt(i);
                    //  console.log(ciphertext);
                    if ((line === 0) || ((mod(j, 2)) === 0)) {
                        i += skip;
                        // console.log(i);
                    }
                    else i += 2 * (key - 1) - skip;
                    j++;
                }
            }
            for (i = line; i < text.length; i += 2 * (key - 1)) ciphertext += text.charAt(i);
            console.log(ciphertext);
            return setResultText(ciphertext);
        };

    };

    var Decrypt = function (ciphertext = "", key = 0) {
        var plaintext = "";
        var pt = new Array(ciphertext.length);
        var k = 0;
        if (key >= 2) {
            for (var line = 0; line < key - 1; line++) {
                var skip = 2 * (key - line - 1);
                var j = 0;
                for (var i = line; i < ciphertext.length;) {
                    pt[i] = ciphertext.charAt(k++);
                    console.log(pt);
                    if ((line === 0) || ((mod(j, 2)) === 0)) i += skip;
                    else i += 2 * (key - 1) - skip;
                    j++;
                }
            }
            for (i = line; i < ciphertext.length; i += 2 * (key - 1)) pt[i] = ciphertext.charAt(k++);
            plaintext = pt.join("");
            return setResultText(plaintext.toUpperCase());
        }
    };
    return (
        <Flex justify={'center'} m={'2rem'}>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align='start'>
                <Box className='leftPanel' maxW={'md'} minH={'350px'} bg='gray.700' w='100%' p={5} color='white' borderRadius='lg' overflow='hidden'
                    display='block' boxShadow='2xl'>
                    <Text fontSize={'3xl'} textAlign={'center'} color={'green.300'} mb={'5'}>Rail fence Cipher</Text>
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
                                if (keyTextInput === 0 || keyTextInput === "") {
                                    toast({
                                        title: 'เกิดข้อผิดพลาด',
                                        description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                                        status: 'error',
                                        duration: 2000,
                                        isClosable: true,
                                    })
                                }
                                else if (keyTextInput < 2) {
                                    toast({
                                        title: 'เกิดข้อผิดพลาด',
                                        description: "จำนวน key ต้องมีค่าตั้งแต่ 2 ขึ้นไป",
                                        status: 'error',
                                        duration: 2000,
                                        isClosable: true,
                                    })
                                }
                                Encrypt(plainTextInput, keyTextInput);
                            }}
                            >
                                Encrypt
                            </Button>
                            <Button colorScheme='pink' onClick={() => {
                                if (keyTextInput === 0 || keyTextInput === "") {
                                    toast({
                                        title: 'เกิดข้อผิดพลาด',
                                        description: "กรุณาระบุจำนวน Key ที่ต้องการเลื่อน",
                                        status: 'error',
                                        duration: 2000,
                                        isClosable: true,
                                    })
                                }
                                else if (keyTextInput < 2) {
                                    toast({
                                        title: 'เกิดข้อผิดพลาด',
                                        description: "จำนวน key ห้ามกว่า 2",
                                        status: 'error',
                                        duration: 2000,
                                        isClosable: true,
                                    })
                                }
                                Decrypt(plainTextInput, keyTextInput);
                            }}
                            >
                                Decrypt
                            </Button>
                        </Stack>
                        <Box>
                            <Text>Result</Text>
                            <InputGroup>
                                <Input isReadOnly={true} cursor={'default'} color={'white'} bg={'green.300'} value={resultText}></Input>
                                <InputRightElement onClick={onCopy} children={<Tooltip label={'Copy'} bgColor={'white'} color={'black'}>
                                    {hasCopied ? <CheckCircleIcon /> : <CopyIcon />}
                                </Tooltip>} />
                            </InputGroup>
                        </Box>
                    </Box>
                </Box>
                <Box name='rightPanel' maxW={'md'} minH={'350px'} bg='gray.700' w='100%' p={5} color='white' borderRadius='lg' overflow='hidden'
                    display='block' boxShadow='2xl'>
                    <Text fontSize={'3xl'} textAlign={'center'} color={'green.300'} mb={'5'}>การเข้ารหัสแบบซิกแซ็ก</Text>
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={'https://www.researchgate.net/profile/Sara-Farrag/publication/333480277/figure/fig5/AS:764200859234304@1559211091110/Encrypting-using-Rail-Fence-Cipher5.ppm'} alt={'Rail fence cipher'} />
                    </Box>
                    <Box
                        p='2'
                        fontWeight='light'
                        as='h1'
                        lineHeight='tight'
                    >
                        การเข้ารหัสด้วยวิธีการสับเปลี่ยนแบบเรลเฟ็นซ์ (Rail Fence Transposition Cipher) เป็นการเข้ารหัสอย่างง่าย โดยจะเข้ารหัสในลักษณะ Row by Row หรืออาจเรียกว่า วิธี ซิกแซ็ก (Zigzag) ก็ได้
                    </Box>
                </Box>
            </Stack>
        </Flex>
    );
}
export default Railfence;