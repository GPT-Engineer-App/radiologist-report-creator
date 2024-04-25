// Complete the Index page component for a local radiologist report creation tool
import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack, useToast, Image } from "@chakra-ui/react";
import { FaMicrophone, FaSave, FaFileAlt } from "react-icons/fa";

const Index = () => {
  const [report, setReport] = useState("");
  const toast = useToast();

  const handleVoiceInput = () => {
    // Simulating voice input
    setReport("Voice input simulated: Patient shows no signs of acute disease.");
    toast({
      title: "Voice Input",
      description: "Voice input simulated and added to the report.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSaveReport = () => {
    // Simulating saving report
    toast({
      title: "Report Saved",
      description: "The report has been successfully saved locally.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleTemplateLoad = () => {
    // Simulating template loading
    setReport("Template: [Patient Name] [Date] [Observations] [Conclusion]");
    toast({
      title: "Template Loaded",
      description: "A predefined template has been loaded into the report.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ2lzdCUyMGF0JTIwd29ya3xlbnwwfHx8fDE3MTQwODU5MDF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Heading as="h1" size="xl">
          Radiologist Report Tool
        </Heading>
        <Flex w="full" justify="space-between">
          <Button leftIcon={<FaMicrophone />} colorScheme="blue" onClick={handleVoiceInput}>
            Voice Input
          </Button>
          <Button leftIcon={<FaFileAlt />} colorScheme="teal" onClick={handleTemplateLoad}>
            Load Template
          </Button>
          <Button leftIcon={<FaSave />} colorScheme="green" onClick={handleSaveReport}>
            Save Report
          </Button>
        </Flex>
        <FormControl>
          <FormLabel htmlFor="report">Report</FormLabel>
          <Textarea id="report" placeholder="Type or use voice to input the report..." value={report} onChange={(e) => setReport(e.target.value)} size="lg" />
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Index;
