import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import React from "react";
import {
  IInterViewSettings,
  IJobDetails,
  IRequisitionDetails,
} from "../../interface/forms";
import {
  genderOptions,
  interviewDurationOptions,
  interviewLanguageOptions,
  interviewModeOptions,
  urgencyOptions,
} from "./constants";
import { useData } from "./DataProvider";

const DataCard: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Box mt="1rem" bg="white" width="100%" p="16px 24px" borderRadius="10px">
      <Text fontSize="1rem" as="h6" fontWeight="600" mb="12px">
        {title}
      </Text>
      <Grid gap="16px" templateColumns="1fr 1fr">
        {children}
      </Grid>
    </Box>
  );
};

const KeyValue: React.FC<{
  title: string;
  value?: string;
}> = ({ title, value }) => {
  return (
    <Box w="100%">
      <Text fontSize=".875rem" color="gray" mb="8px">
        {title}
      </Text>
      <Text fontSize=".875rem" mb="8px">
        {value || "-"}
      </Text>
    </Box>
  );
};

const PreviewCard: React.FC<{
  requisitionDetails?: IRequisitionDetails;
  jobDetails?: IJobDetails;
  interviewSettings?: IInterViewSettings;
}> = ({ requisitionDetails, jobDetails, interviewSettings }) => {
  const data = useData();
  console.log("This is a preview card data");
  console.log(data);
  return (
    <Box p="1rem">
      <Box borderRadius="10px" bgColor="gray.100" height="fit-content">
        <Flex justifyContent="space-between">
          <Text fontWeight="bold" fontStyle="italic" m="0.4rem 2rem">
            Draft
          </Text>
          <Box
            bgColor="#EE5353"
            color="white"
            p="0.4rem 2rem"
            borderTopRightRadius="10px"
          >
            <Text fontStyle="italic">Preview</Text>
          </Box>
        </Flex>
        <Box w="100%" p="16px 24px">
          <Box
            width="100%"
            bgColor="#432B7D"
            color="white"
            p="1rem"
            borderRadius="10px"
          >
            <Flex
              fontFamily="Poppins"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontSize="0.9rem" fontWeight="500">
                {data?.state?.requisitionDetails?.requisitionTitle}
              </Text>
              <Flex justifyContent="space-around" alignItems="center">
                <Text fontSize="0.8rem" mr="0.4rem" fontWeight="200" as="p">
                  OPENINGS
                </Text>
                <Text fontSize="1rem" fontWeight="bold" as="span">
                  {data?.state?.requisitionDetails?.noOfOpenings}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box maxH="50rem" overflowY="auto" px="24px" pb="24px">
          <DataCard title="Requisition Details">
            <KeyValue
              title="Urgency"
              value={
                urgencyOptions.find(
                  (item) =>
                    item?.value === data?.state?.requisitionDetails?.urgency
                )?.label
              }
            />
            <KeyValue
              title="Gender"
              value={
                genderOptions.find(
                  (item) =>
                    item?.value === data?.state?.requisitionDetails?.gender
                )?.label
              }
            />
          </DataCard>
          <DataCard title="Job Detail">
            <KeyValue
              title="Job Title"
              value={data?.state?.jobDetails?.jobTitle}
            />
            <KeyValue
              title="Job Details"
              value={data?.state?.jobDetails?.jobDetails}
            />
            <KeyValue
              title="Job Location"
              value={data?.state?.jobDetails?.jobLocation}
            />
          </DataCard>
          <DataCard title="Interview Settings">
            <KeyValue
              title="Interview Duration"
              value={
                interviewDurationOptions.find(
                  (item) =>
                    item?.value ===
                    data?.state?.interviewSettings?.interviewDuration
                )?.label
              }
            />
            <KeyValue
              title="Interview Language"
              value={
                interviewLanguageOptions.find(
                  (item) =>
                    item?.value ===
                    data?.state?.interviewSettings?.interviewLanguage
                )?.label
              }
            />
            <KeyValue
              title="Interview Mode"
              value={
                interviewModeOptions.find(
                  (item) =>
                    item?.value ===
                    data?.state?.interviewSettings?.interviewMode
                )?.label
              }
            />
          </DataCard>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewCard;
