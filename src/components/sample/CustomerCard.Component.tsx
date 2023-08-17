import { BuilderStore } from '@builder.io/react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Column,
  Grid,
  Heading,
  ListItem,
  Flex as PasteFlex,
  SkeletonLoader,
  Spinner,
  Stack,
  Text,
  Tooltip,
  UnorderedList,
} from '@twilio-paste/core';
import { EmailIcon } from '@twilio-paste/icons/cjs/EmailIcon';
import { CallIcon } from '@twilio-paste/icons/esm/CallIcon';
import { CopyIcon } from '@twilio-paste/icons/esm/CopyIcon';
import { ITask, withTaskContext } from '@twilio/flex-ui';
import React from 'react';
import { StarIcon } from "@twilio-paste/icons/esm/StarIcon";

interface CustomerCardProps {
  task?: ITask,
  builderState: BuilderStore
}

export const CustomerCard = (props: CustomerCardProps) => {

    let task = props.builderState.state.task;

//   if (!task?.attributes?.customers.customer_name) return <Spinner decorative={true} />;

  if (!task?.attributes?.customers.customer_name.length) console.log('CUSTOMER CARD: Missing name after Segment fetch, using generic one.');
  if (!task?.attributes?.customers.email.length) console.log('CUSTOMER CARD: Missing email after Segment fetch, using generic one.');
  if (!task?.attributes?.customers.phone.length)
    console.log('CUSTOMER CARD: Missing phone after Segment fetch, using generic one.');

  const copylink = async () => {
    if (task?.attributes?.customers.external_id) {
      await navigator.clipboard.writeText(task?.attributes?.customers.external_id);
    }
  };

  return (
    <Box width="space120">
      <Card padding="space70">
        {task?.attributes?.customers ? (
          <PasteFlex>
            <Grid gutter="space60">
              <Column span={2}>
                <Avatar size="sizeIcon100" name={task?.attributes?.customers.customer_name.length ? task?.attributes?.customers.customer_name : 'Jane Doe'} />
              </Column>

              <Column span={10}>
                <Box display="flex" marginLeft="space60" justifyContent="space-between">
                  <Heading as="h2" variant="heading30" marginBottom="space0">
                    {task?.attributes?.customers.customer_name.length ? task?.attributes?.customers.customer_name : 'Jane Doe'}
                  </Heading>
                  <Box>
                    <Tooltip text="Copy Segment ID.">
                      <Button variant="secondary" size="small" onClick={copylink}>
                        <CopyIcon decorative />
                      </Button>
                    </Tooltip>
                  </Box>
                </Box>
                <UnorderedList marginBottom="space0" listStyleType="">
                  <ListItem>
                    <PasteFlex vAlignContent="center">
                    <StarIcon decorative={false} title="Description of icon" />
                      <Text as={'div'} marginLeft="space30">
                        Gold member
                      </Text>
                    </PasteFlex>
                  </ListItem>
                  <ListItem>
                    <PasteFlex>
                      <EmailIcon decorative />
                      <Text as={'div'} marginLeft="space30">
                        {task?.attributes?.customers.email.length ? task?.attributes?.customers.email : 'jdoe@twilio.com'}
                      </Text>
                    </PasteFlex>
                  </ListItem>

                  <ListItem>
                    <PasteFlex>
                      <CallIcon decorative />
                      <Text as={'div'} marginLeft="space30">
                        {task?.attributes?.customers.phone.length ? task?.attributes?.customers.phone : '+13173678384'}
                      </Text>
                    </PasteFlex>
                  </ListItem>
                </UnorderedList>
              </Column>
            </Grid>
          </PasteFlex>
        ) : (
          <Grid gutter="space60">
            <Column span={2}>
              <SkeletonLoader size="sizeIcon100" borderRadius="borderRadiusCircle" />
            </Column>

            <Column span={10}>
              <Box>
                <SkeletonLoader height="32px" width="100px" />
              </Box>
              <Box marginTop="space30">
                <Stack orientation="vertical" spacing="space20">
                  <SkeletonLoader />
                  <SkeletonLoader />
                  <SkeletonLoader />
                  <SkeletonLoader />
                </Stack>
              </Box>
            </Column>
          </Grid>
        )}
      </Card>
    </Box>
  );
};

export default withTaskContext(CustomerCard);