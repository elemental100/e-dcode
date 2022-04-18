import { Box, Flex, Badge, Grid, GridItem, Image } from '@chakra-ui/react';
import img01 from '../../img01.png'
import img02 from '../../img02.png'
import img03 from '../../img03.png'
import img04 from '../../img04.png'
function Home() {

  return (
    <Box>

      <Flex justifyContent={'center'} className="Holder" bgColor={'gray.600'} m={5} borderRadius={5} mawW={'100%'}>
        <Grid templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={5} p={5}>
          <GridItem className="pic1" rowSpan={1} colSpan={1} p={1} bgColor={'white'} minW='xs' maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={img01} alt={'รูปที่ 1'} borderRadius='lg' />
            <Box p='5'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  ขั้นตอนที่ 1
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  เลือกรูปแบบ
                </Box>
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >
                เลือกชนิดของการเข้ารหัส
              </Box>
            </Box>
          </GridItem>
          <GridItem className="pic2" rowSpan={1} colSpan={1} p={1} bgColor={'white'} minW='xs' maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={img02} alt={'รูปที่ 2'} borderRadius='lg' />
            <Box p='5'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  ขั้นตอนที่ 2
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  ทำตามใจ
                </Box>
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >
                เลือกเมนูที่ต้องการ
              </Box>
            </Box>
          </GridItem>
          <GridItem className="pic3" rowSpan={2} colSpan={1} p={1} bgColor={'white'} minW='xs' maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={img03} alt={'รูปที่ 3'} borderRadius='lg' />
            <Box p='5'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  ขั้นตอนที่ 3
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  กรอกข้อมูล
                </Box>
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
              >
                ระบุข้อความที่ต้องการเข้ากับจำนวนที่ต้องการ Shift และกดปุ่มเข้ารหัส
              </Box>
            </Box>
          </GridItem>
          <GridItem className="pic4" rowSpan={2} colSpan={1} p={1} bgColor={'white'} minW='xs' maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={img04} alt={'รูปที่ 4'} borderRadius='lg' />
            <Box p='5'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  ขั้นตอนที่ 4
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  สำเร็จ
                </Box>
              </Box>
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
              >
                ข้อความที่ผ่านการเข้ารหัสจะแสดงขึ้นที่กล่องสีเขียว
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Box>


  );
}
export default Home;